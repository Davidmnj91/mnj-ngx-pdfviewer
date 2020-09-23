import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Scale, SearchOptions } from '../models';
import { PdfAttachmentViewerRef } from '../pdf-attachment-viewer-ref';
import { PdfOutlineViewerRef } from '../pdf-outline-viewer-ref';
import { PdfPageViewerRef } from '../pdf-page-viewer-ref';
import { PdfThumbnailViewerRef } from '../pdf-thumbnail-viewer-ref';
import { MNJ_PDF_VIEWER_CONFIGURATION, PdfViewerConfig } from '../pdf-viewer-config';
import {
  PdfAttachmentsLoadedEvent,
  PdfDocumentPropertiesEvent,
  PdfLoadingEnd,
  PdfOutlineLoadedEvent,
  PdfPageChangingEvent,
  PdfPageLoadedEvent,
  PdfPageRotationChangingEvent,
  PdfPageScaleChangingEvent,
  PdfPagesLoadedEvent,
  PdfPageUpdatedViewAreaEvent,
  PdfPrintProgressEvent,
  PdfSearchCompleteEvent,
  PdfSearchProgressEvent,
} from '../pdf-viewer-events';
import { PdfViewerRef } from '../pdf-viewer-ref';
import { PdfViewerRegistry } from '../pdf-viewer-registry';
import { PdfDownloadManager, PdfFindController, PdfLinkService, PdfPrintManager, PdfRenderingQueue } from '../services';

let nextUniqueId = 0;

@Component({
  selector: 'mnj-pdf-viewer',
  template: '',
  exportAs: 'mnjPdfViewer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [PdfRenderingQueue, PdfDownloadManager, PdfFindController, PdfLinkService, PdfPrintManager],
  host: {
    class: 'mnj-pdf-viewer cdk-visually-hidden',
    '[attr.id]': 'id',
    '[attr.disabled]': 'disabled',
  },
})
export class MnjPdfViewer implements OnDestroy {
  @Input()
  get pdfSrc(): string | Uint8Array | ArrayBuffer {
    return this._pdfRef.pdfSrc;
  }

  set pdfSrc(value: string | Uint8Array | ArrayBuffer) {
    this._pdfRef.pdfSrc = value;
  }

  @Input()
  get page(): number {
    return this._pdfRef.currentPage;
  }

  set page(value: number) {
    this._pdfRef.currentPage = value;
  }

  @Input()
  get scale(): Scale {
    return this._pdfRef.currentScale;
  }

  set scale(value: Scale) {
    this._pdfRef.currentScale = value;
  }

  @Input()
  get rotation(): number {
    return this._pdfRef.currentRotation;
  }

  set rotation(value: number) {
    this._pdfRef.currentRotation = value;
  }

  @Input()
  get searchOptions(): SearchOptions {
    return this._pdfRef.currentSearchOptions;
  }

  set searchOptions(searchOptions: SearchOptions) {
    this._pdfRef.currentSearchOptions = searchOptions;
  }

