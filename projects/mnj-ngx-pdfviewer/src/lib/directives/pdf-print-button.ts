import { Directive, Input } from '@angular/core';
import { MnjPdfViewer } from './pdf-viewer';

@Directive({
  selector: 'button[mnjPdfPrint]',
  host: { '(click)': 'onCLick($event)' },
})
export class PdfPrintButton {
  @Input('for') pdfViewer: MnjPdfViewer;

  constructor() {}

  onCLick(event: MouseEvent | TouchEvent) {
    if (this.pdfViewer) {
      this.pdfViewer.printPdf();
      event.stopPropagation();
    }
  }
}
