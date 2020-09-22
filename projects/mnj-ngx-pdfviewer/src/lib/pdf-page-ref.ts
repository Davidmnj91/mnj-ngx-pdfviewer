import { Renderer2 } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { PdfContainerItem } from './pdf-container';
import { PdfDownloadManager, PdfFindController, PdfLinkService, PdfRenderingQueue, RenderingStates } from './services';
import {
  AnnotationLayerBuilder,
  approximateFraction,
  CSS_UNITS,
  DefaultAnnotationLayerFactory,
  DefaultTextLayerFactory,
  getOutputScale,
  roundToDivide,
  TextLayerBuilder,
} from './utils';

export class PdfPageRef extends PdfContainerItem {
  private stats;
  private paintTask;
  private error;

  /** Canvas container where the Pdf page is going to be rendered */
  private _canvasContainer: HTMLCanvasElement;
  /** Container where the Pdf page text is going to be rendered */
  private _textLayerContainer: HTMLDivElement;

  private _textLayer: TextLayerBuilder;
  private _annotationLayer: AnnotationLayerBuilder;

  public scaleNumber: number;

  // TODO move page description params to each PdfPageRef to print pdf with different page sizes

  constructor(
    public pagesContainer: HTMLElement,
    public id: number,
    protected defaultViewport: PDFJS.PageViewport,
    private findController: PdfFindController,
    private linkService: PdfLinkService,
    private downloadManager: PdfDownloadManager,
    protected renderingQueue: PdfRenderingQueue,
    protected renderer: Renderer2
  ) {
    super(id, defaultViewport, renderingQueue, renderer);
    this.scaleNumber = defaultViewport.scale;
    this.renderingQueue = renderingQueue;
    this._container = this.createItemContainer(defaultViewport);
    this.pagesContainer.appendChild(this.container);
  }

  setPdfPage(page: PDFJS.PdfPageProxy) {
    this._pdfPage = page;
    this.pdfPageRotate = page.rotate;

    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this._viewport = page.getViewport({
      scale: this.scaleNumber,
      rotation: totalRotation,
    });
    this.stats = page.stats;
    this.reset();
  }

  destroy() {
    this.reset();
    if (this._pdfPage) {
      this._pdfPage.cleanup();
    }
  }

  draw() {
    if (this.renderingState !== RenderingStates.INITIAL) {
      console.error('Must be in new state before drawing');
      this.reset(); // Ensure that we reset all state to prevent issues.
    }

    if (!this.pdfPage) {
      this._renderingState = RenderingStates.FINISHED;
      return Promise.reject(new Error('Page is not loaded'));
    }

    this._renderingState = RenderingStates.RUNNING;

    const pdfPage = this.pdfPage;
    const div = this.container;
    // Wrap the canvas so that if it has a CSS transform for high DPI the
    // overflow will be hidden in Firefox.
    const canvasWrapper = this._getOrBuildCanvas();

    if (this._annotationLayer && this._annotationLayer.div) {
      // The annotation layer needs to stay on top.
      div.insertBefore(canvasWrapper, this._annotationLayer.div);
    } else {
      div.appendChild(canvasWrapper);
    }

    const textLayerDiv = this._getOrBuildTextLayer();
    if (this._annotationLayer && this._annotationLayer.div) {
      // The annotation layer needs to stay on top.
      div.insertBefore(textLayerDiv, this._annotationLayer.div);
    } else {
      div.appendChild(textLayerDiv);
    }

    this._textLayer = DefaultTextLayerFactory.createTextLayerBuilder(
      textLayerDiv,
      this.id - 1,
      this.viewport,
      this.findController
    );

    let renderContinueCallback = null;
    if (this.renderingQueue) {
      renderContinueCallback = (cont) => {
        if (!this.renderingQueue.isHighestPriority(this)) {
          this._renderingState = RenderingStates.PAUSED;
          this.resume = () => {
            this._renderingState = RenderingStates.RUNNING;
            cont();
          };
          return;
        }
        cont();
      };
    }

    const finishPaintTask = async (error) => {
      // The paintTask may have been replaced by a new one, so only remove
      // the reference to the paintTask if it matches the one that is
      // triggering this callback.
      if (paintTask === this.paintTask) {
        this.paintTask = null;
      }

      if (error instanceof PDFJS.RenderingCancelledException) {
        this.error = null;
        return;
      }

      this._renderingState = RenderingStates.FINISHED;

      this.error = error;
      if (error) {
        throw error;
      }
    };

    const paintTask = this.paintOnCanvas(canvasWrapper);
    paintTask.onRenderContinue = renderContinueCallback;
    this.paintTask = paintTask;

    const resultPromise = paintTask.promise.then(
      () =>
        finishPaintTask(null).then(() => {
          if (this._textLayer) {
            const readableStream = pdfPage.streamTextContent({
              normalizeWhitespace: true,
            });
            this._textLayer.setTextContentStream(readableStream);
            this._textLayer.render();
          }
        }),
      (reason) => finishPaintTask(reason)
    );

    if (!this._annotationLayer) {
      this._annotationLayer = DefaultAnnotationLayerFactory.createAnnotationLayerBuilder(
        this.container,
        pdfPage,
        this.linkService,
        this.downloadManager
      );
    }
    this._annotationLayer.render(this.viewport);

    div.setAttribute('data-loaded', `${true}`);

    return resultPromise;
  }

