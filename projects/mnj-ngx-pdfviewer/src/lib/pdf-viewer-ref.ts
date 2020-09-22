import * as PDFJS from 'pdfjs-dist';
import { Subject } from 'rxjs';
import {
  DEFAULT_SCALE_DELTA,
  DEFAULT_SCALE_VALUE,
  MAX_SCALE,
  MIN_SCALE,
  PdfProperties,
  RendererType,
  Scale,
  SearchOptions,
} from './models';
import { PdfAttachmentViewerRef } from './pdf-attachment-viewer-ref';
import { Disposable } from './pdf-container';
import { PdfOutlineViewerRef } from './pdf-outline-viewer-ref';
import { PdfPageViewerRef } from './pdf-page-viewer-ref';
import { PdfThumbnailViewerRef } from './pdf-thumbnail-viewer-ref';
import {
  PdfDownloadManager,
  PdfFindController,
  PdfLinkService,
  PdfPrintManager,
  PdfRenderingQueue,
  PrintDPI,
} from './services';
import { getPageSizeMilliliters, getPDFFileNameFromURL, isValidRotation } from './utils';

export class PdfViewerRef implements Disposable {
  private _pdfSrc: string | Uint8Array | ArrayBuffer;
  private _pdfDocument: PDFJS.PDFDocumentProxy;
  private pdfProperties: PdfProperties;

  private _currentPage: number;
  private _currentScale: Scale;
  private _currentRotation: number;
  private _currentSearchQuery: string;
  private _currentSearchOptions: SearchOptions;

  private _pdfPageViewer: PdfPageViewerRef;
  private _pdfThumbnailViewer: PdfThumbnailViewerRef;
  public pdfOutlineViewer: PdfOutlineViewerRef;
  public pdfAttachmentViewer: PdfAttachmentViewerRef;

  // Events
  /** Emits when pdf has been loaded */
  pdfLoaded = new Subject<{ pdf: PDFJS.PDFDocumentProxy }>();
  /** Emits when pdf properties has been retrieved */
  pdfPropertiesLoaded = new Subject<{ properties: PdfProperties }>();
  /** Emits when pdfjs is rendering the printable version */
  pdfPrintProgress = new Subject<{ progress: number }>();

  constructor(
    public renderingQueue: PdfRenderingQueue,
    public linkService: PdfLinkService,
    public downloadManager: PdfDownloadManager,
    public printManager: PdfPrintManager,
    public findController: PdfFindController
  ) {
    this.findController.linkService = this.linkService;
  }

  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(value: number) {
    if (value < 0 && value > this.pdfDocument.numPages) {
      throw new Error(`Page ${value} doesn't exist in the current pf document`);
    }
    if (this.pdfPageViewer) {
      this.pdfPageViewer.currentPageNumber = value;
    }
    this._currentPage = value;
  }

  get currentScale(): Scale {
    return this._currentScale;
  }

  set currentScale(value: Scale) {
    if (value < MIN_SCALE || value > MAX_SCALE) {
      throw new Error(`Scale must be a value between ${MIN_SCALE} and ${MAX_SCALE}`);
    }
    if (this.pdfPageViewer) {
      this.pdfPageViewer.currentScale = value;
    }

    this._currentScale = value;
  }

  get currentRotation(): number {
    return this._currentRotation;
  }

  set currentRotation(value: number) {
    if (!isValidRotation(value)) {
      throw new Error(`${value} is not a valid rotation value must be one of 0, 90, 180, 270`);
    }
    if (this.pdfPageViewer) {
      this.pdfPageViewer.pagesRotation = value;
    }
    if (this.pdfThumbnailViewer) {
      this.pdfThumbnailViewer.pagesRotation = value;
    }
    this._currentRotation = value;
  }

  get currentSearchQuery(): string {
    return this._currentSearchQuery || '';
  }

  set currentSearchQuery(value: string) {
    this._currentSearchQuery = value;
    this.search();
  }

  get currentSearchOptions(): SearchOptions {
    return this._currentSearchOptions;
  }

  set currentSearchOptions(value: SearchOptions) {
    this._currentSearchOptions = value;
    this.search();
  }

  zoomIn(ticks) {
    if (this.pdfPageViewer.isInPresentationMode) {
      return;
    }
    let newScale = this.pdfPageViewer.currentScaleNumber;
    do {
      // @ts-ignore
      newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.ceil(newScale * 10) / 10;
      newScale = Math.min(MAX_SCALE, newScale);
    } while (--ticks > 0 && newScale < MAX_SCALE);
    this.pdfPageViewer.currentScale = newScale;
  }

  zoomOut(ticks) {
    if (this.pdfPageViewer.isInPresentationMode) {
      return;
    }
    let newScale = this.pdfPageViewer.currentScaleNumber;
    do {
      // @ts-ignore
      newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
      newScale = Math.floor(newScale * 10) / 10;
      newScale = Math.max(MIN_SCALE, newScale);
    } while (--ticks > 0 && newScale > MIN_SCALE);
    this.pdfPageViewer.currentScale = newScale;
  }

  zoomReset() {
    if (this.pdfPageViewer.isInPresentationMode) {
      return;
    }
    this.pdfPageViewer.currentScale = DEFAULT_SCALE_VALUE;
  }

  downloadPdf(pdfSrc: string | Uint8Array | ArrayBuffer) {
    const fileName = this.pdfProperties.fileName || getPDFFileNameFromURL(pdfSrc);
    if (!this.pdfDocument) {
      if (!pdfSrc) {
        throw new Error(`There is no pdf loaded`);
      }
      this.downloadManager.downloadUrl(pdfSrc, fileName);
    }
    this.pdfDocument
      .getData()
      .then((data) => {
        const blob = new Blob([data], { type: 'application/pdf' });
        this.downloadManager.download(blob, pdfSrc, fileName);
      })
      .catch((err) => {
        console.log(err);
        this.downloadManager.downloadUrl(pdfSrc, fileName);
      }); // Error occurred, try downloading with the URL.
  }

