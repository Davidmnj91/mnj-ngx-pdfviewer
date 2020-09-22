import { Injectable } from '@angular/core';
import { PdfViewerRef } from '../pdf-viewer-ref';
import { CSS_UNITS } from '../utils';

export enum PrintDPI {
  LOW = 150,
  MEDIUM = 300,
  HIGH = 600,
  ULTRA = 1200,
}

@Injectable({ providedIn: 'root' })
export class PdfPrintManager {
  private _pdfViewer: PdfViewerRef;
  private overlayPromise;
  private activeService;
  private scratchCanvas: HTMLCanvasElement;
  private printContainer: HTMLDivElement;
  private pageStyleSheet;

  constructor() {}

  print(pdfViewer: PdfViewerRef, pdfDocument, pagesOverview, printDpi: PrintDPI) {
    if (this.activeService) {
      console.warn('Ignored window.print() because of a pending print job.');
      return;
    }
    this._pdfViewer = pdfViewer;
    this.ensureOverlay();

    try {
      this._dispatchEvent('beforeprint');
    } finally {
      if (!this.activeService) {
        console.error('Expected print service to be initialized.');
        this.ensureOverlay();
      } else {
        this.layout(pagesOverview)
          .then(() => this.renderPages(pdfDocument, pagesOverview, printDpi).then(() => this.performPrint()))
          .then(() => {
            // aborts acts on the "active" print request, so we need to check
            // whether the print request (activeServiceOnEntry) is still active.
            // Without the check, an unrelated print request (created after aborting
            // this print request while the pages were being generated) would be
            // aborted.
            if (this.active) {
              this._abort();
            }
          });
      }
    }
  }

  layout(pagesOverview) {
    return new Promise((resolve) => {
      this.throwIfInactive();
      const body = document.querySelector('body');

      this.printContainer = document.createElement('div');
      this.printContainer.classList.add('docu-printable');
      this.printContainer.style.display = 'none';
      body.appendChild(this.printContainer);
      body.setAttribute('data-pdf-printing', `${true}`);

      const hasEqualPageSizes = pagesOverview.every(
        (size) => size.width === pagesOverview[0].width && size.height === pagesOverview[0].height
      );
      if (!hasEqualPageSizes) {
        console.warn('Not all pages have the same size. The printed result may be incorrect!');
      }

      const pageSize = pagesOverview[0];

      // Insert a @page + size rule to make sure that the page size is correctly
      // set. Note that we assume that all pages have the same size, because
      // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
      this.pageStyleSheet = document.createElement('style');
      this.pageStyleSheet.textContent = this._addStylesForPrinting(pageSize.width, pageSize.height);
      body.appendChild(this.pageStyleSheet);

      resolve();
    });
  }

  renderProgress(index, total) {
    const progress = Math.round((index / total) * 100);
    this._pdfViewer.pdfPrintProgress.next({ progress });
  }

  private renderPages(pdfDocument, pagesOverview, printDpi: PrintDPI) {
    let currentPage = -1;
    const pageCount = pagesOverview.length;
    const renderNextPage = (resolve, reject) => {
      this.throwIfInactive();
      if (++currentPage >= pageCount) {
        this.renderProgress(pageCount, pageCount);
        resolve();
        return;
      }
      const index = currentPage;
      this.renderProgress(index, pageCount);
      this.renderPage(pdfDocument, index + 1, pagesOverview[index], printDpi)
        .then((page) => this.useRenderedPage(page))
        .then(() => renderNextPage(resolve, reject), reject);
    };
    return new Promise(renderNextPage);
  }

  private destroy() {
    if (this.activeService !== this) {
      // |activeService| cannot be replaced without calling destroy() first,
      // so if it differs then an external consumer has a stale reference to
      // us.
      return;
    }

    const body = document.querySelector('body');
    body.removeAttribute('data-pdfprinting');
    this.printContainer.remove();
    this.printContainer = null;

    if (this.pageStyleSheet) {
      this.pageStyleSheet.remove();
      this.pageStyleSheet = null;
    }
    this.scratchCanvas.width = this.scratchCanvas.height = 0;
    this.scratchCanvas = null;
    this.activeService = null;
  }

