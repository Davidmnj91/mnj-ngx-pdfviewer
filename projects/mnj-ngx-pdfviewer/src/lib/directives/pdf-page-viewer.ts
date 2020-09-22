import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { PdfPageViewerRef } from '../pdf-page-viewer-ref';
import { MnjPdfViewer } from './pdf-viewer';

@Component({
  selector: 'mnj-pdf-page-viewer, [mnjPdfPageViewer]',
  template: '',
  styleUrls: ['./pdf-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'mnj-page-viewer' },
})
export class PdfPageViewer implements AfterViewInit {
  @Input('for')
  get pdfViewer(): MnjPdfViewer {
    return this._pdfViewer;
  }

  set pdfViewer(value: MnjPdfViewer) {
    if (this._pdfViewer !== value) {
      if (this.pageViewerRef) {
        this.pageViewerRef.dispose();
        this.pageViewerRef = null;
      }
      this._pdfViewer = value;
      this.pageViewerRef = this.pdfViewer.registerPageViewer();
    }
  }

  private _pdfViewer: MnjPdfViewer;

  private pageViewerRef: PdfPageViewerRef;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.pageViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
  }
}