  /** Whether pdf viewer is disabled. */
  @Input('pdfViewerDisabled')
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    //this._pdfRef.disabled = this._disabled;
  }

  private _disabled: boolean;

  // Pdf Viewer Events
  @Output() pdfLoaded = new EventEmitter<PdfLoadingEnd>();
  @Output() pdfProperties = new EventEmitter<PdfDocumentPropertiesEvent>();
  @Output() pdfSearchProgress = new EventEmitter<PdfSearchProgressEvent>();
  @Output() pdfSearchComplete = new EventEmitter<PdfSearchCompleteEvent>();
  @Output() pdfPrintProgress = new EventEmitter<PdfPrintProgressEvent>();

  // Page Viewer Events
  @Output() pageViewerPagesLoaded = new EventEmitter<PdfPagesLoadedEvent>();
  @Output() pageViewerPageLoaded = new EventEmitter<PdfPageLoadedEvent>();
  @Output() pageViewerPageChanging = new EventEmitter<PdfPageChangingEvent>();
  @Output() pageViewerScaleChanging = new EventEmitter<PdfPageScaleChangingEvent>();
  @Output() pageViewerRotationChanging = new EventEmitter<PdfPageRotationChangingEvent>();
  @Output() pageViewerUpdateViewArea = new EventEmitter<PdfPageUpdatedViewAreaEvent>();

  // Outline Viewer Events
  @Output() outlineViewerLoaded = new EventEmitter<PdfOutlineLoadedEvent>();

  // Attachment Viewer Events
  @Output() attachmentViewerLoaded = new EventEmitter<PdfAttachmentsLoadedEvent>();

  public readonly id = `mnj-pdf-viewer-${nextUniqueId++}`;

  private readonly _pdfRef: PdfViewerRef;

  constructor(
    private renderingQueue: PdfRenderingQueue,
    private linkService: PdfLinkService,
    private findController: PdfFindController,
    private downloadManager: PdfDownloadManager,
    private printManager: PdfPrintManager,
    private registry: PdfViewerRegistry,
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(MNJ_PDF_VIEWER_CONFIGURATION) private _config: PdfViewerConfig
  ) {
    this._pdfRef = new PdfViewerRef(
      this.renderingQueue,
      this.linkService,
      this.downloadManager,
      this.printManager,
      this.findController
    );
    this.registry.registerPdfViewer(this.id, this._pdfRef);
    this._handleEvents(this._pdfRef);
  }

  ngOnDestroy(): void {
    this._pdfRef.dispose();
    this.registry.removePdfViewer(this.id);
  }

  // TODO: Move all this methods to a registry to manage subscriptions and unSubscriptions globally
  public registerPageViewer(): PdfPageViewerRef {
    const pdfPageViewerRef = new PdfPageViewerRef(
      this.id,
      this.renderingQueue,
      this.linkService,
      this.findController,
      this.downloadManager,
      this._config
    );
    this._pdfRef.pdfPageViewer = pdfPageViewerRef;
    this._handlePageViewerEvents(pdfPageViewerRef);
    return pdfPageViewerRef;
  }

  public registerThumbnailViewer(): PdfThumbnailViewerRef {
    const pdfThumbnailViewerRef = new PdfThumbnailViewerRef(this.id, this.linkService, this.renderingQueue);
    this._pdfRef.pdfThumbnailViewer = pdfThumbnailViewerRef;
    return pdfThumbnailViewerRef;
  }

  public registerAttachmentViewer(): PdfAttachmentViewerRef {
    const pdfAttachmentViewerRef = new PdfAttachmentViewerRef(this.downloadManager);
    this._pdfRef.pdfAttachmentViewer = pdfAttachmentViewerRef;
    this._handleAttachmentViewerEvents(pdfAttachmentViewerRef);
    return pdfAttachmentViewerRef;
  }

  public registerOutlineViewer(): PdfOutlineViewerRef {
    const pdfOutlineViewerRef = new PdfOutlineViewerRef(this.linkService);
    this._pdfRef.pdfOutlineViewer = pdfOutlineViewerRef;
    this._handleOutlineViewerEvents(pdfOutlineViewerRef);
    return pdfOutlineViewerRef;
  }

  retrievePdfProperties() {
    return this._pdfRef.getDocumentProperties();
  }

  downloadPdf() {
    this._pdfRef.downloadPdf(this.pdfSrc);
  }

  printPdf() {
    this._pdfRef.printPdf(this._config.printDPI);
  }

  search(phrase: string) {
    this._pdfRef.currentSearchQuery = phrase;
  }

  findNext() {
    this._pdfRef.findNext();
  }

  findPrevious() {
    this._pdfRef.findPrevious();
  }

  /** Handles the events from the underlying `PdfViewerRef`. */
  private _handleEvents(ref: PdfViewerRef) {
    ref.pdfLoaded.subscribe((event) => {
      this.pdfLoaded.emit({ ...{ source: this }, ...event });

      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });

    ref.pdfPropertiesLoaded.subscribe((event) => {
      this.pdfProperties.emit({ ...{ source: this }, ...event });

      // Since all of these events run outside of change detection,
      // we need to ensure that everything is marked correctly.
      this._changeDetectorRef.markForCheck();
    });
    ref.pdfPrintProgress.subscribe((event) => {
      this.pdfPrintProgress.emit({ ...{ source: this }, ...event });
    });
    this.findController.searchState.subscribe((event) => {
      this.pdfSearchProgress.emit({ ...{ source: this }, ...event });
    });
    this.findController.searchComplete.subscribe((event) => {
      this.pdfSearchComplete.emit({ ...{ source: this }, ...event });
    });
  }

  /** Handles the events from the underlying `PdfPageViewerRef`. */
  private _handlePageViewerEvents(pageViewerRef: PdfPageViewerRef) {
    pageViewerRef.pagesLoaded.subscribe((event) => {
      this.pageViewerPagesLoaded.emit({ ...{ source: this }, ...event });
    });
    pageViewerRef.pageLoaded.subscribe((event) => {
      this.pageViewerPageLoaded.emit({ ...{ source: this }, ...event });
    });
    pageViewerRef.pageChanging.subscribe((event) => {
      this._pdfRef.syncPageAndThumbnail(event.actualPageIndex);
      this.pageViewerPageChanging.emit({ ...{ source: this }, ...event });
      this._changeDetectorRef.detectChanges();
    });
    pageViewerRef.scaleChanging.subscribe((event) => {
      this.pageViewerScaleChanging.emit({ ...{ source: this }, ...event });
    });
    pageViewerRef.rotationChanging.subscribe((event) => {
      this.pageViewerRotationChanging.emit({ ...{ source: this }, ...event });
    });
    pageViewerRef.updateViewArea.subscribe((event) => {
      this.pageViewerUpdateViewArea.emit({ ...{ source: this }, ...event });
    });
  }

  /** Handles the events from the underlying `PdfOutlineViewerRef`. */
  private _handleOutlineViewerEvents(outlineViewerRef: PdfOutlineViewerRef) {
    outlineViewerRef.outlineLoaded.subscribe((event) => {
      this.outlineViewerLoaded.emit({ ...{ source: this }, ...event });
    });
  }

  /** Handles the events from the underlying `PdfAttachmentViewerRef`. */
  private _handleAttachmentViewerEvents(attachmentViewerRef: PdfAttachmentViewerRef) {
    attachmentViewerRef.attachmentsLoaded.subscribe((event) => {
      this.attachmentViewerLoaded.emit({ ...{ source: this }, ...event });
    });
  }
}