  printPdf(printDPI: PrintDPI) {
    if (!this.pdfDocument) {
      throw new Error('There is no pdf to print');
    }
    if (!this.pdfPageViewer.pageViewsReady) {
      throw new Error('Print is not ready, pdf loading');
    }
    const pagesOverview = this.pdfPageViewer.getPagesOverview();
    this.printManager.print(this, this.pdfDocument, pagesOverview, printDPI);
  }

  search() {
    this.findController.executeCommand('find', {
      query: this.currentSearchQuery,
      ...this._currentSearchOptions,
    });
  }

  findNext() {
    this.findController.executeCommand('findagain', {
      query: this.currentSearchQuery,
      ...this._currentSearchOptions,
      ...{ findPrevious: false },
    });
  }

  findPrevious() {
    this.findController.executeCommand('findagain', {
      query: this.currentSearchQuery,
      ...this._currentSearchOptions,
      ...{ findPrevious: true },
    });
  }

  getDocumentProperties(): Promise<PdfProperties> {
    return Promise.all([
      this.pdfDocument.getDownloadInfo(),
      this.pdfDocument.getMetadata(),
      this.pdfDocument.getPage(1),
    ]).then(([size, data, page]) => {
      const { info, contentDispositionFilename } = data;
      const docProperties: PdfProperties = {
        fileName: contentDispositionFilename || getPDFFileNameFromURL(this._pdfSrc || ''),
        fileSize: size.length,
        title: info.Title,
        author: info.Author,
        subject: info.Subject,
        keywords: info.Keywords,
        creationDate: PDFJS.PDFDateString.toDateObject(info.CreationDate),
        updateDate: PDFJS.PDFDateString.toDateObject(info.ModDate),
        creator: info.Creator,
        pdfProducer: info.Producer,
        pdfVersion: info.PDFFormatVersion,
        pageCount: this.pdfDocument.numPages,
        pageSize: getPageSizeMilliliters(page),
      };
      this.pdfProperties = docProperties;
      return docProperties;
    });
  }

  cleanUp() {
    if (this.pdfPageViewer) {
      this.pdfPageViewer.cleanup();
    }
    if (this.pdfThumbnailViewer) {
      this.pdfThumbnailViewer.cleanup();
    }

    // We don't want to remove fonts used by active page SVGs.
    if (this.pdfPageViewer.renderType !== RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  }

  dispose() {
    if (!this.pdfDocument) {
      return; // run cleanup when document is loaded
    }
    if (this.pdfPageViewer) {
      this.pdfPageViewer.dispose();
    }
    if (this.pdfThumbnailViewer) {
      this.pdfThumbnailViewer.dispose();
    }

    // We don't want to remove fonts used by active page SVGs.
    if (this.pdfPageViewer.renderType !== RendererType.SVG) {
      this.pdfDocument.cleanup();
    }
  }

  syncPageAndThumbnail(pageIndex: number) {
    this._currentPage = pageIndex;
    if (this.pdfThumbnailViewer) {
      this.pdfThumbnailViewer.scrollThumbnailIntoView(pageIndex);
    }
  }

  get pdfSrc(): string | Uint8Array | ArrayBuffer {
    return this._pdfSrc;
  }

  set pdfSrc(value: string | Uint8Array | ArrayBuffer) {
    if (this._pdfSrc) {
      this.cleanUp();
    }
    if (value) {
      this._pdfSrc = value;
      PDFJS.getDocument(value)
        .promise.then((pdfDocument) => {
          this.pdfDocument = pdfDocument;
          this.pdfLoaded.next({ pdf: pdfDocument });
        })
        .then(() => {
          this.getDocumentProperties().then((pdfProperties) =>
            this.pdfPropertiesLoaded.next({ properties: pdfProperties })
          );
        });
    }
  }

  get pdfDocument(): PDFJS.PDFDocumentProxy {
    return this._pdfDocument;
  }

  set pdfDocument(value: PDFJS.PDFDocumentProxy) {
    this._pdfDocument = value;
    this.getDocumentProperties();
    this.linkService.setDocument(this.pdfDocument);
    if (this._pdfPageViewer) {
      this._pdfPageViewer.setDocument(this.pdfDocument);
    }
    if (this._pdfThumbnailViewer) {
      this._pdfThumbnailViewer.setDocument(this.pdfDocument);
    }
    if (this.pdfOutlineViewer) {
      this.pdfOutlineViewer.setDocument(this.pdfDocument);
    }
    if (this.pdfAttachmentViewer) {
      this.pdfAttachmentViewer.setDocument(this.pdfDocument);
    }
  }

  get pdfPageViewer(): PdfPageViewerRef {
    return this._pdfPageViewer;
  }

  set pdfPageViewer(value: PdfPageViewerRef) {
    this._pdfPageViewer = value;
    if (this.pdfDocument) {
      this.pdfPageViewer.setDocument(this.pdfDocument);
    }
  }

  get pdfThumbnailViewer(): PdfThumbnailViewerRef {
    return this._pdfThumbnailViewer;
  }

  set pdfThumbnailViewer(value: PdfThumbnailViewerRef) {
    this._pdfThumbnailViewer = value;
    if (this.pdfDocument) {
      this.pdfThumbnailViewer.setDocument(this.pdfDocument);
    }
  }
}
