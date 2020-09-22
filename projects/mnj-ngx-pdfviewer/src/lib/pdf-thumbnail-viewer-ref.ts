import { coerceElement } from '@angular/cdk/coercion';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { ElementRef } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { PdfContainer } from './pdf-container';
import { PdfThumbnailRef } from './pdf-thumbnail-ref';
import { PdfLinkService, PdfRenderingQueue } from './services';
import { getVisibleElements, isValidRotation, scrollIntoView, watchScroll } from './utils';

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
});

export class PdfThumbnailViewerRef extends PdfContainer<PdfThumbnailRef> {
  private scroll;

  constructor(public id: string, protected linkService: PdfLinkService, protected renderingQueue: PdfRenderingQueue) {
    super(renderingQueue);
  }

  withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this {
    const element = coerceElement(rootElement);
    this.renderer.setStyle(element, 'overflow', 'auto');
    this.renderer.setStyle(element, 'height', '100%');
    this.renderer.setStyle(element, 'display', 'block');

    if (element !== this.container) {
      if (this.container) {
        this._removeRootElementListeners(this.container);
      }

      this.container = element;

      this.renderingQueue.setThumbnailViewer(this);
      this.scroll = watchScroll(this.container, this._scrollUpdate);
      this._resetView();
    }

    return this;
  }

  dispose() {
    this.items.forEach((i) => i.reset());
    this.setDocument(null);

    this.renderingQueue.setThumbnailViewer(null);
  }

  setDocument(pdfDocument: PDFJS.PDFDocumentProxy) {
    if (this.pdfDocument) {
      this._cancelRendering();
      this._resetView();
    }

    this.pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }

    pdfDocument
      .getPage(1)
      .then((firstPdfPage) => {
        const pagesCount = pdfDocument.numPages;
        const viewport = firstPdfPage.getViewport({ scale: 1 });
        for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
          const thumbnail = new PdfThumbnailRef(
            this.container,
            pageNum,
            viewport.clone(),
            this.linkService,
            this.renderingQueue,
            this.renderer
          );
          this.items.push(thumbnail);
        }

        // Set the first `pdfPage` immediately, since it's already loaded,
        // rather than having to repeat the `PDFDocumentProxy.getPage` call in
        // the `this._ensurePdfPageLoaded` method before rendering can start.
        const firstThumbnailView = this.items[0];
        if (firstThumbnailView) {
          firstThumbnailView.setPdfPage(firstPdfPage);
        }

        // Ensure that the current thumbnail is always highlighted on load.
        const thumbnailView = this.items[this._currentPageNumber - 1];
        thumbnailView.container.classList.add('selected');
      })
      .catch((reason) => {
        console.error('Unable to initialize thumbnail viewer', reason);
      });
  }

  scrollThumbnailIntoView(pageNumber) {
    if (!this.pdfDocument) {
      return;
    }
    const thumbnailView = this.items[pageNumber - 1];

    if (!thumbnailView) {
      console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.');
      return;
    }

    if (pageNumber !== this._currentPageNumber) {
      const prevThumbnailView = this.items[this._currentPageNumber - 1];
      // Remove the highlight from the previous thumbnail...
      prevThumbnailView.container.classList.remove('selected');
      // ... and add the highlight to the new thumbnail.
      thumbnailView.container.classList.add('selected');
    }
    const visibleThumbs = this._getVisibleThumbs();
    const numVisibleThumbs = visibleThumbs.views.length;

    // If the thumbnail isn't currently visible, scroll it into view.
    if (numVisibleThumbs > 0) {
      const first = visibleThumbs.first.id;
      // Account for only one thumbnail being visible.
      const last = numVisibleThumbs > 1 ? visibleThumbs.last.id : first;

      let shouldScroll = false;
      if (pageNumber <= first || pageNumber >= last) {
        shouldScroll = true;
      } else {
        visibleThumbs.views.some((view) => {
          if (view.id !== pageNumber) {
            return false;
          }
          shouldScroll = view.percent < 100;
          return true;
        });
      }
      if (shouldScroll) {
        scrollIntoView(thumbnailView.container, this.container, { top: -19 });
      }
    }

    this._currentPageNumber = pageNumber;
  }

  update() {
    this.renderingQueue.renderHighestPriority();
  }

  private _getVisibleThumbs() {
    return getVisibleElements(this.container, this.items);
  }

  private _cancelRendering() {
    for (let i = 0, ii = this.items.length; i < ii; i++) {
      if (this.items[i]) {
        this.items[i].cancelRendering();
      }
    }
  }

  get pagesRotation() {
    return this._pagesRotation;
  }

  set pagesRotation(rotation) {
    if (!isValidRotation(rotation)) {
      throw new Error('Invalid thumbnails rotation angle.');
    }
    if (!this.pdfDocument) {
      return;
    }
    if (this._pagesRotation === rotation) {
      return; // The rotation didn't change.
    }
    this._pagesRotation = rotation;

    for (let i = 0, ii = this.items.length; i < ii; i++) {
      this.items[i].update(rotation);
    }
  }

  /**
   * @param {Array|null} labels
   */
  setPageLabels(labels) {
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

  forceRendering() {
    const visibleThumbs = this._getVisibleThumbs();
    const thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this.items, this.scroll.down);
    if (thumbView) {
      this._ensurePdfPageLoaded(thumbView).then(() => this.renderingQueue.renderView(thumbView));
      return true;
    }
    return false;
  }

  private _scrollUpdate = () => {
    if (!this.items || this.items.length === 0) {
      return;
    }
    this.update();
  };

  /** Removes the manually-added event listeners from the root element. */
  private _removeRootElementListeners(element: HTMLElement) {
    element.removeEventListener('scroll', this._scrollUpdate, passiveEventListenerOptions);
  }
}
