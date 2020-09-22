import { ElementRef, Renderer2 } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { PdfRenderingQueue, RenderingStates } from './services';

export interface Disposable {
  dispose(): void;
}

export abstract class PdfContainer<C extends PdfContainerItem> implements Disposable {
  public readonly id: string;
  protected container: HTMLElement;
  protected pdfDocument: PDFJS.PDFDocumentProxy;
  protected items: C[];
  protected renderer: Renderer2;

  protected _currentPageNumber: number;
  protected _pagesRotation: number;
  protected _pageLabels = null;
  protected _pagesRequests = new WeakMap();

  constructor(protected renderingQueue: PdfRenderingQueue) {}

  withRenderer(renderer: Renderer2) {
    this.renderer = renderer;
    return this;
  }

  abstract dispose();

  protected _resetView() {
    this.items = [];
    this._currentPageNumber = 1;
    this._pageLabels = null;
    this._pagesRotation = 0;
    this._pagesRequests = new WeakMap();

    // Remove children from the DOM
    this.container.textContent = '';
  }

  abstract withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement);

  abstract setDocument(pdfDocument: PDFJS.PDFDocumentProxy);

  abstract update();

  abstract forceRendering(currentlyVisiblePages?);

  cleanup() {
    this.cancelRendering();
    this.items.forEach((i) => i.reset());
    this.setDocument(null);
  }

  protected cancelRendering() {
    for (let i = 0, ii = this.items.length; i < ii; i++) {
      if (this.items[i]) {
        this.items[i].cancelRendering();
      }
    }
  }

  /**
   * @returns {Promise} Returns a promise containing a {PDFPageProxy} object.
   * @private
   */
  protected setPageLabels(labels) {
    if (!this.pdfDocument) {
      return;
    }
    if (!labels) {
      this._pageLabels = null;
    } else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
      this._pageLabels = null;
      console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
    } else {
      this._pageLabels = labels;
    }
    // Update all the `PDFThumbnailView` instances.
    for (let i = 0, ii = this.items.length; i < ii; i++) {
      const label = this._pageLabels && this._pageLabels[i];
      this.items[i].setPageLabel(label);
    }
  }

  protected _ensurePdfPageLoaded(itemView) {
    if (itemView.pdfPage) {
      return Promise.resolve(itemView.pdfPage);
    }
    if (this._pagesRequests.has(itemView)) {
      return this._pagesRequests.get(itemView);
    }
    const promise = this.pdfDocument
      .getPage(itemView.id)
      .then((pdfPage) => {
        if (!itemView.pdfPage) {
          itemView.setPdfPage(pdfPage);
        }
        this._pagesRequests.delete(itemView);
        return pdfPage;
      })
      .catch((reason) => {
        console.error('Unable to get page for page view', reason);
        // Page error -- there is nothing that can be done.
        this._pagesRequests.delete(itemView);
      });
    this._pagesRequests.set(itemView, promise);
    return promise;
  }
}

export abstract class PdfContainerItem {
  protected _container: HTMLElement;
  protected _pdfPage: PDFJS.PDFPageProxy;
  protected _pageLabel: string;

  public rotation: number = 0;
  protected pdfPageRotate: number;
  protected _viewport: PDFJS.PageViewport;

  protected _renderingState = RenderingStates.INITIAL;
  protected _renderTask: PDFJS.PDFRenderTask;
  public resume: () => void;

  constructor(
    public id: number,
    protected defaultViewport: PDFJS.PageViewport,
    protected renderingQueue: PdfRenderingQueue,
    protected renderer: Renderer2
  ) {
    this._viewport = defaultViewport;
    this.pdfPageRotate = defaultViewport.rotation;
  }

  protected abstract createItemContainer(defaultViewport): HTMLElement;

  get pdfPage(): PDFJS.PDFPageProxy {
    return this._pdfPage;
  }

  abstract setPdfPage(pdfPage);

  abstract reset();

  abstract draw();

  abstract cancelRendering();

  abstract setPageLabel(label);

  abstract get renderingId();

  get container(): HTMLElement {
    return this._container;
  }

  get viewport(): PDFJS.PDFPageViewport {
    return this._viewport;
  }

  get renderingState(): RenderingStates {
    return this._renderingState;
  }

  get width() {
    return this.viewport.width;
  }

  get height() {
    return this.viewport.height;
  }
}