  private paintOnCanvas(canvasWrapper) {
    const renderCapability = PDFJS.createPromiseCapability();
    const result = {
      promise: renderCapability.promise,
      onRenderContinue(cont) {
        cont();
      },
      cancel() {
        renderTask.cancel();
      },
    };

    const viewport = this.viewport;
    const canvas = canvasWrapper;

    // Keep the canvas hidden until the first draw callback, or until drawing
    // is complete when `!this.renderingQueue`, to prevent black flickering.
    canvas.setAttribute('hidden', 'hidden');
    let isCanvasHidden = true;
    const showCanvas = function () {
      if (isCanvasHidden) {
        canvas.removeAttribute('hidden');
        isCanvasHidden = false;
      }
    };

    const ctx = canvasWrapper.getContext('2d', { alpha: false });
    const outputScale = getOutputScale(ctx);

    /*if (this.useOnlyCssZoom) {
            const actualSizeViewport = viewport.clone({ scale: CSS_UNITS });
            // Use a scale that makes the canvas have the originally intended size
            // of the page.
            outputScale.sx *= actualSizeViewport.width / viewport.width;
            outputScale.sy *= actualSizeViewport.height / viewport.height;
            outputScale.scaled = true;
        }*/

    const pixelsInViewport = viewport.width * viewport.height;
    const maxScale = Math.sqrt(16777216 / pixelsInViewport);
    if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
      outputScale.sx = maxScale;
      outputScale.sy = maxScale;
      outputScale.scaled = true;
    }
    const sfx = approximateFraction(outputScale.sx);
    const sfy = approximateFraction(outputScale.sy);
    canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
    canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
    canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
    canvas.style.height = roundToDivide(viewport.height, sfy[1]) + 'px';
    // Add the viewport so it's known what it was originally drawn with.
    //this.paintedViewportMap.set(canvas, viewport);

    // Rendering area
    const transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
    const renderContext = {
      canvasContext: ctx,
      transform,
      viewport: this.viewport,
      enableWebGL: false,
      renderInteractiveForms: false,
    };
    const renderTask = this.pdfPage.render(renderContext);
    renderTask.onContinue = function (cont) {
      showCanvas();
      if (result.onRenderContinue) {
        result.onRenderContinue(cont);
      } else {
        cont();
      }
    };

