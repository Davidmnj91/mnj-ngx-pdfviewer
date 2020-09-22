import { Injectable } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';

@Injectable({ providedIn: 'root' })
export class PdfDownloadManager {
  constructor() {}

  downloadUrl(url, filename) {
    if (!PDFJS.createValidAbsoluteUrl(url, 'http://example.com')) {
      return; // restricted/invalid URL
    }
    this._download(url + '#pdfjs.action=download', filename);
  }

  downloadData(data, filename, contentType) {
    const blobUrl = PDFJS.createObjectURL(data, contentType, false);
    this._download(blobUrl, filename);
  }

  download(blob, url, filename) {
    const blobUrl = URL.createObjectURL(blob);
    this._download(blobUrl, filename);
    URL.revokeObjectURL(blobUrl);
  }

  private _download(blobUrl, filename) {
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = blobUrl;
    a.target = '_parent';
    // Use a.download if available. This increases the likelihood that
    // the file is downloaded instead of opened by another PDF plugin.
    if ('download' in a) {
      a.download = filename;
    }
    // <a> must be in the document for IE and recent Firefox versions,
    // otherwise .click() is ignored.
    (document.body || document.documentElement).appendChild(a);
    a.click();
    a.remove();
  }
}
