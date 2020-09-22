import { Renderer2 } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { PdfContainerItem } from './pdf-container';
import { PdfLinkService, PdfRenderingQueue, RenderingStates } from './services';
import { getOutputScale } from './utils';

export class PdfThumbnailRef extends PdfContainerItem {
  private _thumbnailAnchor: HTMLAnchorElement;
  private _thumbnailImage: HTMLImageElement;
  private canvas: HTMLCanvasElement;

  constructor(
    private thumbnailContainer: HTMLElement,
    public id: number,
    protected defaultViewport: PDFJS.PageViewport,
    private linkService: PdfLinkService,
    protected renderingQueue: PdfRenderingQueue,
    protected renderer: Renderer2
  ) {
    super(id, defaultViewport, renderingQueue, renderer);
    this._container = this.createItemContainer();
    const anchor = this.getOrCreateAnchorContainer();
    anchor.appendChild(this.container);
    this.thumbnailContainer.appendChild(anchor);
  }

  setPdfPage(pdfPage) {
    this._pdfPage = pdfPage;
    this.pdfPageRotate = pdfPage.rotate;
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this._viewport = pdfPage.getViewport({ scale: 1, rotation: totalRotation });
    this.reset();
  }

  reset() {
    this.cancelRendering();
    this._renderingState = RenderingStates.INITIAL;

    if (this.container) {
      this._updateItemContainer();
    }

    this._thumbnailAnchor.removeAttribute('data-loaded');

    const childNodes = this.container.childNodes;
    for (let i = childNodes.length - 1; i >= 0; i--) {
      this.container.removeChild(childNodes[i]);
    }

    if (this.canvas) {
      // Zeroing the width and height causes Firefox to release graphics
      // resources immediately, which can greatly reduce memory consumption.
      this.canvas.width = 0;
      this.canvas.height = 0;
      delete this.canvas;
    }
    if (this._thumbnailImage) {
      this._thumbnailImage.removeAttribute('src');
      delete this._thumbnailImage;
    }
  }

  update(rotation) {
    if (typeof rotation !== 'undefined') {
      this.rotation = rotation;
    }
    const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
    this._viewport = this._viewport.clone({
      scale: 1,
      rotation: totalRotation,
    });
    this.reset();
  }

