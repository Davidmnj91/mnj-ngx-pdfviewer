import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';
import { MnjPdfViewer } from './pdf-viewer';

@Directive({
  selector: 'button[mnjPdfUpload]',
  host: { '(click)': 'onCLick($event)' },
})
export class PdfUploadButton implements OnInit {
  @Input('for') pdfViewer: MnjPdfViewer;

  @Output()
  fileLoaded = new EventEmitter<File>();

  private fileInput: HTMLInputElement;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.fileInput = this._buildFileInput();
    this.renderer.appendChild(this.elementRef.nativeElement, this.fileInput);
  }

  onCLick(event: MouseEvent | TouchEvent) {
    if (this.pdfViewer) {
      this.fileInput.click();
    }
  }

  upload(event) {
    const pdfFile = event.target.files[0];
    if (URL.createObjectURL) {
      this.pdfViewer.pdfSrc = URL.createObjectURL(pdfFile);
    } else {
      // Read the local file into a Uint8Array.
      const fileReader = new FileReader();
      fileReader.onload = (evt: ProgressEvent) => {
        // @ts-ignore
        const buffer = evt.target.result;
        this.pdfViewer.pdfSrc = new Uint8Array(buffer);
      };
      fileReader.readAsArrayBuffer(pdfFile);
    }
    this.fileLoaded.emit(pdfFile);
  }

  private _buildFileInput() {
    const fileInput = this.renderer.createElement('input');
    this.renderer.setProperty(fileInput, 'type', 'file');
    this.renderer.setProperty(fileInput, 'accept', '.pdf, application/pdf');
    this.renderer.listen(fileInput, 'change', (event) => this.upload(event));
    this.renderer.addClass(fileInput, 'cdk-visually-hidden');
    return fileInput;
  }
}