  private renderPage(pdfDocument, pageNumber, size, printDpi: PrintDPI) {
    const scratchCanvas = this.activeService.scratchCanvas;

    // The size of the canvas in pixels for printing.
    const PRINT_UNITS = printDpi / 72.0;
    scratchCanvas.width = Math.floor(size.width * PRINT_UNITS);
    scratchCanvas.height = Math.floor(size.height * PRINT_UNITS);

    // The physical size of the img as specified by the PDF document.
    const width = Math.floor(size.width * CSS_UNITS) + 'px';
    const height = Math.floor(size.height * CSS_UNITS) + 'px';

    const ctx = scratchCanvas.getContext('2d');
    ctx.save();
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
    ctx.restore();

    return pdfDocument
      .getPage(pageNumber)
      .then((pdfPage) => {
        const renderContext = {
          canvasContext: ctx,
          transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
          viewport: pdfPage.getViewport({ scale: 1, rotation: size.rotation }),
          intent: 'print',
        };
        return pdfPage.render(renderContext).promise;
      })
      .then(() => ({ width, height }));
  }

  private useRenderedPage(printItem) {
    this.throwIfInactive();
    const img = document.createElement('img');
    img.style.width = printItem.width;
    img.style.height = printItem.height;

    const scratchCanvas: HTMLCanvasElement = this.scratchCanvas;
    if ('toBlob' in scratchCanvas) {
      scratchCanvas.toBlob((blob) => (img.src = URL.createObjectURL(blob)));
    } else {
      // @ts-ignore
      img.src = scratchCanvas.toDataURL();
    }

    const wrapper = document.createElement('div');
    wrapper.appendChild(img);
    this.printContainer.appendChild(wrapper);

    return new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
  }

  private performPrint() {
    this.throwIfInactive();
    return new Promise((resolve) => {
      setTimeout(() => {
        if (!this.active) {
          resolve();
          return;
        }
        this.printContainer.style.display = 'block';
        print.call(window);
        // Delay promise resolution in case print() was not synchronous.
        setTimeout(resolve, 20); // Tidy-up.
      }, 0);
    });
  }

  private ensureOverlay() {
    if (!this.overlayPromise) {
      this.overlayPromise = new Promise((resolve) => resolve());
    }
    this.scratchCanvas = document.createElement('canvas');
    this.activeService = this;
    return this.overlayPromise;
  }

  private throwIfInactive() {
    if (!this.active) {
      throw new Error('This print request was cancelled or completed.');
    }
  }

  private _dispatchEvent(eventType) {
    const event = document.createEvent('CustomEvent');
    event.initCustomEvent(eventType, false, false, 'custom');
    window.dispatchEvent(event);
  }

  private _abort() {
    if (this.activeService) {
      this.destroy();
    }
  }

  private _addStylesForPrinting(width: number, height: number) {
    // Insert a @page + size rule to make sure that the page size is correctly
    // set. Note that we assume that all pages have the same size, because
    // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
    // "size:<width> <height>" is what we need. But also add "A4" because
    // Firefox incorrectly reports support for the other value.
    const pageStyle =
      '@supports ((size:A4) and (size:1pt 1pt)) {' +
      '@page { size: ' +
      width +
      'pt ' +
      height +
      'pt;' +
      ' margin: 0; }' +
      '}';
    // Print styles for the whole document to avoid getting non related pdf elements from the DOM
    const documentStyles =
      '@media print {' +
      '* { margin: 0; padding: 0; }' +
      'body > *:not(.mnj-printable) { display: none; }' +
      '.mnj-printable { height: 100%; }' +
      '.mnj-printable > div { ' +
      'position: relative; top: 0; left: 0; width: 1px; height: 1px; overflow: visible; ' +
      'page-break-after: always; page-break-inside: avoid;' +
      '}' +
      '.mnj-printable canvas, .mnj-printable img { display: block; }';
    return pageStyle + documentStyles;
  }

  get active() {
    return this === this.activeService;
  }
}