    renderTask.promise.then(
      function () {
        showCanvas();
        renderCapability.resolve(undefined);
      },
      function (error) {
        showCanvas();
        renderCapability.reject(error);
      }
    );
    return result;
  }

  reset(keepZoomLayer = false, keepAnnotations = false) {
    this.cancelRendering();
    this._renderingState = RenderingStates.INITIAL;
    if (this.container) {
      this._updatePageContainer();
    }
    if (this._canvasContainer) {
      this.renderer.removeChild(this.container, this._canvasContainer);
      this._canvasContainer = null;
    }
    if (this._textLayerContainer) {
      this.renderer.removeChild(this.container, this._textLayerContainer);
      this._textLayerContainer = null;
    }
    if (this._annotationLayer) {
      if (this._annotationLayer.div) {
        this._annotationLayer.hide();
      } else {
        this._annotationLayer.cancel();
        this._annotationLayer = null;
      }
    }
    this.renderer.setAttribute(this.container, 'data-page-id', `${this.id}`);
    this.renderer.removeAttribute(this.container, 'data-loaded');
  }

  update(scale, rotation?) {
    this.scaleNumber = scale || this.scaleNumber;
    // The rotation may be zero.
    if (typeof rotation !== 'undefined') {
      this.rotation = rotation;
    }

    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this._viewport = this.viewport.clone({
      scale: this.scaleNumber * CSS_UNITS,
      rotation: totalRotation,
    });

    /*let isScalingRestricted = false;

        if (this._canvasContainer) {
            if (this.useOnlyCssZoom || (this.hasRestrictedScaling && isScalingRestricted)) {
                this.cssTransform(this.canvas, true);
                return;
            }
            if (!this.zoomLayer && !this.canvas.hasAttribute("hidden")) {
                this.zoomLayer = this.canvas.parentNode;
                this.zoomLayer.style.position = "absolute";
            }
        }
        if (this.zoomLayer) {
            this.cssTransform(this.zoomLayer.firstChild);
        }*/
    this.reset(/* keepZoomLayer = */ true, /* keepAnnotations = */ true);
  }

  updateMatches() {
    if (this.textLayer) {
      this.textLayer._updateMatches();
    }
  }

  cancelRendering() {
    if (this._renderTask) {
      this._renderTask.cancel();
    }
    if (this.textLayer) {
      this.textLayer.cancel();
      this._textLayer = null;
    }
    if (this._annotationLayer) {
      this._annotationLayer.cancel();
      this._annotationLayer = null;
    }
  }

  private _updatePageContainer(): HTMLElement {
    this.renderer.setStyle(this.container, 'width', `${this.viewport.width}px`);
    this.renderer.setStyle(this.container, 'height', `${this.viewport.height}px`);

    return this.container;
  }

  protected createItemContainer(defaultViewport?: PDFJS.PageViewport): HTMLDivElement {
    const pageElement = this.renderer.createElement('div');
    this.renderer.addClass(pageElement, 'pdf-page');
    this.renderer.setStyle(pageElement, 'position', 'relative');

    if (this.pdfPage) {
      this.renderer.setAttribute(pageElement, 'data-page-number', `${this.id}`);
    }

    if (defaultViewport) {
      this.renderer.setStyle(pageElement, 'width', `${defaultViewport.width}px`);
      this.renderer.setStyle(pageElement, 'height', `${defaultViewport.height}px`);
    }

    return pageElement;
  }

  private _getOrBuildTextLayer(): any {
    if (!this._textLayerContainer) {
      this._textLayerContainer = this._createTextLayer();
    }
    this.renderer.appendChild(this.container, this._textLayerContainer);
    return this._textLayerContainer;
  }

  private _createTextLayer() {
    const { height, width } = this.viewport;
    const coercedHeight = Math.floor(height);
    const coercedWidth = Math.floor(width);

    const textLayer: HTMLDivElement = this.renderer.createElement('div');
    this.renderer.addClass(textLayer, 'textLayer');
    this.renderer.setStyle(textLayer, 'position', 'absolute');
    this.renderer.setStyle(textLayer, 'height', `${coercedHeight}px`);
    this.renderer.setStyle(textLayer, 'width', `${coercedWidth}px`);
    this.renderer.setStyle(textLayer, 'top', `0`);
    this.renderer.setStyle(textLayer, 'left', `0`);
    this.renderer.setStyle(textLayer, 'right', `0`);
    this.renderer.setStyle(textLayer, 'bottom', `0`);
    this.renderer.setStyle(textLayer, 'opacity', `0.2`);
    this.renderer.setStyle(textLayer, 'line-height', '1');
    return textLayer;
  }

  private _getOrBuildCanvas() {
    if (!this._canvasContainer) {
      this._canvasContainer = this._createCanvas();
    }
    this.renderer.appendChild(this.container, this._canvasContainer);
    return this._canvasContainer;
  }

  private _createCanvas() {
    const { height, width } = this.viewport;
    const coercedHeight = Math.floor(height);
    const coercedWidth = Math.floor(width);

    const canvas: HTMLCanvasElement = this.renderer.createElement('canvas');
    canvas.height = coercedHeight;
    canvas.width = coercedWidth;
    this.renderer.setAttribute(canvas, 'aria-label', `Page ${this.id}`);
    this.renderer.setStyle(canvas, 'height', `${coercedHeight}px`);
    this.renderer.setStyle(canvas, 'width', `${coercedWidth}px`);
    return canvas;
  }

  setPageLabel(label) {
    this._pageLabel = typeof label === 'string' ? label : null;

    if (this._pageLabel !== null) {
      this.container.setAttribute('data-page-label', this._pageLabel);
    } else {
      this.container.removeAttribute('data-page-label');
    }
  }

  getPagePoint(x, y) {
    return this.viewport.convertToPdfPoint(x, y);
  }

  get textLayer(): TextLayerBuilder {
    return this._textLayer;
  }

  get viewport(): PDFJS.PDFPageViewport {
    return this._viewport;
  }

  get renderingState(): RenderingStates {
    return this._renderingState;
  }

  get renderingId() {
    return 'page' + this.id;
  }

  get width() {
    return this.viewport.width;
  }

  get height() {
    return this.viewport.height;
  }
}
