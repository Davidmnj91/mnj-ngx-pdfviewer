import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { PdfAttachmentViewerRef } from '../pdf-attachment-viewer-ref';
import { MnjPdfViewer } from './pdf-viewer';

@Component({
  selector: 'mnj-pdf-attachments-viewer, [mnjPdfAttachmentsViewer]',
  template: '',
  styleUrls: ['./pdf-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'mnj-attachments-viewer' },
})
export class PdfAttachmentsViewer implements AfterViewInit {
  @Input('for')
  get pdfViewer(): MnjPdfViewer {
    return this._pdfViewer;
  }

  set pdfViewer(value: MnjPdfViewer) {
    if (this._pdfViewer !== value) {
      if (this.attachmentViewerRef) {
        this.attachmentViewerRef.dispose();
        this.attachmentViewerRef = null;
      }
      this._pdfViewer = value;
      this.attachmentViewerRef = this._pdfViewer.registerAttachmentViewer();
    }
  }

  private _pdfViewer: MnjPdfViewer;

  private attachmentViewerRef: PdfAttachmentViewerRef;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.attachmentViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
  }
}
