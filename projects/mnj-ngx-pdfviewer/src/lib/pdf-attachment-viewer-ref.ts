import { coerceElement } from '@angular/cdk/coercion';
import { ElementRef, Renderer2 } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { Subject } from 'rxjs';
import { Disposable } from './pdf-container';
import { PdfDownloadManager } from './services';

export class PdfAttachmentViewerRef implements Disposable {
  private pdfDocument: PDFJS.PDFDocumentProxy;
  private renderer: Renderer2;
  private _container: HTMLElement;
  private attachments;
  private _renderedCapability;

  //Events
  public attachmentsLoaded = new Subject<{ count: number }>();

  constructor(private downloadManager: PdfDownloadManager) {}

  withRenderer(renderer: Renderer2) {
    this.renderer = renderer;
    return this;
  }

  withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this {
    const element = coerceElement(rootElement);
    this.renderer.setStyle(element, 'overflow', 'auto');
    this.renderer.setStyle(element, 'height', '100%');
    this.renderer.setStyle(element, 'display', 'block');

    if (element !== this.container) {
      this._container = element;

      this.reset();
    }

    return this;
  }

  dispose() {
    this.reset();
    this.attachmentsLoaded.complete();
  }

  setDocument(pdfDocument: PDFJS.PDFDocumentProxy) {
    this.pdfDocument = pdfDocument;
    this.pdfDocument.getAttachments().then((attachments) => this.render({ attachments }));
  }

  reset(keepRenderedCapability = false) {
    this.attachments = null;
    this.container.textContent = '';

    if (!keepRenderedCapability) {
      this._renderedCapability = PDFJS.createPromiseCapability();
    }
  }

  render({ attachments, keepRenderedCapability = false }) {
    let attachmentsCount = 0;

    if (this.attachments) {
      this.reset(keepRenderedCapability === true);
    }
    this.attachments = attachments || null;

    if (!attachments) {
      this._dispatchEvent(attachmentsCount);
      return;
    }

    const names = Object.keys(attachments).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
    attachmentsCount = names.length;

    for (let i = 0; i < attachmentsCount; i++) {
      const item = attachments[names[i]];
      const filename = PDFJS.removeNullCharacters(PDFJS.getFilenameFromUrl(item.filename));

      const div = document.createElement('div');
      div.className = 'attachmentsItem';
      const button = document.createElement('button');
      button.textContent = filename;
      if (/\.pdf$/i.test(filename)) {
        this._bindPdfLink(button, item.content, filename);
      } else {
        this._bindLink(button, item.content, filename);
      }

      div.appendChild(button);
      this._container.appendChild(div);
    }

    this._dispatchEvent(attachmentsCount);
  }

  /**
   * Used to append FileAttachment annotations to the sidebar.
   * @private
   */
  private _appendAttachment({ id, filename, content }) {
    this._renderedCapability.promise.then(() => {
      let attachments = this.attachments;

      if (!attachments) {
        attachments = Object.create(null);
      } else {
        for (const name in attachments) {
          if (id === name) {
            return; // Ignore the new attachment if it already exists.
          }
        }
      }
      attachments[id] = {
        filename,
        content,
      };
      this.render({
        attachments,
        keepRenderedCapability: true,
      });
    });
  }

  private _bindPdfLink(button, content, filename) {
    button.onclick = () => {
      const blobUrl = PDFJS.createObjectURL(content, 'application/pdf');
      const viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename);
      window.open(viewerUrl);
      return false;
    };
  }

  private _bindLink(button, content, filename) {
    button.onclick = () => {
      this.downloadManager.downloadData(content, filename, '');
      return false;
    };
  }

  _dispatchEvent(attachmentsCount) {
    this._renderedCapability.resolve();
    this.attachmentsLoaded.next({ count: attachmentsCount });
  }

  get container(): HTMLElement {
    return this._container;
  }
}
