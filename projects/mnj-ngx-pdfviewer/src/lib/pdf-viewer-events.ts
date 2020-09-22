import * as PDFJS from 'pdfjs-dist';
import { MnjPdfViewer } from './directives/pdf-viewer';
import { PdfLocation, PdfProperties, Scale } from './models';
import { FindState } from './services';

interface PdfEvent {
  source: MnjPdfViewer;
}

/** Emits when a PdfViewerComponent has loaded successfully a pdf */
export interface PdfLoadingEnd extends PdfEvent {
  pdf: PDFJS.PDFDocumentProxy;
}

/** Emits when a PdfViewerComponent has retrieved the loaded pdf properties */
export interface PdfDocumentPropertiesEvent extends PdfEvent {
  properties: PdfProperties;
}

/** Emits when a search has been performed across the whole pdf */
export interface PdfSearchCompleteEvent extends PdfEvent {
  matchesCount: { total: number; current: number };
}

/** Emits while performing search with any progression on the pdf */
export interface PdfSearchProgressEvent extends PdfEvent {
  state: FindState;
  previous?: any;
  matchesCount: { total: number; current: number };
}

export interface PdfPrintProgressEvent extends PdfEvent {
  progress: number;
}

/** Emits after the PageContainer has loaded all pages definitions from a given pdf */
export interface PdfPagesLoadedEvent extends PdfEvent {
  numPages: number;
}

/** Emits after a page definition has been loaded */
export interface PdfPageLoadedEvent extends PdfEvent {
  pageIndex: number;
}

/** Emits after the current visible page has changed in the current viewport */
export interface PdfPageChangingEvent extends PdfEvent {
  oldPageIndex: number;
  oldPageLabel: string;
  actualPageIndex: number;
  actualPageLabel: string;
}

/** Emits after the scale of the document has changed */
export interface PdfPageScaleChangingEvent extends PdfEvent {
  oldScale: Scale;
  oldScaleNumber: number;
  actualScale: Scale;
  actualScaleNumber: number;
}

/** Emits after the rotation of the document has changed */
export interface PdfPageRotationChangingEvent extends PdfEvent {
  oldRotation: number;
  actualRotation: number;
}

/** Emits after the view area of the pdf page section has changed */
export interface PdfPageUpdatedViewAreaEvent extends PdfEvent {
  oldLocation: PdfLocation;
  actualLocation: PdfLocation;
}

/** Emits after the TOC of the pdf has been loaded */
export interface PdfOutlineLoadedEvent extends PdfEvent {
  count: number;
}

/** Emits after the Attachments of the pdf has been loaded */
export interface PdfAttachmentsLoadedEvent extends PdfEvent {
  count: number;
}
