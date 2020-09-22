import { coerceElement } from '@angular/cdk/coercion';
import { normalizePassiveListenerOptions } from '@angular/cdk/platform';
import { ElementRef, TemplateRef } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { Subject } from 'rxjs';
import {
  MAX_AUTO_SCALE,
  PdfLocation,
  PresentationModeState,
  RendererType,
  Scale,
  ScrollMode,
  SpreadMode,
} from './models';
import { PdfContainer } from './pdf-container';
import { PdfPageRef } from './pdf-page-ref';
import { PdfViewerConfig } from './pdf-viewer-config';
import { PdfDownloadManager, PdfFindController, PdfLinkService, PdfRenderingQueue } from './services';
import {
  CSS_UNITS,
  getVisibleElements,
  isPortraitOrientation,
  isValidRotation,
  PDFPageViewBuffer,
  scrollIntoView,
  watchScroll,
} from './utils';

/** Template that can be used to create a loading helper element. */
export interface PdfViewerHelperTemplate<T = any> {
  template: TemplateRef<T> | null;
  matchSize: boolean;
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
});

export class PdfPageViewerRef extends PdfContainer<PdfPageRef> {
  private _disabled: boolean;
  private scroll;
  private _currentScaleNumber: number;
  private _currentScale: Scale = null;
  private _buffer = new PDFPageViewBuffer(this._config.maxPagesRendered);
  private _location: PdfLocation;

  private _pageViewsReady = false;
  private _scrollMode = ScrollMode.VERTICAL;
  private _spreadMode = SpreadMode.NONE;
  private presentationModeState: PresentationModeState;
  private _renderType = RendererType.CANVAS;

  //Events
  public pagesLoaded = new Subject<{ numPages: number }>();
  public pageLoaded = new Subject<{ pageIndex: number }>();
  public pageChanging = new Subject<{
    oldPageIndex: number;
    oldPageLabel: string;
    actualPageIndex: number;
    actualPageLabel: string;
  }>();
  public scaleChanging = new Subject<{
    oldScale: Scale;
    oldScaleNumber: number;
    actualScale: Scale;
    actualScaleNumber: number;
  }>();
  public rotationChanging = new Subject<{
    oldRotation: number;
    actualRotation: number;
  }>();
  public updateViewArea = new Subject<{
    oldLocation: PdfLocation;
    actualLocation: PdfLocation;
  }>();

  constructor(
    public id: string,
    protected renderingQueue: PdfRenderingQueue,
    protected linkService: PdfLinkService,
    private findController: PdfFindController,
    private downloadManager: PdfDownloadManager,
    private _config: PdfViewerConfig
  ) {
    super(renderingQueue);
    if (findController) {
      this.findController.pdfPageContainer = this;
    }
    this._currentScaleNumber = 1;
    this._currentScale = _config.scale;
    this._pagesRotation = _config.rotation;
    this._currentPageNumber = _config.initialPage;
  }

  withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this {
    const element = coerceElement(rootElement);
    this.renderer.setStyle(element, 'overflow', 'auto');
    this.renderer.setStyle(element, 'height', '100%');
    this.renderer.setStyle(element, 'display', 'block');

    if (element !== this.container) {
      if (this.container) {
        this._removeRootElementListeners(this.container);
      }

      this.container = element;

      this.renderingQueue.setViewer(this);
      this.linkService.setViewer(this);
      this.scroll = watchScroll(this.container, this._scrollUpdate);
      this._resetView();
    }

    return this;
  }

  dispose() {
    this.items.forEach((i) => i.reset());
    this.setDocument(null);

    this.pagesLoaded.complete();
    this.pageLoaded.complete();
    this.pageChanging.complete();
    this.scaleChanging.complete();
    this.rotationChanging.complete();
    this.updateViewArea.complete();

    this.linkService.setViewer(null);
    this.renderingQueue.setViewer(null);
  }

