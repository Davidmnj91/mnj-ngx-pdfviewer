import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { PdfThumbnailViewerRef } from '../pdf-thumbnail-viewer-ref';
import { MnjPdfViewer } from './pdf-viewer';

@Component({
  selector: 'mnj-pdf-thumbnail-viewer, [mnjPdfThumbnailViewer]',
  template: '',
  styleUrls: ['./pdf-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'mnj-thumbnail-viewer' },
})
export class PdfThumbnailViewer implements AfterViewInit {
  @Input('for')
  get pdfViewer(): MnjPdfViewer {
    return this._pdfViewer;
  }

  set pdfViewer(value: MnjPdfViewer) {
    if (this._pdfViewer !== value) {
      if (this.thumbnailViewerRef) {
        this.thumbnailViewerRef.dispose();
        this.thumbnailViewerRef = null;
      }
      this._pdfViewer = value;
      this.thumbnailViewerRef = this._pdfViewer.registerThumbnailViewer();
    }
  }

  private _pdfViewer: MnjPdfViewer;

  private thumbnailViewerRef: PdfThumbnailViewerRef;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.thumbnailViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
  }
}
