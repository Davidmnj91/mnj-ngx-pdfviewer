import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { PdfProperties } from '../models';
import { MnjPdfViewer } from './pdf-viewer';

@Directive({
  selector: 'button[mnjPdfProperties]',
  host: { '(click)': 'onCLick($event)' },
})
export class PdfPropertiesButton {
  @Input('for') pdfViewer: MnjPdfViewer;

  @Output() pdfProperties = new EventEmitter<PdfProperties>();

  constructor() {}

  onCLick(event: MouseEvent | TouchEvent) {
    if (this.pdfViewer) {
      this.pdfViewer.retrievePdfProperties().then((properties) => this.pdfProperties.emit(properties));
    }
    event.stopPropagation();
  }
}
