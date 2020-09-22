import { animate, style, transition, trigger } from '@angular/animations';
import { coerceElement } from '@angular/cdk/coercion';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  MnjPdfViewer,
  PdfDocumentPropertiesEvent,
  PdfLoadingEnd,
  PdfPageScaleChangingEvent,
  PdfProperties,
  rotateLeft,
  rotateRight,
  Scale,
} from 'mnj-ngx-pdfviewer';
import { PdfPrintProgressEvent } from 'projects/mnj-ngx-pdfviewer/src/lib';

const PDF_SRC_DATA = 'pdf_src';

const ZoomOptions = {
  0.5: '50%',
  0.75: '75%',
  1: '100%',
  1.5: '150%',
  2: '200%',
  2.5: '250%',
  3: '300%',
  3.5: '350%',
  4: '400%',
  auto: 'Auto',
  'page-actual': 'Page Actual',
  'page-width': 'Page width',
  'page-height': 'Page height',
  'page-fit': 'Page fit',
};

const ZoomStep = 0.5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ transform: 'translateZ(-80px)', opacity: 0 }),
        animate('0.4s linear', style({ transform: 'translateZ(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateZ(0)', opacity: 1 }),
        animate('0.4s linear', style({ transform: 'translateZ(-80px)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('controlsContainer') controlsContainer: ElementRef<HTMLDivElement>;
  @ViewChild('pdfPropertiesDialog') propertiesDialog: TemplateRef<any>;
  @ViewChild('viewer') pdfViewer: MnjPdfViewer;

  @Input() pdfSrc: string | Uint8Array | ArrayBuffer =
    window[PDF_SRC_DATA] || 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';

  pdf;

  outlines = 0;
  attachments = 0;

  pdfProps: PdfProperties;

  selectedScaleNumber = 1;

  zoomOptions = ZoomOptions;

  matchesFound: { total: number; current: number } = { total: 0, current: 0 };

  _showLoader = false;
  _loadingProgress = 0;

  searchForm = new FormGroup({
    caseSensitive: new FormControl(false),
    entireWord: new FormControl(false),
    highlightAll: new FormControl(true),
    phraseSearch: new FormControl(false),
  });

  pageControl = new FormControl(1);
  scaleControl = new FormControl(1);
  rotationControl = new FormControl(0);

  viewerForm = new FormGroup({
    pageControl: this.pageControl,
    scaleControl: this.scaleControl,
    rotationControl: this.rotationControl,
    searchControl: this.searchForm,
  });

  hiddenNodes = [];

  color = 'accent';

  set theme(value: 'light-theme' | 'dark-theme') {
    if (value !== this._theme) {
      this._applyTheme(value);
      this._theme = value;
    }
  }

  private _theme: 'light-theme' | 'dark-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    _elementRef: ElementRef<HTMLElement>,
    private dialog: MatDialog,
    private _changeDetectorRef: ChangeDetectorRef,
    private _overlayContainer: OverlayContainer
  ) {}

  ngAfterViewInit(): void {
    this.theme = 'light-theme';
    setTimeout((_) => this._updateControlVisibility());
  }

  private _updateControlVisibility(): void {
    this.hiddenNodes = [];
    const container = coerceElement(this.controlsContainer.nativeElement);
    const children: HTMLCollection = container.children;
    let actualWidth = container.clientWidth;
    let index = 0;
    while (actualWidth && index < children.length) {
      const child: HTMLElement = children[index] as HTMLElement;
      const style = getComputedStyle(child);
      const childWidth =
        child.offsetWidth +
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth) +
        parseFloat(style.marginLeft) +
        parseFloat(style.marginRight);
      child.style.visibility = 'visible';
      if (childWidth < actualWidth) {
        actualWidth -= childWidth;
      } else {
        break;
      }
      index++;
    }
    // Left items must be hidden
    for (index; index < children.length; index++) {
      const child = children[index] as HTMLElement;
      const node = child.cloneNode(true);
      child.style.visibility = 'hidden';
      this.hiddenNodes.push(node);
    }
    this._changeDetectorRef.detectChanges();
  }

  onPdfLoaded(pdf: PdfLoadingEnd): void {
    this.pdf = pdf.pdf;
    this.pdf.getOutline().then((r) => (this.outlines = (r && r.lenght) || 0));
    this.pdf.getAttachments().then((r) => (this.attachments = (r && Object.keys(r).length) || 0));
  }

  onPdfProperties(pdfProps: PdfDocumentPropertiesEvent): void {
    this.pdfProps = pdfProps.properties;
  }

  showProperties(pdfProps: PdfProperties): void {
    this.pdfProps = pdfProps;
    this.dialog.open(this.propertiesDialog);
  }

  previousPage(): void {
    this.pageControl.setValue(Math.max(1, this.pageControl.value - 1));
    this.selectPage();
  }

  selectPage(): void {
    this.pdfViewer.page = this.pageControl.value;
  }

  nextPage(): void {
    this.pageControl.patchValue(Math.min(this.pdf.numPages, this.pageControl.value + 1));
    this.selectPage();
  }

  zoomOut(): void {
    this.scaleControl.setValue(Math.max(0.4, this.selectedScaleNumber - ZoomStep));
  }

  zoomIn(): void {
    this.scaleControl.setValue(Math.min(4, this.selectedScaleNumber + ZoomStep));
  }

  getScale(): Scale {
    return this.scaleControl.value;
  }

  updateScale(event: PdfPageScaleChangingEvent): void {
    this.scaleControl.setValue(event.actualScale);
    this.selectedScaleNumber = event.actualScaleNumber;
  }

  getScaleOptionValue(value): void {
    const parsedValue = Number.parseFloat(value);
    return isNaN(parsedValue) ? value : parsedValue;
  }

  rotateLeft(): void {
    this.rotationControl.setValue(rotateLeft(this.rotationControl.value));
  }

  rotateRight(): void {
    this.rotationControl.setValue(rotateRight(this.rotationControl.value));
  }

  onSearchComplete(event): void {
    this.matchesFound = event.matchesCount;
  }

  onSearchState(event): void {
    this.matchesFound = event.matchesCount;
  }

  showNewTab(): void {
    const externalViewer = window.open(location.origin, '_blank');
    externalViewer[PDF_SRC_DATA] = this.pdfViewer.pdfSrc;
  }

  onPdfUploaded(pdf) {
    this.pdfViewer.pdfSrc = pdf;
  }

  onPdfDropped(event): void {
    event.preventDefault();
    event.stopPropagation();
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      for (const file of files) {
        if (file.type === 'application/pdf') {
          const fileReader = new FileReader();
          fileReader.onload = (evt: ProgressEvent) => {
            // @ts-ignore
            const buffer = evt.target.result;
            this.pdfViewer.pdfSrc = new Uint8Array(buffer);
          };
          fileReader.readAsArrayBuffer(file);
        }
      }
    }
  }

  onPrintProgress(event: PdfPrintProgressEvent) {
    const { progress } = event;
    if (progress === 0 || progress === 100) {
      this._showLoader = false;
      this._loadingProgress = 0;
      return;
    }
    this._showLoader = true;
    this._loadingProgress = progress;
  }

  _applyTheme(theme: 'light-theme' | 'dark-theme'): void {
    this.document.body.classList.remove(this._theme);
    this._overlayContainer.getContainerElement().classList.remove(this._theme);
    this.document.body.classList.add(theme);
    this._overlayContainer.getContainerElement().classList.add(theme);
  }
}