  /**
   * Initial load a pdf by the PDFJSWorker
   * @param pdfDocument pdfDocumentLoaded to be loaded
   */
  setDocument(pdfDocument: PDFJS.PDFDocument) {
    if (this.pdfDocument) {
      this._cancelRendering();
      this._resetView();

      if (this.findController) {
        this.findController.setDocument(null);
      }
    }

    this.pdfDocument = pdfDocument;
    if (!pdfDocument) {
      return;
    }
    const numPages = pdfDocument.numPages;
    const pagesCapability = PDFJS.createPromiseCapability();

    pagesCapability.promise.then(() => {
      this._pageViewsReady = true;
      this.pagesLoaded.next({ numPages: numPages });
      this.update();
    });

    const firstPagePromise = pdfDocument.getPage(1);
    firstPagePromise
      .then((firstPage) => {
        this.pageLoaded.next({ pageIndex: firstPage.pageNumber });
        const scale = this._currentScaleNumber;
        const viewport = firstPage.getViewport({ scale: scale * CSS_UNITS });
        for (let pageNum = 1; pageNum <= numPages; ++pageNum) {
          const pageRef = new PdfPageRef(
            this.container,
            pageNum,
            viewport.clone(),
            this.findController,
            this.linkService,
            this.downloadManager,
            this.renderingQueue,
            this.renderer
          );
          this.items.push(pageRef);
        }

        const firstPageView = this.items[0];
        if (firstPageView) {
          firstPageView.setPdfPage(firstPage);
        }

        if (this.findController) {
          this.findController.setDocument(pdfDocument); // Enable searching.
        }

        // In addition to 'disableAutoFetch' being set, also attempt to reduce
        // resource usage when loading *very* long/large documents.
        if (numPages > 7500) {
          // XXX: Printing is semi-broken with auto fetch disabled.
          pagesCapability.resolve();
          return;
        }

        let getPagesLeft = numPages - 1; // The first page was already loaded.

        if (getPagesLeft <= 0) {
          pagesCapability.resolve();
          return;
        }
        for (let pageNum = 2; pageNum <= numPages; ++pageNum) {
          pdfDocument.getPage(pageNum).then(
            (pdfPage) => {
              this.pageLoaded.next({ pageIndex: pdfPage.pageNumber });
              const pageView = this.items[pageNum - 1];
              if (!pageView.pdfPage) {
                pageView.setPdfPage(pdfPage);
              }
              if (--getPagesLeft === 0) {
                pagesCapability.resolve();
              }
            },
            (reason) => {
              console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
              if (--getPagesLeft === 0) {
                pagesCapability.resolve();
              }
            }
          );
        }
      })
      .catch((reason) => {
        console.error('Unable to initialize viewer', reason);
      });
  }

  getPageView(index) {
    return this.items[index];
  }

  /**
   * @type {boolean} - True if all {PDFPageView} objects are initialized.
   */
  get pageViewsReady() {
    if (!this._pageViewsReady) {
      return false;
    }
    // Prevent printing errors when 'disableAutoFetch' is set, by ensuring
    // that *all* pages have in fact been completely loaded.
    return this.items.every(function (pageView) {
      return !!(pageView && pageView.pdfPage);
    });
  }

  /**
   * @type {number}
   */
  get currentPageNumber() {
    return this._currentPageNumber;
  }

  /**
   * @param {number} val - The page number.
   */
  set currentPageNumber(val) {
    if (!Number.isInteger(val)) {
      throw new Error('Invalid page number.');
    }
    if (!this.pdfDocument) {
      return;
    }
    // The intent can be to just reset a scroll position and/or scale.
    if (!this._setCurrentPageNumber(val, /* resetCurrentPageView = */ true)) {
      console.error(`${this.id}.currentPageNumber: "${val}" is not a valid page.`);
    }
  }

  /**
   * @returns {boolean} Whether the pageNumber is valid (within bounds).
   * @private
   */
  private _setCurrentPageNumber(val, resetCurrentPageView = false) {
    if (this._currentPageNumber === val) {
      if (resetCurrentPageView) {
        this._resetCurrentPageView();
      }
      return true;
    }

    if (!(0 < val && val <= this.pagesCount)) {
      return false;
    }
    const oldPageNumber: number = this._currentPageNumber;
    const oldPageLabel = this._pageLabels && this._pageLabels[oldPageNumber - 1];
    this._currentPageNumber = val;

    this.pageChanging.next({
      oldPageIndex: oldPageNumber,
      oldPageLabel,
      actualPageIndex: val,
      actualPageLabel: this._pageLabels && this._pageLabels[val - 1],
    });

    if (resetCurrentPageView) {
      this._resetCurrentPageView();
    }
    return true;
  }

