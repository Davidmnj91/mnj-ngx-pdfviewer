import { Directive, Input } from '@angular/core';
import { MnjPdfViewer } from './pdf-viewer';

@Directive({
  selector: 'button[mnjPdfDownload]',
  host: { '(click)': 'onCLick($event)' },
})
export class PdfDownloadButton {
  @Input('for') pdfViewer: MnjPdfViewer;

  constructor() {}

  onCLick(event: MouseEvent | TouchEvent) {
    if (this.pdfViewer) {
      this.pdfViewer.downloadPdf();
      event.stopPropagation();
    }
  }
}
