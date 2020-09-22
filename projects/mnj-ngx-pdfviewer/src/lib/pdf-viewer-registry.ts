import { Injectable, OnDestroy } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import * as PDFJSWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { PdfViewerRef } from './pdf-viewer-ref';

function registerWorker() {
  PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker;
}

function unRegisterWorker() {
  PDFJS.GlobalWorkerOptions.workerSrc = null;
}

@Injectable({ providedIn: 'root' })
export class PdfViewerRegistry implements OnDestroy {
  private _pdfViewerRefInstances: { [viewer: string]: PdfViewerRef } = {};

  constructor() {}

  registerPdfViewer(viewerId: string, pdfViewerRef: PdfViewerRef) {
    if (Object.keys(this._pdfViewerRefInstances).length === 0) {
      registerWorker();
    }
    this._pdfViewerRefInstances[viewerId] = pdfViewerRef;
  }

  removePdfViewer(viewerId: string) {
    this._pdfViewerRefInstances[viewerId] = null;
    if (Object.keys(this._pdfViewerRefInstances).length) {
      unRegisterWorker();
    }
  }

  private getReference(viewerId: string): PdfViewerRef {
    const viewerRef = this._pdfViewerRefInstances[viewerId];
    if (!viewerRef) {
      throw new Error(`Viewer ${viewerId} does not exist on the page`);
    }
    return viewerRef;
  }

  ngOnDestroy(): void {
    Object.keys(this._pdfViewerRefInstances).forEach((instance) => this.removePdfViewer(instance));
  }
}