  /**
   * @type {string|null} Returns the current page label, or `null` if no page
   *   labels exist.
   */
  get currentPageLabel() {
    return this._pageLabels && this._pageLabels[this._currentPageNumber - 1];
  }

  /**
   * @param {string} val - The page label.
   */
  set currentPageLabel(val) {
    if (!this.pdfDocument) {
      return;
    }
    let page = val || 0; // Fallback page number.
    if (this._pageLabels) {
      const i = this._pageLabels.indexOf(val);
      if (i >= 0) {
        page = i + 1;
      }
    }
    // The intent can be to just reset a scroll position and/or scale.
    if (!this._setCurrentPageNumber(page, /* resetCurrentPageView = */ true)) {
      console.error(`${this.id}.currentPageLabel: "${val}" is not a valid page.`);
    }
  }

  /**
   * @type {number}
   */
  get currentScaleNumber(): number {
    return this._currentScaleNumber;
  }

  /**
   * @param {number} val - Scale of the pages in percents.
   */
  set currentScaleNumber(val: number) {
    // @ts-ignore
    if (isNaN(val)) {
      throw new Error('Invalid numeric scale.');
    }
    if (!this.pdfDocument) {
      return;
    }
    this._currentScaleNumber = val;
    this._setScale(val, false);
  }

  /**
   * @type {string}
   */
  get currentScale() {
    return this._currentScale ? this._currentScale : this._currentScaleNumber;
  }

  /**
   * @param val - The scale of the pages (in percent or predefined value).
   */
  set currentScale(val) {
    if (!this.pdfDocument) {
      return;
    }
    this._setScale(val, false);
  }

  /**
   * @type {number}
   */
  get pagesRotation() {
    return this._pagesRotation;
  }

  /**
   * @param {number} rotation - The rotation of the pages (0, 90, 180, 270).
   */
  set pagesRotation(rotation) {
    if (!isValidRotation(rotation)) {
      throw new Error('Invalid pages rotation angle.');
    }
    if (!this.pdfDocument) {
      return;
    }
    if (this._pagesRotation === rotation) {
      return; // The rotation didn't change.
    }
    const oldRotation = this._pagesRotation;
    this._pagesRotation = rotation;

    for (let i = 0, ii = this.items.length; i < ii; i++) {
      const pageView = this.items[i];
      pageView.update(pageView.scaleNumber, rotation);
    }
    // Prevent errors in case the rotation changes *before* the scale has been
    // set to a non-default value.
    if (this._currentScale) {
      this._setScale(this._currentScale, true);
    }

    this.rotationChanging.next({
      oldRotation: oldRotation,
      actualRotation: rotation,
    });

    this.update();
  }

  update() {
    const visible = this._getVisiblePages();
    const visiblePages = visible.views;
    const numVisiblePages = visiblePages.length;

    if (numVisiblePages === 0) {
      return;
    }
    const newCacheSize = Math.max(this._config.maxPagesRendered, 2 * numVisiblePages + 1);
    this._buffer.resize(
      newCacheSize,
      visiblePages.map((v) => v.view as PdfPageRef)
    );

    this.renderingQueue.renderHighestPriority(visible);

    this._updateHelper(visiblePages);

    const oldLocation = this._location;
    this._updateLocation(visible.first);
    this.updateViewArea.next({
      oldLocation: oldLocation,
      actualLocation: this._location,
    });
  }

  private _updateHelper(visiblePages) {
    if (this.isInPresentationMode) {
      return;
    }
    let currentId = this._currentPageNumber;
    let stillFullyVisible = false;

    for (const page of visiblePages) {
      if (page.percent < 100) {
        break;
      }
      if (page.id === currentId) {
        stillFullyVisible = true;
        break;
      }
    }
    if (!stillFullyVisible) {
      currentId = visiblePages[0].id;
    }
    this._setCurrentPageNumber(currentId);
  }

