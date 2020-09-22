import { Directive, Input } from '@angular/core';
import { MnjPdfViewer } from './pdf-viewer';

@Directive({
  selector: 'input[mnjPdfSearchInput]',
  host: { '(keyup.enter)': 'onSubmit($event)' },
})
export class PdfSearchInput {
  @Input('for') pdfViewer: MnjPdfViewer;

  constructor() {}

  onSubmit(event) {
    if (this.pdfViewer) {
      this.pdfViewer.search(event.target.value);
      event.stopPropagation();
    }
  }
}
