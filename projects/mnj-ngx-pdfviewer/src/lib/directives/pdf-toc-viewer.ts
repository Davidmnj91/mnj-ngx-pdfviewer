import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { PdfOutlineViewerRef } from '../pdf-outline-viewer-ref';
import { MnjPdfViewer } from './pdf-viewer';

@Component({
  selector: 'mnj-pdf-toc-viewer, [mnjPdfTocViewer]',
  template: '',
  styleUrls: ['./pdf-viewer.scss'],
  encapsulation: ViewEncapsulation.None,
  host: { class: 'mnj-toc-viewer' },
})
export class PdfTocViewer implements AfterViewInit {
  @Input('for')
  get pdfViewer(): MnjPdfViewer {
    return this._pdfViewer;
  }

  set pdfViewer(value: MnjPdfViewer) {
    if (this._pdfViewer !== value) {
      if (this.outlineViewerRef) {
        this.outlineViewerRef.dispose();
        this.outlineViewerRef = null;
      }
      this._pdfViewer = value;
      this.outlineViewerRef = this._pdfViewer.registerOutlineViewer();
    }
  }

  private _pdfViewer: MnjPdfViewer;

  private outlineViewerRef: PdfOutlineViewerRef;

  constructor(public elementRef: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.outlineViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
  }
}