  updateMatches(pageIndex: number) {
    if (pageIndex === -1) {
      this.items.forEach((item) => item.updateMatches());
    } else {
      this.items[pageIndex].updateMatches();
    }
  }

  protected _resetView() {
    super._resetView();

    this._currentScaleNumber = 1;
    this._currentScale = null;
    this._buffer = new PDFPageViewBuffer(this._config.maxPagesRendered);
    this._location = null;
    this._pageViewsReady = false;
    this._scrollMode = ScrollMode.VERTICAL;
    this._spreadMode = SpreadMode.NONE;

    // ... and reset the Scroll mode CSS class(es) afterwards.
    this._updateScrollMode();
  }

  /**
   * Refreshes page view: scrolls to the current page and updates the scale.
   * @private
   */
  private _resetCurrentPageView() {
    if (this.isInPresentationMode) {
      // Fixes the case when PDF has different page sizes.
      this._setScale(this._currentScale, true);
    }

    const pageView = this.items[this._currentPageNumber - 1];
    this._scrollIntoView({ pageDiv: pageView.container });
  }

  /**
   * Returns sizes of the pages.
   * @returns {Array} Array of objects with width/height/rotation fields.
   */
  getPagesOverview() {
    return this.items.map((pageView) => {
      const viewport = pageView.pdfPage.getViewport({ scale: 1 });
      return {
        width: viewport.width,
        height: viewport.height,
        rotation: viewport.rotation,
      };
    });
  }

  forceRendering(currentlyVisiblePages?) {
    const visiblePages = currentlyVisiblePages || this._getVisiblePages();
    const scrollAhead = this._isScrollModeHorizontal ? this.scroll.right : this.scroll.down;
    const pageView = this.renderingQueue.getHighestPriority(visiblePages, this.items, scrollAhead);
    if (pageView) {
      this._buffer.push(pageView);
      this._ensurePdfPageLoaded(pageView).then(() => this.renderingQueue.renderView(pageView));
      return true;
    }
    return false;
  }

  private _scrollUpdate = () => {
    if (this.pagesCount === 0) {
      return;
    }
    this.update();
  };

  /**
   * Scrolls page into view.
   */
  scrollPageIntoView({ pageNumber, destArray = null, allowNegativeOffset = false }) {
    if (!this.pdfDocument) {
      return;
    }
    const pageView = Number.isInteger(pageNumber) && this.items[pageNumber - 1];
    if (!pageView) {
      console.error(`${this.id}.scrollPageIntoView: "${pageNumber}" is not a valid pageNumber parameter.`);
      return;
    }

    if (this.isInPresentationMode || !destArray) {
      this._setCurrentPageNumber(pageNumber, /* resetCurrentPageView = */ true);
      return;
    }
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;
    let widthScale;
    let heightScale;
    const changeOrientation = pageView.rotation % 180 !== 0;
    const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scaleNumber / CSS_UNITS;
    const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scaleNumber / CSS_UNITS;
    let scale: number | 'page-width' | 'page-height' | 'page-fit' = 0;
    switch (destArray[1].name) {
      case 'XYZ':
        x = destArray[2];
        y = destArray[3];
        scale = destArray[4];
        // If x and/or y coordinates are not supplied, default to
        // _top_ left of the page (not the obvious bottom left,
        // since aligning the bottom of the intended page with the
        // top of the window is rarely helpful).
        x = x !== null ? x : 0;
        y = y !== null ? y : pageHeight;
        break;
      case 'Fit':
      case 'FitB':
        scale = 'page-fit';
        break;
      case 'FitH':
      case 'FitBH':
        y = destArray[2];
        scale = 'page-width';
        // According to the PDF spec, section 12.3.2.2, a `null` value in the
        // parameter should maintain the position relative to the new page.
        if (y === null && this._location) {
          x = this._location.left;
          y = this._location.top;
        }
        break;
      case 'FitV':
      case 'FitBV':
        x = destArray[2];
        width = pageWidth;
        height = pageHeight;
        scale = 'page-height';
        break;
      case 'FitR':
        x = destArray[2];
        y = destArray[3];
        width = destArray[4] - x;
        height = destArray[5] - y;
        const hPadding = 0;
        const vPadding = 0;

        widthScale = (this.container.clientWidth - hPadding) / width / CSS_UNITS;
        heightScale = (this.container.clientHeight - vPadding) / height / CSS_UNITS;
        scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
        break;
      default:
        console.error(`${this.id}.scrollPageIntoView: ` + `"${destArray[1].name}" is not a valid destination type.`);
        return;
    }

    if (scale && scale !== this._currentScaleNumber) {
      this.currentScale = scale;
    } else if (this._currentScaleNumber === 0) {
      this.currentScale = this._config.scale;
    }

    if (scale === 'page-fit' && !destArray[4]) {
      this._scrollIntoView({
        pageDiv: pageView.container,
        pageSpot: pageNumber,
      });
      return;
    }

    const boundingRect = [
      pageView.viewport.convertToViewportPoint(x, y),
      pageView.viewport.convertToViewportPoint(x + width, y + height),
    ];
    let left = Math.min(boundingRect[0][0], boundingRect[1][0]);
    let top = Math.min(boundingRect[0][1], boundingRect[1][1]);

    if (!allowNegativeOffset) {
      // Some bad PDF generators will create destinations with e.g. top values
      // that exceeds the page height. Ensure that offsets are not negative,
      // to prevent a previous page from becoming visible (fixes bug 874482).
      left = Math.max(left, 0);
      top = Math.max(top, 0);
    }
    this._scrollIntoView({
      pageDiv: pageView.container,
      pageSpot: { left, top },
      pageNumber,
    });
  }