  draw() {
    if (this._renderingState !== RenderingStates.INITIAL) {
      console.error('Must be in new state before drawing');
      return Promise.resolve(undefined);
    }
    this._renderingState = RenderingStates.RUNNING;

    const renderCapability = PDFJS.createPromiseCapability();
    const finishRenderTask = async (error) => {
      // The renderTask may have been replaced by a new one, so only remove
      // the reference to the renderTask if it matches the one that is
      // triggering this callback.
      if (renderTask === this._renderTask) {
        this._renderTask = null;
      }

      if (error instanceof PDFJS.RenderingCancelledException) {
        console.error(error);
        renderCapability.resolve(undefined);
        return;
      }

      this._renderingState = RenderingStates.FINISHED;
      this._convertCanvasToImage();

      if (!error) {
        renderCapability.resolve(undefined);
      } else {
        renderCapability.reject(error);
      }
    };

    const ctx = this._getPageDrawContext();
    const drawViewport = this.viewport.clone({
      scale: this.canvasWidth / this.width,
    });
    const renderContinueCallback = (cont) => {
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

    const renderContext = {
      canvasContext: ctx,
      viewport: drawViewport,
    };
    this._renderTask = this._pdfPage.render(renderContext);
    const renderTask = this._renderTask;
    renderTask.onContinue = renderContinueCallback;

    renderTask.promise.then(
      () => finishRenderTask(null),
      (error) => finishRenderTask(error)
    );
    return renderCapability.promise;
  }

  protected getOrCreateAnchorContainer(): HTMLAnchorElement {
    if (!this._thumbnailAnchor) {
      this._thumbnailAnchor = this.createThumbnailAnchor();
    }
    return this._thumbnailAnchor;
  }

  private createThumbnailAnchor(): HTMLAnchorElement {
    const thumbnailAnchor = this.renderer.createElement('a');
    this.renderer.setProperty(thumbnailAnchor, 'href', this.linkService.getAnchorUrl('#page' + this.id));
    this.renderer.setProperty(thumbnailAnchor, 'title', this._thumbPageTitle);
    this.renderer.listen(thumbnailAnchor, 'click', (event: MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      this.linkService.page = this.id;
      return false;
    });
    if (this._pdfPage) {
      this.renderer.setAttribute(thumbnailAnchor, 'data-page-number', `${this.id}`);
    }
    return thumbnailAnchor;
  }

  protected createItemContainer(): HTMLDivElement {
    const thumbnail = this.renderer.createElement('div');
    this.renderer.addClass(thumbnail, 'pdf-thumbnail');

    this.renderer.setStyle(thumbnail, 'width', `${this.canvasWidth}px`);
    this.renderer.setStyle(thumbnail, 'height', `${this.canvasHeight}px`);

    return thumbnail;
  }

  private _updateItemContainer(): HTMLElement {
    this.renderer.setStyle(this.container, 'width', `${this.canvasWidth}px`);
    this.renderer.setStyle(this.container, 'height', `${this.canvasHeight}px`);

    return this.container;
  }

  private _getOrBuildImgThumbnail(): HTMLImageElement {
    if (!this._thumbnailImage) {
      this._thumbnailImage = this._createImgThumbnail();
    }
    this.renderer.setAttribute(this.container, 'data-loaded', `${true}`);
    this.renderer.appendChild(this.container, this._thumbnailImage);
    return this._thumbnailImage;
  }

  private _createImgThumbnail(): HTMLImageElement {
    const image = this.renderer.createElement('img');
    this.renderer.addClass(image, 'thumbnailImage');
    this.renderer.setAttribute(image, 'aria-label', `Page ${this.id}`);
    this.renderer.setStyle(image, 'width', `${this.canvasWidth}px`);
    this.renderer.setStyle(image, 'height', `${this.canvasHeight}px`);
    this.renderer.setProperty(image, 'src', this.canvas.toDataURL());
    return image;
  }

  private _getPageDrawContext(noCtxScale = false) {
    if (this.canvas) {
      return;
    }
    const canvas = this.renderer.createElement('canvas');
    // Keep the no-thumbnail outline visible, i.e. `data-loaded === false`,
    // until rendering/image conversion is complete, to avoid display issues.
    this.canvas = canvas;
    const ctx = canvas.getContext('2d', { alpha: false });
    const outputScale = getOutputScale(ctx);

    canvas.width = this.canvasWidth * outputScale.sx || 0;
    canvas.height = this.canvasHeight * outputScale.sy || 0;
    canvas.style.width = this.canvasWidth + 'px';
    canvas.style.height = this.canvasHeight + 'px';

    if (!noCtxScale && outputScale.scaled) {
      ctx.scale(outputScale.sx, outputScale.sy);
    }
    return ctx;
  }

  private _convertCanvasToImage() {
    this._getPageDrawContext();
    if (this._renderingState !== RenderingStates.FINISHED) {
      return;
    }

    this.container.appendChild(this._getOrBuildImgThumbnail());
    this._thumbnailAnchor.setAttribute('data-loaded', `${true}`);

    // Zeroing the width and height causes Firefox to release graphics
    // resources immediately, which can greatly reduce memory consumption.
    this.canvas.width = 0;
    this.canvas.height = 0;
    delete this.canvas;
  }

  /**
   * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
   *              rather than calling this one directly.
   */
  cancelRendering() {
    if (this._renderTask) {
      this._renderTask.cancel();
      this._renderTask = null;
    }
    this.resume = null;
  }

  /**
   * @param {string|null} label
   */
  setPageLabel(label) {
    this._pageLabel = typeof label === 'string' ? label : null;

    this.renderer.setProperty(this.container, 'title', this._thumbPageTitle);

    if (this._renderingState !== RenderingStates.FINISHED) {
      return;
    }

    const pageTitle = this._thumbPageTitle;
    if (this._thumbnailImage) {
      this._thumbnailImage.setAttribute('aria-label', `${pageTitle}`);
    }
  }

  get _thumbPageTitle() {
    return this._pageLabel ? this._pageLabel : this.id;
  }

  get viewport(): PDFJS.PDFPageViewport {
    return this._viewport;
  }

  get width() {
    return this.viewport.width;
  }

  get height() {
    return this.viewport.height;
  }

  get canvasWidth() {
    return 98;
  }

  get canvasHeight() {
    return 98 / (this.width / this.height) || 0;
  }

  get container(): HTMLElement {
    return this._container;
  }

  get renderingId() {
    return `thumbnail-${this.id}`;
  }
}