  private _updateLocation(firstPage) {
    const currentScale = this._currentScaleNumber;
    const currentScaleValue = this.currentScale;
    const normalizedScaleValue =
      parseFloat(currentScaleValue.toString()) === currentScale
        ? Math.round(currentScale * 10000) / 100
        : currentScaleValue;

    const pageNumber = firstPage.id;
    let pdfOpenParams = '#page=' + pageNumber;
    pdfOpenParams += '&zoom=' + normalizedScaleValue;
    const currentPageView = this.items[pageNumber - 1];
    const container = this.container;
    const topLeft = currentPageView.getPagePoint(container.scrollLeft - firstPage.x, container.scrollTop - firstPage.y);
    const intLeft = Math.round(topLeft[0]);
    const intTop = Math.round(topLeft[1]);
    pdfOpenParams += ',' + intLeft + ',' + intTop;

    this._location = {
      pageNumber,
      scale: normalizedScaleValue,
      top: intTop,
      left: intLeft,
      rotation: this._pagesRotation,
      pdfOpenParams,
    };
  }

  private _scrollIntoView({ pageDiv, pageSpot = null, pageNumber = null }) {
    scrollIntoView(pageDiv, this.container, pageSpot);
  }

  private _cancelRendering() {
    for (let i = 0, ii = this.items.length; i < ii; i++) {
      if (this.items[i]) {
        this.items[i].cancelRendering();
      }
    }
  }

  private _updateScrollMode(pageNumber = null) {
    const scrollMode = this._scrollMode;
    const viewer = this.container;

    viewer.classList.toggle('scrollHorizontal', scrollMode === ScrollMode.HORIZONTAL);
    viewer.classList.toggle('scrollWrapped', scrollMode === ScrollMode.WRAPPED);

    if (!this.pdfDocument || !pageNumber) {
      return;
    }
    // Non-numeric scale values can be sensitive to the scroll orientation.
    // Call this before re-scrolling to the current page, to ensure that any
    // changes in scale don't move the current page.
    // @ts-ignore
    if (this._currentScale && isNaN(this._currentScale)) {
      this._setScale(this._currentScale, true);
    }
    this._setCurrentPageNumber(pageNumber, /* resetCurrentPageView = */ true);
    this.update();
  }

  private _setScale(value: Scale, noScroll = false) {
    let scale = parseFloat(`${value}`);

    if (scale > 0) {
      this._setScaleUpdatePages(scale, value, noScroll);
    } else {
      const currentPage = this.items[this._currentPageNumber - 1];
      if (!currentPage) {
        return;
      }
      const noPadding = this.isInPresentationMode;
      let hPadding = 0;
      let vPadding = 0;

      if (!noPadding && this._isScrollModeHorizontal) {
        [hPadding, vPadding] = [vPadding, hPadding]; // Swap the padding values.
      }
      const pageWidthScale = ((this.container.clientWidth - hPadding) / currentPage.width) * currentPage.scaleNumber;
      const pageHeightScale = ((this.container.clientHeight - vPadding) / currentPage.height) * currentPage.scaleNumber;
      switch (value) {
        case 'page-actual':
          scale = 1;
          break;
        case 'page-width':
          scale = pageWidthScale;
          break;
        case 'page-height':
          scale = pageHeightScale;
          break;
        case 'page-fit':
          scale = Math.min(pageWidthScale, pageHeightScale);
          break;
        case 'auto':
          // For pages in landscape mode, fit the page height to the viewer
          // *unless* the page would thus become too wide to fit horizontally.
          const horizontalScale = isPortraitOrientation(currentPage)
            ? pageWidthScale
            : Math.min(pageHeightScale, pageWidthScale);
          scale = Math.min(MAX_AUTO_SCALE, horizontalScale);
          break;
        default:
          console.error(`${this.id}._setScale: "${value}" is an unknown zoom value.`);
          return;
      }
      this._setScaleUpdatePages(scale, value, noScroll);
    }
  }

  private _setScaleUpdatePages(newScaleNumber: number, newScale: Scale, noScroll = false) {
    const oldScale = this._currentScale;
    const oldScaleNumber = this._currentScaleNumber;

    this._currentScale = newScale;

    if (this._isSameScale(this._currentScaleNumber, newScaleNumber)) {
      return;
    }

    for (let i = 0, ii = this.items.length; i < ii; i++) {
      this.items[i].update(newScaleNumber);
    }
    this.currentScaleNumber = newScaleNumber;

    if (!noScroll) {
      let page = this._currentPageNumber,
        dest;
      if (this._location && !(this.isInPresentationMode || this.isChangingPresentationMode)) {
        page = this._location.pageNumber;
        dest = [null, { name: 'XYZ' }, this._location.left, this._location.top, null];
      }
      this.scrollPageIntoView({
        pageNumber: page,
        destArray: dest,
        allowNegativeOffset: true,
      });
    }

    this.scaleChanging.next({
      oldScale: oldScale,
      oldScaleNumber: oldScaleNumber,
      actualScale: newScale,
      actualScaleNumber: newScaleNumber,
    });

    this.update();
  }

  private _isSameScale(oldScale, newScale) {
    if (newScale === oldScale) {
      return true;
    }
    return Math.abs(newScale - oldScale) < 1e-15;
  }

  private _getVisiblePages() {
    return getVisibleElements(this.container, this.items, true, this._isScrollModeHorizontal);
  }

  /** Handler that is invoked when the user scrolls into the pdf container */
  private _scrollMove = () => {
    // Do nothing if document has no pages
    if (this.pagesCount === 0) {
      return;
    }
    // If element is disabled we should not do any calculations
    if (this.disabled) {
      return;
    }

    this.update();
  };

  /** Removes the manually-added event listeners from the root element. */
  private _removeRootElementListeners(element: HTMLElement) {
    element.removeEventListener('scroll', this._scrollMove, passiveEventListenerOptions);
  }

  get pagesCount() {
    return this.items.length;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
  }

  get _isScrollModeHorizontal() {
    // Used to ensure that pre-rendering of the next/previous page works
    // correctly, since Scroll/Spread modes are ignored in Presentation Mode.
    return this.isInPresentationMode ? false : this._scrollMode === ScrollMode.HORIZONTAL;
  }

  get isInPresentationMode() {
    return this.presentationModeState === PresentationModeState.FULLSCREEN;
  }

  get isChangingPresentationMode() {
    return this.presentationModeState === PresentationModeState.CHANGING;
  }

  get renderType(): RendererType {
    return this._renderType;
  }
}
