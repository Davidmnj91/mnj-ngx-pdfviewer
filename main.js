(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/mnj-ngx-pdfviewer/fesm2015/mnj-ngx-pdfviewer.js":
/*!******************************************************************************************************************!*\
  !*** /home/runner/work/mnj-ngx-pdfviewer/mnj-ngx-pdfviewer/dist/mnj-ngx-pdfviewer/fesm2015/mnj-ngx-pdfviewer.js ***!
  \******************************************************************************************************************/
/*! exports provided: AnnotationLayerBuilder, CLEANUP_TIMEOUT, CSS_UNITS, CharacterType, DEFAULT_PDF_VIEW_CONFIG, DEFAULT_SCALE_DELTA, DEFAULT_SCALE_VALUE, DefaultAnnotationLayerFactory, DefaultTextLayerFactory, FindState, MAX_AUTO_SCALE, MAX_SCALE, MIN_SCALE, MNJ_PDF_VIEW_CONFIGURATION, MNJ_PDF_VIEW_CONFIGURATION_FACTORY, MNJ_PDF_VIEW_CONFIGURATION_PROVIDER, MnjPdfViewer, MnjPdfViewerModule, PDFPageViewBuffer, PdfAttachmentViewerRef, PdfAttachmentsViewer, PdfContainer, PdfContainerItem, PdfDownloadButton, PdfDownloadManager, PdfFindController, PdfLinkService, PdfOutlineViewerRef, PdfPageLoading, PdfPageRef, PdfPageViewer, PdfPageViewerRef, PdfPrintButton, PdfPrintManager, PdfPropertiesButton, PdfRenderingQueue, PdfSearchInput, PdfThumbnailRef, PdfThumbnailViewer, PdfThumbnailViewerRef, PdfTocViewer, PdfUploadButton, PdfViewerRef, PdfViewerRegistry, PresentationModeState, PrintDPI, RendererType, RenderingStates, ScrollMode, SpreadMode, TextLayerBuilder, TextLayerMode, approximateFraction, binarySearchFirstItem, getCharacterType, getOutputScale, getPDFFileNameFromURL, getPageSizeMilliliters, getVisibleElements, isElementBottomAfterViewTop, isElementRightAfterViewLeft, isPortraitOrientation, isValidRotation, parseQueryString, rotateLeft, rotateRight, roundToDivide, scrollIntoView, watchScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationLayerBuilder", function() { return AnnotationLayerBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMEOUT", function() { return CLEANUP_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS_UNITS", function() { return CSS_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterType", function() { return CharacterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PDF_VIEW_CONFIG", function() { return DEFAULT_PDF_VIEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_DELTA", function() { return DEFAULT_SCALE_DELTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_VALUE", function() { return DEFAULT_SCALE_VALUE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAnnotationLayerFactory", function() { return DefaultAnnotationLayerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTextLayerFactory", function() { return DefaultTextLayerFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindState", function() { return FindState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_AUTO_SCALE", function() { return MAX_AUTO_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SCALE", function() { return MAX_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SCALE", function() { return MIN_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION", function() { return MNJ_PDF_VIEW_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_FACTORY", function() { return MNJ_PDF_VIEW_CONFIGURATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_PROVIDER", function() { return MNJ_PDF_VIEW_CONFIGURATION_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewer", function() { return MnjPdfViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewerModule", function() { return MnjPdfViewerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFPageViewBuffer", function() { return PDFPageViewBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentViewerRef", function() { return PdfAttachmentViewerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentsViewer", function() { return PdfAttachmentsViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfContainer", function() { return PdfContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfContainerItem", function() { return PdfContainerItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadButton", function() { return PdfDownloadButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadManager", function() { return PdfDownloadManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfFindController", function() { return PdfFindController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfLinkService", function() { return PdfLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfOutlineViewerRef", function() { return PdfOutlineViewerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageLoading", function() { return PdfPageLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageRef", function() { return PdfPageRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewer", function() { return PdfPageViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewerRef", function() { return PdfPageViewerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrintButton", function() { return PdfPrintButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrintManager", function() { return PdfPrintManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPropertiesButton", function() { return PdfPropertiesButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfRenderingQueue", function() { return PdfRenderingQueue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfSearchInput", function() { return PdfSearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailRef", function() { return PdfThumbnailRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewer", function() { return PdfThumbnailViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewerRef", function() { return PdfThumbnailViewerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfTocViewer", function() { return PdfTocViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfUploadButton", function() { return PdfUploadButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRef", function() { return PdfViewerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRegistry", function() { return PdfViewerRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModeState", function() { return PresentationModeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDPI", function() { return PrintDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererType", function() { return RendererType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingStates", function() { return RenderingStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollMode", function() { return ScrollMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadMode", function() { return SpreadMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerBuilder", function() { return TextLayerBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerMode", function() { return TextLayerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approximateFraction", function() { return approximateFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearchFirstItem", function() { return binarySearchFirstItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterType", function() { return getCharacterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutputScale", function() { return getOutputScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPDFFileNameFromURL", function() { return getPDFFileNameFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageSizeMilliliters", function() { return getPageSizeMilliliters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleElements", function() { return getVisibleElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementBottomAfterViewTop", function() { return isElementBottomAfterViewTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementRightAfterViewLeft", function() { return isElementRightAfterViewLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPortraitOrientation", function() { return isPortraitOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidRotation", function() { return isValidRotation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return rotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return rotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToDivide", function() { return roundToDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchScroll", function() { return watchScroll; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry */ "../../node_modules/pdfjs-dist/build/pdf.worker.entry.js");
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");










class PdfAttachmentsViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.attachmentViewerRef) {
                this.attachmentViewerRef.dispose();
                this.attachmentViewerRef = null;
            }
            this._pdfViewer = value;
            this.attachmentViewerRef = this._pdfViewer.registerAttachmentViewer();
        }
    }
    ngAfterViewInit() {
        this.attachmentViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfAttachmentsViewer.ɵfac = function PdfAttachmentsViewer_Factory(t) { return new (t || PdfAttachmentsViewer)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfAttachmentsViewer.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PdfAttachmentsViewer, selectors: [["mnj-pdf-attachments-viewer"], ["", "mnjPdfAttachmentsViewer", ""]], hostAttrs: [1, "mnj-attachments-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfAttachmentsViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page{margin:10px auto}.mnj-page-viewer .pdf-page>.textLayer>span{color:transparent;cursor:text;position:absolute;transform-origin:0 0;white-space:pre}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper{position:absolute;width:10em}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup{border-radius:2px;cursor:pointer;margin-left:5px;max-width:20em;padding:6px;position:absolute;word-wrap:break-word;z-index:200}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup>*{font-size:9px}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup h1,.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup span{display:inline-block}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup p{border-top:1px solid;margin-top:2px;padding-top:2px}.mnj-page-viewer .pdf-page>.annotationLayer>section{position:absolute}.mnj-page-viewer .pdf-page>.annotationLayer .buttonWidgetAnnotation.pushButton>a,.mnj-page-viewer .pdf-page>.annotationLayer .linkAnnotation>a{font-size:1em;height:100%;left:0;position:absolute;top:0;width:100%}.mnj-thumbnail-viewer .pdf-thumbnail{margin:10px auto}.mnj-toc-viewer .outlineWithDeepNesting>.outlineItem{margin:0 10px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler{float:left;height:0;position:relative;width:0}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before{content:\"\";display:inline-block;height:15px;position:absolute;width:15px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border-radius:2px;display:inline-block;font-size:13px;height:auto;line-height:15px;margin-bottom:1px;margin-left:15px;min-width:calc(100% - 15px);padding:2px 0 5px 4px;text-decoration:none;user-select:none;white-space:normal}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>.outlineItems{margin-left:20px}.mnj-attachments-viewer .attachmentsItem>button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border:1px solid;box-sizing:border-box;cursor:pointer;display:inline-block;height:40px;margin:0;outline:none;overflow:visible;padding:0 15px;position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:baseline;white-space:nowrap}"], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfAttachmentsViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-attachments-viewer, [mnjPdfAttachmentsViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-attachments-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfDownloadButton {
    constructor() { }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.downloadPdf();
            event.stopPropagation();
        }
    }
}
PdfDownloadButton.ɵfac = function PdfDownloadButton_Factory(t) { return new (t || PdfDownloadButton)(); };
PdfDownloadButton.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfDownloadButton, selectors: [["button", "mnjPdfDownload", ""]], hostBindings: function PdfDownloadButton_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PdfDownloadButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfDownloadButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfDownload]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

/**
 * Element that will be used as a template for the loader
 * of a pdfPage when it is loading.
 */
class PdfPageLoading {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    get matchSize() {
        return this._matchSize;
    }
    set matchSize(value) {
        this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
    }
}
PdfPageLoading.ɵfac = function PdfPageLoading_Factory(t) { return new (t || PdfPageLoading)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])); };
PdfPageLoading.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfPageLoading, selectors: [["ng-template", "mnjPdfLoading", ""]], inputs: { matchSize: "matchSize" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfPageLoading, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'ng-template[mnjPdfLoading]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class PdfPageViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.pageViewerRef) {
                this.pageViewerRef.dispose();
                this.pageViewerRef = null;
            }
            this._pdfViewer = value;
            this.pageViewerRef = this.pdfViewer.registerPageViewer();
        }
    }
    ngAfterViewInit() {
        this.pageViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfPageViewer.ɵfac = function PdfPageViewer_Factory(t) { return new (t || PdfPageViewer)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfPageViewer.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PdfPageViewer, selectors: [["mnj-pdf-page-viewer"], ["", "mnjPdfPageViewer", ""]], hostAttrs: [1, "mnj-page-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfPageViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page{margin:10px auto}.mnj-page-viewer .pdf-page>.textLayer>span{color:transparent;cursor:text;position:absolute;transform-origin:0 0;white-space:pre}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper{position:absolute;width:10em}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup{border-radius:2px;cursor:pointer;margin-left:5px;max-width:20em;padding:6px;position:absolute;word-wrap:break-word;z-index:200}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup>*{font-size:9px}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup h1,.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup span{display:inline-block}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup p{border-top:1px solid;margin-top:2px;padding-top:2px}.mnj-page-viewer .pdf-page>.annotationLayer>section{position:absolute}.mnj-page-viewer .pdf-page>.annotationLayer .buttonWidgetAnnotation.pushButton>a,.mnj-page-viewer .pdf-page>.annotationLayer .linkAnnotation>a{font-size:1em;height:100%;left:0;position:absolute;top:0;width:100%}.mnj-thumbnail-viewer .pdf-thumbnail{margin:10px auto}.mnj-toc-viewer .outlineWithDeepNesting>.outlineItem{margin:0 10px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler{float:left;height:0;position:relative;width:0}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before{content:\"\";display:inline-block;height:15px;position:absolute;width:15px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border-radius:2px;display:inline-block;font-size:13px;height:auto;line-height:15px;margin-bottom:1px;margin-left:15px;min-width:calc(100% - 15px);padding:2px 0 5px 4px;text-decoration:none;user-select:none;white-space:normal}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>.outlineItems{margin-left:20px}.mnj-attachments-viewer .attachmentsItem>button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border:1px solid;box-sizing:border-box;cursor:pointer;display:inline-block;height:40px;margin:0;outline:none;overflow:visible;padding:0 15px;position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:baseline;white-space:nowrap}"], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfPageViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-page-viewer, [mnjPdfPageViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-page-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfPrintButton {
    constructor() { }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.printPdf();
            event.stopPropagation();
        }
    }
}
PdfPrintButton.ɵfac = function PdfPrintButton_Factory(t) { return new (t || PdfPrintButton)(); };
PdfPrintButton.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfPrintButton, selectors: [["button", "mnjPdfPrint", ""]], hostBindings: function PdfPrintButton_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PdfPrintButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfPrintButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfPrint]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfPropertiesButton {
    constructor() {
        this.pdfProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.retrievePdfProperties().then((properties) => this.pdfProperties.emit(properties));
        }
        event.stopPropagation();
    }
}
PdfPropertiesButton.ɵfac = function PdfPropertiesButton_Factory(t) { return new (t || PdfPropertiesButton)(); };
PdfPropertiesButton.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfPropertiesButton, selectors: [["button", "mnjPdfProperties", ""]], hostBindings: function PdfPropertiesButton_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PdfPropertiesButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] }, outputs: { pdfProperties: "pdfProperties" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfPropertiesButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfProperties]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }], pdfProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class PdfSearchInput {
    constructor() { }
    onSubmit(event) {
        if (this.pdfViewer) {
            this.pdfViewer.search(event.target.value);
            event.stopPropagation();
        }
    }
}
PdfSearchInput.ɵfac = function PdfSearchInput_Factory(t) { return new (t || PdfSearchInput)(); };
PdfSearchInput.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfSearchInput, selectors: [["input", "mnjPdfSearchInput", ""]], hostBindings: function PdfSearchInput_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("keyup.enter", function PdfSearchInput_keyup_enter_HostBindingHandler($event) { return ctx.onSubmit($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfSearchInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'input[mnjPdfSearchInput]',
                host: { '(keyup.enter)': 'onSubmit($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfThumbnailViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.thumbnailViewerRef) {
                this.thumbnailViewerRef.dispose();
                this.thumbnailViewerRef = null;
            }
            this._pdfViewer = value;
            this.thumbnailViewerRef = this._pdfViewer.registerThumbnailViewer();
        }
    }
    ngAfterViewInit() {
        this.thumbnailViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfThumbnailViewer.ɵfac = function PdfThumbnailViewer_Factory(t) { return new (t || PdfThumbnailViewer)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfThumbnailViewer.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PdfThumbnailViewer, selectors: [["mnj-pdf-thumbnail-viewer"], ["", "mnjPdfThumbnailViewer", ""]], hostAttrs: [1, "mnj-thumbnail-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfThumbnailViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page{margin:10px auto}.mnj-page-viewer .pdf-page>.textLayer>span{color:transparent;cursor:text;position:absolute;transform-origin:0 0;white-space:pre}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper{position:absolute;width:10em}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup{border-radius:2px;cursor:pointer;margin-left:5px;max-width:20em;padding:6px;position:absolute;word-wrap:break-word;z-index:200}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup>*{font-size:9px}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup h1,.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup span{display:inline-block}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup p{border-top:1px solid;margin-top:2px;padding-top:2px}.mnj-page-viewer .pdf-page>.annotationLayer>section{position:absolute}.mnj-page-viewer .pdf-page>.annotationLayer .buttonWidgetAnnotation.pushButton>a,.mnj-page-viewer .pdf-page>.annotationLayer .linkAnnotation>a{font-size:1em;height:100%;left:0;position:absolute;top:0;width:100%}.mnj-thumbnail-viewer .pdf-thumbnail{margin:10px auto}.mnj-toc-viewer .outlineWithDeepNesting>.outlineItem{margin:0 10px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler{float:left;height:0;position:relative;width:0}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before{content:\"\";display:inline-block;height:15px;position:absolute;width:15px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border-radius:2px;display:inline-block;font-size:13px;height:auto;line-height:15px;margin-bottom:1px;margin-left:15px;min-width:calc(100% - 15px);padding:2px 0 5px 4px;text-decoration:none;user-select:none;white-space:normal}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>.outlineItems{margin-left:20px}.mnj-attachments-viewer .attachmentsItem>button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border:1px solid;box-sizing:border-box;cursor:pointer;display:inline-block;height:40px;margin:0;outline:none;overflow:visible;padding:0 15px;position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:baseline;white-space:nowrap}"], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfThumbnailViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-thumbnail-viewer, [mnjPdfThumbnailViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-thumbnail-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfTocViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.outlineViewerRef) {
                this.outlineViewerRef.dispose();
                this.outlineViewerRef = null;
            }
            this._pdfViewer = value;
            this.outlineViewerRef = this._pdfViewer.registerOutlineViewer();
        }
    }
    ngAfterViewInit() {
        this.outlineViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfTocViewer.ɵfac = function PdfTocViewer_Factory(t) { return new (t || PdfTocViewer)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfTocViewer.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: PdfTocViewer, selectors: [["mnj-pdf-toc-viewer"], ["", "mnjPdfTocViewer", ""]], hostAttrs: [1, "mnj-toc-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfTocViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page{margin:10px auto}.mnj-page-viewer .pdf-page>.textLayer>span{color:transparent;cursor:text;position:absolute;transform-origin:0 0;white-space:pre}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper{position:absolute;width:10em}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup{border-radius:2px;cursor:pointer;margin-left:5px;max-width:20em;padding:6px;position:absolute;word-wrap:break-word;z-index:200}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup>*{font-size:9px}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup h1,.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup span{display:inline-block}.mnj-page-viewer .pdf-page>.annotationLayer .popupWrapper .popup p{border-top:1px solid;margin-top:2px;padding-top:2px}.mnj-page-viewer .pdf-page>.annotationLayer>section{position:absolute}.mnj-page-viewer .pdf-page>.annotationLayer .buttonWidgetAnnotation.pushButton>a,.mnj-page-viewer .pdf-page>.annotationLayer .linkAnnotation>a{font-size:1em;height:100%;left:0;position:absolute;top:0;width:100%}.mnj-thumbnail-viewer .pdf-thumbnail{margin:10px auto}.mnj-toc-viewer .outlineWithDeepNesting>.outlineItem{margin:0 10px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler{float:left;height:0;position:relative;width:0}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before{content:\"\";display:inline-block;height:15px;position:absolute;width:15px}.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>a{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border-radius:2px;display:inline-block;font-size:13px;height:auto;line-height:15px;margin-bottom:1px;margin-left:15px;min-width:calc(100% - 15px);padding:2px 0 5px 4px;text-decoration:none;user-select:none;white-space:normal}.mnj-toc-viewer .outlineWithDeepNesting .outlineItem>.outlineItems{margin-left:20px}.mnj-attachments-viewer .attachmentsItem>button{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;border:1px solid;box-sizing:border-box;cursor:pointer;display:inline-block;height:40px;margin:0;outline:none;overflow:visible;padding:0 15px;position:relative;text-align:center;text-decoration:none;user-select:none;vertical-align:baseline;white-space:nowrap}"], encapsulation: 2 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfTocViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-toc-viewer, [mnjPdfTocViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-toc-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();

class PdfUploadButton {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.fileLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.fileInput = this._buildFileInput();
        this.renderer.appendChild(this.elementRef.nativeElement, this.fileInput);
    }
    onCLick(event) {
        if (this.pdfViewer) {
            this.fileInput.click();
        }
    }
    upload(event) {
        const pdfFile = event.target.files[0];
        if (URL.createObjectURL) {
            this.pdfViewer.pdfSrc = URL.createObjectURL(pdfFile);
        }
        else {
            // Read the local file into a Uint8Array.
            const fileReader = new FileReader();
            fileReader.onload = (evt) => {
                // @ts-ignore
                const buffer = evt.target.result;
                this.pdfViewer.pdfSrc = new Uint8Array(buffer);
            };
            fileReader.readAsArrayBuffer(pdfFile);
        }
        this.fileLoaded.emit(pdfFile);
    }
    _buildFileInput() {
        const fileInput = this.renderer.createElement('input');
        this.renderer.setProperty(fileInput, 'type', 'file');
        this.renderer.setProperty(fileInput, 'accept', '.pdf, application/pdf');
        this.renderer.listen(fileInput, 'change', (event) => this.upload(event));
        this.renderer.addClass(fileInput, 'cdk-visually-hidden');
        return fileInput;
    }
}
PdfUploadButton.ɵfac = function PdfUploadButton_Factory(t) { return new (t || PdfUploadButton)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfUploadButton.ɵdir = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"])({ type: PdfUploadButton, selectors: [["button", "mnjPdfUpload", ""]], hostBindings: function PdfUploadButton_HostBindings(rf, ctx) { if (rf & 1) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"])("click", function PdfUploadButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] }, outputs: { fileLoaded: "fileLoaded" } });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfUploadButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfUpload]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }], fileLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class PdfAttachmentViewerRef {
    constructor(downloadManager) {
        this.downloadManager = downloadManager;
        //Events
        this.attachmentsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        this.renderer.setStyle(element, 'display', 'block');
        if (element !== this.container) {
            this._container = element;
            this.reset();
        }
        return this;
    }
    dispose() {
        this.reset();
        this.attachmentsLoaded.complete();
    }
    setDocument(pdfDocument) {
        this.pdfDocument = pdfDocument;
        this.pdfDocument.getAttachments().then((attachments) => this.render({ attachments }));
    }
    reset(keepRenderedCapability = false) {
        this.attachments = null;
        this.container.textContent = '';
        if (!keepRenderedCapability) {
            this._renderedCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
        }
    }
    render({ attachments, keepRenderedCapability = false }) {
        let attachmentsCount = 0;
        if (this.attachments) {
            this.reset(keepRenderedCapability === true);
        }
        this.attachments = attachments || null;
        if (!attachments) {
            this._dispatchEvent(attachmentsCount);
            return;
        }
        const names = Object.keys(attachments).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        attachmentsCount = names.length;
        for (let i = 0; i < attachmentsCount; i++) {
            const item = attachments[names[i]];
            const filename = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["removeNullCharacters"])(Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["getFilenameFromUrl"])(item.filename));
            const div = document.createElement('div');
            div.className = 'attachmentsItem';
            const button = document.createElement('button');
            button.textContent = filename;
            if (/\.pdf$/i.test(filename)) {
                this._bindPdfLink(button, item.content, filename);
            }
            else {
                this._bindLink(button, item.content, filename);
            }
            div.appendChild(button);
            this._container.appendChild(div);
        }
        this._dispatchEvent(attachmentsCount);
    }
    /**
     * Used to append FileAttachment annotations to the sidebar.
     * @private
     */
    _appendAttachment({ id, filename, content }) {
        this._renderedCapability.promise.then(() => {
            let attachments = this.attachments;
            if (!attachments) {
                attachments = Object.create(null);
            }
            else {
                for (const name in attachments) {
                    if (id === name) {
                        return; // Ignore the new attachment if it already exists.
                    }
                }
            }
            attachments[id] = {
                filename,
                content,
            };
            this.render({
                attachments,
                keepRenderedCapability: true,
            });
        });
    }
    _bindPdfLink(button, content, filename) {
        button.onclick = () => {
            const blobUrl = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createObjectURL"])(content, 'application/pdf');
            const viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename);
            window.open(viewerUrl);
            return false;
        };
    }
    _bindLink(button, content, filename) {
        button.onclick = () => {
            this.downloadManager.downloadData(content, filename, '');
            return false;
        };
    }
    _dispatchEvent(attachmentsCount) {
        this._renderedCapability.resolve();
        this.attachmentsLoaded.next({ count: attachmentsCount });
    }
    get container() {
        return this._container;
    }
}

const DEFAULT_TITLE = '\u2013';
class PdfOutlineViewerRef {
    constructor(linkService) {
        this.linkService = linkService;
        //Events
        this.outlineLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        if (element !== this.container) {
            this._container = element;
            this.reset();
        }
        return this;
    }
    dispose() {
        this.reset();
        this.outlineLoaded.complete();
    }
    setDocument(pdfDocument) {
        this.pdfDocument = pdfDocument;
        pdfDocument.getOutline().then((outline) => this.render({ outline }));
    }
    reset() {
        this.outline = null;
        this.lastToggleIsShow = true;
        // Remove the outline from the DOM.
        this.container.textContent = '';
        // Ensure that the left (right in RTL locales) margin is always reset,
        // to prevent incorrect outline alignment if a new document is opened.
        this.container.classList.remove('outlineWithDeepNesting');
    }
    _bindLink(element, { url, newWindow, dest }) {
        const { linkService } = this;
        if (url) {
            Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["addLinkAttributes"])(element, {
                url,
                target: newWindow ? pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["LinkTarget"].BLANK : linkService.externalLinkTarget,
                rel: linkService.externalLinkRel,
                enabled: linkService.externalLinkEnabled,
            });
            return;
        }
        element.href = linkService.getDestinationHash(dest);
        element.onclick = () => {
            if (dest) {
                linkService.navigateTo(dest);
            }
            return false;
        };
    }
    _setStyles(element, { bold, italic }) {
        if (bold) {
            element.style.fontWeight = 'bold';
        }
        if (italic) {
            element.style.fontStyle = 'italic';
        }
    }
    /**
     * Prepend a button before an outline item which allows the user to toggle
     * the visibility of all outline items at that level.
     *
     * @private
     */
    _addToggleButton(div, { count, items }) {
        const toggler = document.createElement('div');
        toggler.className = 'outlineItemToggler';
        if (count < 0 && Math.abs(count) === items.length) {
            toggler.classList.add('outlineItemsHidden');
        }
        toggler.onclick = (evt) => {
            evt.stopPropagation();
            toggler.classList.toggle('outlineItemsHidden');
            if (evt.shiftKey) {
                const shouldShowAll = !toggler.classList.contains('outlineItemsHidden');
                this._toggleOutlineItem(div, shouldShowAll);
            }
        };
        div.insertBefore(toggler, div.firstChild);
    }
    /**
     * Toggle the visibility of the subtree of an outline item.
     *
     * @param {Element} root - the root of the outline (sub)tree.
     * @param {boolean} show - whether to show the outline (sub)tree. If false,
     *   the outline subtree rooted at |root| will be collapsed.
     *
     * @private
     */
    _toggleOutlineItem(root, show = false) {
        this.lastToggleIsShow = show;
        for (const toggler of root.querySelectorAll('.outlineItemToggler')) {
            toggler.classList.toggle('outlineItemsHidden', !show);
        }
    }
    /**
     * Collapse or expand all subtrees of the outline.
     */
    toggleOutlineTree() {
        if (!this.outline) {
            return;
        }
        this._toggleOutlineItem(this.container, !this.lastToggleIsShow);
    }
    /**
     * @param params
     */
    render({ outline }) {
        let outlineCount = 0;
        if (this.outline) {
            this.reset();
        }
        this.outline = outline || null;
        if (!outline) {
            this._dispatchEvent(outlineCount);
            return;
        }
        const fragment = document.createDocumentFragment();
        const queue = [{ parent: fragment, items: this.outline }];
        let hasAnyNesting = false;
        while (queue.length > 0) {
            const levelData = queue.shift();
            for (const item of levelData.items) {
                const div = document.createElement('div');
                div.className = 'outlineItem';
                const element = document.createElement('a');
                this._bindLink(element, item);
                this._setStyles(element, item);
                element.textContent = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["removeNullCharacters"])(item.title) || DEFAULT_TITLE;
                div.appendChild(element);
                if (item.items.length > 0) {
                    hasAnyNesting = true;
                    this._addToggleButton(div, item);
                    const itemsDiv = document.createElement('div');
                    itemsDiv.className = 'outlineItems';
                    div.appendChild(itemsDiv);
                    queue.push({ parent: itemsDiv, items: item.items });
                }
                levelData.parent.appendChild(div);
                outlineCount++;
            }
        }
        if (hasAnyNesting) {
            this.container.classList.add('outlineWithDeepNesting');
            this.lastToggleIsShow = fragment.querySelectorAll('.outlineItemsHidden').length === 0;
        }
        this.container.appendChild(fragment);
        this._dispatchEvent(outlineCount);
    }
    /**
     * @private
     */
    _dispatchEvent(outlineCount) {
        this.outlineLoaded.next({ count: outlineCount });
    }
    get container() {
        return this._container;
    }
}

const MAX_AUTO_SCALE = 1.25;
const MIN_SCALE = 0.1;
const MAX_SCALE = 10.0;
const DEFAULT_SCALE_DELTA = 1.1;
const DEFAULT_SCALE_VALUE = 'auto';

var RendererType;
(function (RendererType) {
    RendererType["CANVAS"] = "canvas";
    RendererType["SVG"] = "svg";
})(RendererType || (RendererType = {}));
var SpreadMode;
(function (SpreadMode) {
    SpreadMode[SpreadMode["UNKNOWN"] = -1] = "UNKNOWN";
    SpreadMode[SpreadMode["NONE"] = 0] = "NONE";
    SpreadMode[SpreadMode["ODD"] = 1] = "ODD";
    SpreadMode[SpreadMode["EVEN"] = 2] = "EVEN";
})(SpreadMode || (SpreadMode = {}));
var ScrollMode;
(function (ScrollMode) {
    ScrollMode[ScrollMode["UNKNOWN"] = -1] = "UNKNOWN";
    ScrollMode[ScrollMode["VERTICAL"] = 0] = "VERTICAL";
    ScrollMode[ScrollMode["HORIZONTAL"] = 1] = "HORIZONTAL";
    ScrollMode[ScrollMode["WRAPPED"] = 2] = "WRAPPED";
})(ScrollMode || (ScrollMode = {}));
var TextLayerMode;
(function (TextLayerMode) {
    TextLayerMode[TextLayerMode["DISABLE"] = 0] = "DISABLE";
    TextLayerMode[TextLayerMode["ENABLE"] = 1] = "ENABLE";
    TextLayerMode[TextLayerMode["ENABLE_ENHANCE"] = 2] = "ENABLE_ENHANCE";
})(TextLayerMode || (TextLayerMode = {}));
var PresentationModeState;
(function (PresentationModeState) {
    PresentationModeState[PresentationModeState["UNKNOWN"] = 0] = "UNKNOWN";
    PresentationModeState[PresentationModeState["NORMAL"] = 1] = "NORMAL";
    PresentationModeState[PresentationModeState["CHANGING"] = 2] = "CHANGING";
    PresentationModeState[PresentationModeState["FULLSCREEN"] = 3] = "FULLSCREEN";
})(PresentationModeState || (PresentationModeState = {}));

class PdfDownloadManager {
    constructor() { }
    downloadUrl(url, filename) {
        if (!Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createValidAbsoluteUrl"])(url, 'http://example.com')) {
            return; // restricted/invalid URL
        }
        this._download(url + '#pdfjs.action=download', filename);
    }
    downloadData(data, filename, contentType) {
        const blobUrl = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createObjectURL"])(data, contentType, false);
        this._download(blobUrl, filename);
    }
    download(blob, url, filename) {
        const blobUrl = URL.createObjectURL(blob);
        this._download(blobUrl, filename);
        URL.revokeObjectURL(blobUrl);
    }
    _download(blobUrl, filename) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.target = '_parent';
        // Use a.download if available. This increases the likelihood that
        // the file is downloaded instead of opened by another PDF plugin.
        if ('download' in a) {
            a.download = filename;
        }
        // <a> must be in the document for IE and recent Firefox versions,
        // otherwise .click() is ignored.
        (document.body || document.documentElement).appendChild(a);
        a.click();
        a.remove();
    }
}
PdfDownloadManager.ɵfac = function PdfDownloadManager_Factory(t) { return new (t || PdfDownloadManager)(); };
PdfDownloadManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfDownloadManager, factory: PdfDownloadManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfDownloadManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

class AnnotationLayerBuilder {
    constructor(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath = '', renderInteractiveForms = false) {
        this.pageDiv = pageDiv;
        this.pdfPage = pdfPage;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.imageResourcesPath = imageResourcesPath;
        this.renderInteractiveForms = renderInteractiveForms;
        this.pageDiv = pageDiv;
        this.pdfPage = pdfPage;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.imageResourcesPath = imageResourcesPath;
        this.renderInteractiveForms = renderInteractiveForms;
        this.div = null;
        this._cancelled = false;
    }
    /**
     * @param viewport
     * @param {string} intent (default value is 'display')
     */
    render(viewport, intent = 'display') {
        this.pdfPage.getAnnotations({ intent }).then((annotations) => {
            if (this._cancelled) {
                return;
            }
            const parameters = {
                viewport: viewport.clone({ dontFlip: true }),
                div: this.div,
                annotations,
                page: this.pdfPage,
                imageResourcesPath: this.imageResourcesPath,
                renderInteractiveForms: this.renderInteractiveForms,
                linkService: this.linkService,
                downloadManager: this.downloadManager,
            };
            if (this.div) {
                // If an annotationLayer already exists, refresh its children's
                // transformation matrices.
                pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["AnnotationLayer"].update(parameters);
            }
            else {
                // Create an annotation layer div and render the annotations
                // if there is at least one annotation.
                if (annotations.length === 0) {
                    return;
                }
                this.div = document.createElement('div');
                this.div.className = 'annotationLayer';
                this.pageDiv.appendChild(this.div);
                parameters.div = this.div;
                pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["AnnotationLayer"].render(parameters);
            }
        });
    }
    cancel() {
        this._cancelled = true;
    }
    hide() {
        if (!this.div) {
            return;
        }
        this.div.setAttribute('hidden', 'true');
    }
}
class DefaultAnnotationLayerFactory {
    static createAnnotationLayerBuilder(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath = 'assets/images/', renderInteractiveForms = false) {
        return new AnnotationLayerBuilder(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath, renderInteractiveForms);
    }
}

var CharacterType;
(function (CharacterType) {
    CharacterType[CharacterType["SPACE"] = 0] = "SPACE";
    CharacterType[CharacterType["ALPHA_LETTER"] = 1] = "ALPHA_LETTER";
    CharacterType[CharacterType["PUNCT"] = 2] = "PUNCT";
    CharacterType[CharacterType["HAN_LETTER"] = 3] = "HAN_LETTER";
    CharacterType[CharacterType["KATAKANA_LETTER"] = 4] = "KATAKANA_LETTER";
    CharacterType[CharacterType["HIRAGANA_LETTER"] = 5] = "HIRAGANA_LETTER";
    CharacterType[CharacterType["HALFWIDTH_KATAKANA_LETTER"] = 6] = "HALFWIDTH_KATAKANA_LETTER";
    CharacterType[CharacterType["THAI_LETTER"] = 7] = "THAI_LETTER";
})(CharacterType || (CharacterType = {}));
function isAlphabeticalScript(charCode) {
    return charCode < 0x2e80;
}
function isAscii(charCode) {
    return (charCode && 0xff80) === 0;
}
function isAsciiAlpha(charCode) {
    return ((charCode >= /* a = */ 0x61 && charCode <= /* z = */ 0x7a) ||
        (charCode >= /* A = */ 0x41 && charCode <= /* Z = */ 0x5a));
}
function isAsciiDigit(charCode) {
    return charCode >= /* 0 = */ 0x30 && charCode <= /* 9 = */ 0x39;
}
function isAsciiSpace(charCode) {
    return (charCode === /* SPACE = */ 0x20 ||
        charCode === /* TAB = */ 0x09 ||
        charCode === /* CR = */ 0x0d ||
        charCode === /* LF = */ 0x0a);
}
function isHan(charCode) {
    return (charCode >= 0x3400 && charCode <= 0x9fff) || (charCode >= 0xf900 && charCode <= 0xfaff);
}
function isKatakana(charCode) {
    return charCode >= 0x30a0 && charCode <= 0x30ff;
}
function isHiragana(charCode) {
    return charCode >= 0x3040 && charCode <= 0x309f;
}
function isHalfwidthKatakana(charCode) {
    return charCode >= 0xff60 && charCode <= 0xff9f;
}
function isThai(charCode) {
    // tslint:disable-next-line:no-bitwise
    return (charCode & 0xff80) === 0x0e00;
}
function getCharacterType(charCode) {
    if (isAlphabeticalScript(charCode)) {
        if (isAscii(charCode)) {
            if (isAsciiSpace(charCode)) {
                return CharacterType.SPACE;
            }
            else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === /* UNDERSCORE = */ 0x5f) {
                return CharacterType.ALPHA_LETTER;
            }
            return CharacterType.PUNCT;
        }
        else if (isThai(charCode)) {
            return CharacterType.THAI_LETTER;
        }
        else if (charCode === /* NBSP = */ 0xa0) {
            return CharacterType.SPACE;
        }
        return CharacterType.ALPHA_LETTER;
    }
    if (isHan(charCode)) {
        return CharacterType.HAN_LETTER;
    }
    else if (isKatakana(charCode)) {
        return CharacterType.KATAKANA_LETTER;
    }
    else if (isHiragana(charCode)) {
        return CharacterType.HIRAGANA_LETTER;
    }
    else if (isHalfwidthKatakana(charCode)) {
        return CharacterType.HALFWIDTH_KATAKANA_LETTER;
    }
    return CharacterType.ALPHA_LETTER;
}

class PDFPageViewBuffer {
    constructor(size) {
        this.size = size;
        this.data = [];
    }
    push(view) {
        const i = this.data.findIndex((v) => v.id === view.id);
        if (i >= 0) {
            this.data.splice(i, 1);
        }
        this.data.push(view);
        if (this.data.length > this.size) {
            this.data.shift().destroy();
        }
    }
    /**
     * After calling resize, the size of the buffer will be newSize. The optional
     * parameter pagesToKeep is, if present, an array of pages to push to the back
     * of the buffer, delaying their destruction. The size of pagesToKeep has no
     * impact on the final size of the buffer; if pagesToKeep has length larger
     * than newSize, some of those pages will be destroyed anyway.
     */
    resize(newSize, pagesToKeep) {
        this.size = newSize;
        if (pagesToKeep) {
            const pageIdsToKeep = new Set();
            for (let i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
                pageIdsToKeep.add(pagesToKeep[i].id);
            }
            moveToEndOfArray(this.data, function (page) {
                return pageIdsToKeep.has(page.id);
            });
        }
        while (this.data.length > this.size) {
            this.data.shift().destroy();
        }
    }
}
/**
 * Moves all elements of an array that satisfy condition to the end of the
 * array, preserving the order of the rest.
 */
function moveToEndOfArray(arr, condition) {
    const moved = [], len = arr.length;
    let write = 0;
    for (let read = 0; read < len; ++read) {
        if (condition(arr[read])) {
            moved.push(arr[read]);
        }
        else {
            arr[write] = arr[read];
            ++write;
        }
    }
    for (let read = 0; write < len; ++read, ++write) {
        arr[write] = moved[read];
    }
}

/**
 * The text layer builder provides text selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF's text. These divs
 * contain text that matches the PDF text they are overlaying. This object
 * also provides a way to highlight text that is being searched for.
 */
class TextLayerBuilder {
    constructor(textLayerDiv, pageIndex, viewport, findController = null, enhanceTextSelection = false) {
        this.textLayerDiv = textLayerDiv;
        this.pageIndex = pageIndex;
        this.viewport = viewport;
        this.findController = findController;
        this.enhanceTextSelection = enhanceTextSelection;
        this.renderingDone = false;
        this.textContent = null;
        this.textContentItemsStr = [];
        this.textContentStream = null;
        this.textDivs = [];
        this.textLayerDiv = textLayerDiv;
        this.textContent = null;
        this.textContentItemsStr = [];
        this.textContentStream = null;
        this.renderingDone = false;
        this.pageIdx = pageIndex;
        this.pageNumber = this.pageIdx + 1;
        this.matches = [];
        this.viewport = viewport;
        this.textDivs = [];
        this.findController = findController;
        this.textLayerRenderTask = null;
        this.enhanceTextSelection = enhanceTextSelection;
        this._bindMouse();
    }
    /**
     * @private
     */
    _finishRendering() {
        this.renderingDone = true;
        if (!this.enhanceTextSelection) {
            const endOfContent = document.createElement('div');
            endOfContent.className = 'endOfContent';
            this.textLayerDiv.appendChild(endOfContent);
        }
    }
    /**
     * Renders the text layer.
     *
     * @param {number} [timeout] - Wait for a specified amount of milliseconds
     *                             before rendering.
     */
    render(timeout = 0) {
        if (!(this.textContent || this.textContentStream) || this.renderingDone) {
            return;
        }
        this.cancel();
        this.textDivs = [];
        const textLayerFrag = document.createDocumentFragment();
        this.textLayerRenderTask = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["renderTextLayer"])({
            textContent: this.textContent,
            textContentStream: this.textContentStream,
            container: textLayerFrag,
            viewport: this.viewport,
            textDivs: this.textDivs,
            textContentItemsStr: this.textContentItemsStr,
            timeout,
            enhanceTextSelection: this.enhanceTextSelection,
        });
        this.textLayerRenderTask.promise.then(() => {
            this.textLayerDiv.appendChild(textLayerFrag);
            this._finishRendering();
            this._updateMatches();
        });
    }
    /**
     * Cancel rendering of the text layer.
     */
    cancel() {
        if (this.textLayerRenderTask) {
            this.textLayerRenderTask.cancel();
            this.textLayerRenderTask = null;
        }
    }
    setTextContentStream(readableStream) {
        this.cancel();
        this.textContentStream = readableStream;
    }
    setTextContent(textContent) {
        this.cancel();
        this.textContent = textContent;
    }
    _convertMatches(matches, matchesLength) {
        // Early exit if there is nothing to convert.
        if (!matches) {
            return [];
        }
        const { findController, textContentItemsStr } = this;
        let i = 0;
        let iIndex = 0;
        const end = textContentItemsStr.length - 1;
        const queryLen = findController.state.query.length;
        const result = [];
        for (let m = 0, mm = matches.length; m < mm; m++) {
            // Calculate the start position.
            let matchIdx = matches[m];
            // Loop over the divIdxs.
            while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }
            if (i === textContentItemsStr.length) {
                console.error('Could not find a matching mapping');
            }
            const match = {
                begin: {
                    divIdx: i,
                    offset: matchIdx - iIndex,
                },
            };
            // Calculate the end position.
            if (matchesLength) {
                // Multiterm search.
                matchIdx += matchesLength[m];
            }
            else {
                // Phrase search.
                matchIdx += queryLen;
            }
            // Somewhat the same array as above, but use > instead of >= to get
            // the end position right.
            while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }
            match.end = {
                divIdx: i,
                offset: matchIdx - iIndex,
            };
            result.push(match);
        }
        return result;
    }
    _renderMatches(matches) {
        // Early exit if there is nothing to render.
        if (matches.length === 0) {
            return;
        }
        const { findController, pageIdx, textContentItemsStr, textDivs } = this;
        const isSelectedPage = pageIdx === findController.selected.pageIdx;
        const selectedMatchIdx = findController.selected.matchIdx;
        const highlightAll = findController.state.highlightAll;
        let prevEnd = null;
        const infinity = {
            divIdx: -1,
            offset: undefined,
        };
        function beginText(begin, className) {
            const divIdx = begin.divIdx;
            textDivs[divIdx].textContent = '';
            appendTextToDiv(divIdx, 0, begin.offset, className);
        }
        function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
            const div = textDivs[divIdx];
            const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
            const node = document.createTextNode(content);
            if (className) {
                const span = document.createElement('span');
                span.className = className;
                span.appendChild(node);
                div.appendChild(span);
                return;
            }
            div.appendChild(node);
        }
        let i0 = selectedMatchIdx, i1 = i0 + 1;
        if (highlightAll) {
            i0 = 0;
            i1 = matches.length;
        }
        else if (!isSelectedPage) {
            // Not highlighting all and this isn't the selected page, so do nothing.
            return;
        }
        for (let i = i0; i < i1; i++) {
            const match = matches[i];
            const begin = match.begin;
            const end = match.end;
            const isSelected = isSelectedPage && i === selectedMatchIdx;
            const highlightSuffix = isSelected ? ' selected' : '';
            if (isSelected) {
                // Attempt to scroll the selected match into view.
                findController.scrollMatchIntoView({
                    element: textDivs[begin.divIdx],
                    pageIndex: pageIdx,
                    matchIndex: selectedMatchIdx,
                });
            }
            // Match inside new div.
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                // If there was a previous div, then add the text at the end.
                if (prevEnd !== null) {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                }
                // Clear the divs and set the content until the starting point.
                beginText(begin);
            }
            else {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
            }
            if (begin.divIdx === end.divIdx) {
                appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
            }
            else {
                appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix);
                for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                    textDivs[n0].className = 'highlight middle' + highlightSuffix;
                }
                beginText(end, 'highlight end' + highlightSuffix);
            }
            prevEnd = end;
        }
        if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
        }
    }
    _updateMatches() {
        // Only show matches when all rendering is done.
        if (!this.renderingDone) {
            return;
        }
        const { findController, matches, pageIdx, textContentItemsStr, textDivs } = this;
        let clearedUntilDivIdx = -1;
        // Clear all current matches.
        for (let i = 0, ii = matches.length; i < ii; i++) {
            const match = matches[i];
            const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
            for (let n = begin, end = match.end.divIdx; n <= end; n++) {
                const div = textDivs[n];
                div.textContent = textContentItemsStr[n];
                div.className = '';
            }
            clearedUntilDivIdx = match.end.divIdx + 1;
        }
        if (!findController || !findController.highlightMatches) {
            return;
        }
        // Convert the matches on the `findController` into the match format
        // used for the textLayer.
        const pageMatches = findController.pageMatches[pageIdx] || null;
        const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
        this.matches = this._convertMatches(pageMatches, pageMatchesLength);
        this._renderMatches(this.matches);
    }
    /**
     * Improves text selection by adding an additional div where the mouse was
     * clicked. This reduces flickering of the content if the mouse is slowly
     * moved up or down.
     *
     * @private
     */
    _bindMouse() {
        const div = this.textLayerDiv;
        div.addEventListener('mousedown', () => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
                this.textLayerRenderTask.expandTextDivs(true);
                return;
            }
            const end = div.querySelector('.endOfContent');
            if (!end) {
                return;
            }
            end.classList.add('active');
        });
        div.addEventListener('mouseup', () => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
                this.textLayerRenderTask.expandTextDivs(false);
                return;
            }
            const end = div.querySelector('.endOfContent');
            if (!end) {
                return;
            }
            end.classList.remove('active');
        });
    }
}
class DefaultTextLayerFactory {
    /**
     * @param {HTMLDivElement} textLayerDiv
     * @param {number} pageIndex
     * @param viewport
     * @param {PdfFindController} findController
     * @param {boolean} enhanceTextSelection
     * @returns {TextLayerBuilder}
     */
    static createTextLayerBuilder(textLayerDiv, pageIndex, viewport, findController, enhanceTextSelection = true) {
        return new TextLayerBuilder(textLayerDiv, pageIndex, viewport, findController, enhanceTextSelection);
    }
}

function rotateLeft(actualRotation) {
    return _rotate(actualRotation, -90);
}
function rotateRight(actualRotation) {
    return _rotate(actualRotation, 90);
}
function isValidRotation(angle) {
    return Number.isInteger(angle) && angle % 90 === 0;
}
function _rotate(actualRotation, degrees) {
    return (actualRotation + 360 + degrees) % 360;
}

const CSS_UNITS = 96.0 / 72.0;
function parseQueryString(query) {
    const parts = query.split('&');
    const params = Object.create(null);
    for (let i = 0, ii = parts.length; i < ii; ++i) {
        const param = parts[i].split('=');
        const key = param[0].toLowerCase();
        const value = param.length > 1 ? param[1] : null;
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return params;
}
function getVisibleElements(container, views, sortByVisibility = false, horizontal = false) {
    const top = container.scrollTop;
    const bottom = top + container.clientHeight;
    const left = container.scrollLeft;
    const right = left + container.clientWidth;
    const visible = [];
    const numViews = views.length;
    let firstVisibleElementInd;
    if (numViews === 0) {
        firstVisibleElementInd = 0;
    }
    else {
        firstVisibleElementInd = binarySearchFirstItem(views, (view) => horizontal
            ? isElementRightAfterViewLeft(container, view.container)
            : isElementBottomAfterViewTop(container, view.container));
    }
    // Please note the return value of the `binarySearchFirstItem` function when
    // no valid element is found (hence the `firstVisibleElementInd` check below).
    if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
        // In wrapped scrolling (or vertical scrolling with spreads), with some page
        // sizes, isElementBottomAfterViewTop doesn't satisfy the binary search
        // condition: there can be pages with bottoms above the view top between
        // pages with bottoms below. This function detects and corrects that error;
        // see it for more comments.
        firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views.map((v) => v.container), top);
    }
    // lastEdge acts as a cutoff for us to stop looping, because we know all
    // subsequent pages will be hidden.
    //
    // When using wrapped scrolling or vertical scrolling with spreads, we can't
    // simply stop the first time we reach a page below the bottom of the view;
    // the tops of subsequent pages on the same row could still be visible. In
    // horizontal scrolling, we don't have that issue, so we can stop as soon as
    // we pass `right`, without needing the code below that handles the -1 case.
    let lastEdge = horizontal ? right : -1;
    for (let i = firstVisibleElementInd; i < numViews; i++) {
        const view = views[i];
        const pageContainer = view.container;
        const currentWidth = pageContainer.offsetLeft + pageContainer.clientLeft;
        const currentHeight = pageContainer.offsetTop + pageContainer.clientTop;
        const viewWidth = pageContainer.clientWidth;
        const viewHeight = pageContainer.clientHeight;
        const viewRight = currentWidth + viewWidth;
        const viewBottom = currentHeight + viewHeight;
        if (lastEdge === -1) {
            // As commented above, this is only needed in non-horizontal cases.
            // Setting lastEdge to the bottom of the first page that is partially
            // visible ensures that the next page fully below lastEdge is on the
            // next row, which has to be fully hidden along with all subsequent rows.
            if (viewBottom >= bottom) {
                lastEdge = viewBottom;
            }
        }
        else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
            break;
        }
        if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
            continue;
        }
        const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
        const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
        // tslint:disable-next-line:no-bitwise
        const percent = (((viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100) / viewHeight / viewWidth) | 0;
        visible.push({
            id: view.id,
            x: currentWidth,
            y: currentHeight,
            view,
            percent,
        });
    }
    const first = visible[0];
    const last = visible[visible.length - 1];
    if (sortByVisibility) {
        visible.sort(function (a, b) {
            const pc = a.percent - b.percent;
            if (Math.abs(pc) > 0.001) {
                return -pc;
            }
            return a.id - b.id; // ensure stability
        });
    }
    return { first: first, last: last, views: visible };
}
function binarySearchFirstItem(items, condition) {
    let minIndex = 0;
    let maxIndex = items.length - 1;
    if (items.length === 0 || !condition(items[maxIndex])) {
        return items.length;
    }
    if (condition(items[minIndex])) {
        return minIndex;
    }
    while (minIndex < maxIndex) {
        // tslint:disable-next-line:no-bitwise
        const currentIndex = (minIndex + maxIndex) >> 1;
        const currentItem = items[currentIndex];
        if (condition(currentItem)) {
            maxIndex = currentIndex;
        }
        else {
            minIndex = currentIndex + 1;
        }
    }
    return minIndex; /* === maxIndex */
}
function isElementBottomAfterViewTop(element, view) {
    const viewBottom = view.offsetTop + view.clientTop + view.clientHeight;
    return viewBottom > element.scrollTop;
}
function isElementRightAfterViewLeft(element, view) {
    const viewRight = view.offsetLeft + view.clientLeft + view.clientWidth;
    return viewRight > element.scrollLeft;
}
/**
 * Helper function for getVisibleElements.
 *
 * @param {number} index - initial guess at the first visible element
 * @param {Array} views - array of pages, into which `index` is an index
 * @param {number} top - the top of the scroll pane
 * @returns {number} less than or equal to `index` that is definitely at or
 *   before the first visible element in `views`, but not by too much. (Usually,
 *   this will be the first element in the first partially visible row in
 *   `views`, although sometimes it goes back one row further.)
 */
function backtrackBeforeAllVisibleElements(index, views, top) {
    // binarySearchFirstItem's assumption is that the input is ordered, with only
    // one index where the conditions flips from false to true: [false ...,
    // true...]. With vertical scrolling and spreads, it is possible to have
    // [false ..., true, false, true ...]. With wrapped scrolling we can have a
    // similar sequence, with many more mixed true and false in the middle.
    //
    // So there is no guarantee that the binary search yields the index of the
    // first visible element. It could have been any of the other visible elements
    // that were preceded by a hidden element.
    // Of course, if either this element or the previous (hidden) element is also
    // the first element, there's nothing to worry about.
    if (index < 2) {
        return index;
    }
    // That aside, the possible cases are represented below.
    //
    //     ****  = fully hidden
    //     A*B*  = mix of partially visible and/or hidden pages
    //     CDEF  = fully visible
    //
    // (1) Binary search could have returned A, in which case we can stop.
    // (2) Binary search could also have returned B, in which case we need to
    // check the whole row.
    // (3) Binary search could also have returned C, in which case we need to
    // check the whole previous row.
    //
    // There's one other possibility:
    //
    //     ****  = fully hidden
    //     ABCD  = mix of fully and/or partially visible pages
    //
    // (4) Binary search could only have returned A.
    // Initially assume that we need to find the beginning of the current row
    // (case 1, 2, or 4), which means finding a page that is above the current
    // page's top. If the found page is partially visible, we're definitely not in
    // case 3, and this assumption is correct.
    let elt = views[index];
    let pageTop = elt.offsetTop + elt.clientTop;
    if (pageTop >= top) {
        // The found page is fully visible, so we're actually either in case 3 or 4,
        // and unfortunately we can't tell the difference between them without
        // scanning the entire previous row, so we just conservatively assume that
        // we do need to backtrack to that row. In both cases, the previous page is
        // in the previous row, so use its top instead.
        elt = views[index - 1];
        pageTop = elt.offsetTop + elt.clientTop;
    }
    // Now we backtrack to the first page that still has its bottom below
    // `pageTop`, which is the top of a page in the first visible row (unless
    // we're in case 4, in which case it's the row before that).
    // `index` is found by binary search, so the page at `index - 1` is
    // invisible and we can start looking for potentially visible pages from
    // `index - 2`. (However, if this loop terminates on its first iteration,
    // which is the case when pages are stacked vertically, `index` should remain
    // unchanged, so we use a distinct loop variable.)
    for (let i = index - 2; i >= 0; --i) {
        elt = views[i];
        if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
            // We have reached the previous row, so stop now.
            // This loop is expected to terminate relatively quickly because the
            // number of pages per row is expected to be small.
            break;
        }
        index = i;
    }
    return index;
}
/**
 * Returns scale factor for the canvas. It makes sense for the HiDPI displays.
 * @returns {Object} The object with horizontal (sx) and vertical (sy)
 *                   scales. The scaled property is set to false if scaling is
 *                   not required, true otherwise.
 */
function getOutputScale(ctx) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
    const pixelRatio = devicePixelRatio / backingStoreRatio;
    return {
        sx: pixelRatio,
        sy: pixelRatio,
        scaled: pixelRatio !== 1,
    };
}
/**
 *  Approximates float number as a fraction using Farey sequence (max order
 *  of 8).
 *  @param {number} x - Positive float number.
 *  @returns {Array} Estimated fraction: the first array item is a numerator,
 *                   the second one is a denominator.
 */
function approximateFraction(x) {
    // Fast paths for int numbers or their inversions.
    if (Math.floor(x) === x) {
        return [x, 1];
    }
    const xinv = 1 / x;
    const limit = 8;
    if (xinv > limit) {
        return [1, limit];
    }
    else if (Math.floor(xinv) === xinv) {
        return [1, xinv];
    }
    const x_ = x > 1 ? xinv : x;
    // a/b and c/d are neighbours in Farey sequence.
    let a = 0, b = 1, c = 1, d = 1;
    // Limiting search to order 8.
    while (true) {
        // Generating next term in sequence (order of q).
        const p = a + c, q = b + d;
        if (q > limit) {
            break;
        }
        if (x_ <= p / q) {
            c = p;
            d = q;
        }
        else {
            a = p;
            b = q;
        }
    }
    let result;
    // Select closest of the neighbours to x.
    if (x_ - a / b < c / d - x_) {
        result = x_ === x ? [a, b] : [b, a];
    }
    else {
        result = x_ === x ? [c, d] : [d, c];
    }
    return result;
}
function roundToDivide(elem, div) {
    const r = elem % div;
    return r === 0 ? elem : Math.round(elem - r + div);
}
/**
 * Helper function to start monitoring the scroll event and converting them into
 * PDF.js friendly one: with scroll debounce and scroll direction.
 */
function watchScroll(viewAreaElement, callback) {
    const debounceScroll = () => {
        if (rAF) {
            return;
        }
        // schedule an invocation of scroll for next animation frame.
        rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
            rAF = null;
            const currentX = viewAreaElement.scrollLeft;
            const lastX = state.lastX;
            if (currentX !== lastX) {
                state.right = currentX > lastX;
            }
            state.lastX = currentX;
            const currentY = viewAreaElement.scrollTop;
            const lastY = state.lastY;
            if (currentY !== lastY) {
                state.down = currentY > lastY;
            }
            state.lastY = currentY;
            callback(state);
        });
    };
    const state = {
        right: true,
        down: true,
        lastX: viewAreaElement.scrollLeft,
        lastY: viewAreaElement.scrollTop,
        _eventHandler: debounceScroll,
    };
    let rAF = null;
    viewAreaElement.addEventListener('scroll', debounceScroll, true);
    return state;
}
/**
 * Scrolls specified element into view of its parent.
 * @param {Object} element - The element to be visible.
 * @param parent - The element containing the item we want to make visible
 * @param {Object} spot - An object with optional top and left properties,
 *   specifying the offset from the top left edge.
 * @param {boolean} skipOverflowHiddenElements - Ignore elements that have
 *   the CSS rule `overflow: hidden;` set. The default is false.
 */
function scrollIntoView(element, parent, spot, skipOverflowHiddenElements = false) {
    // Assuming offsetParent is available (it's not available when viewer is in
    // hidden iframe or object). We have to scroll: if the offsetParent is not set
    // producing the error. See also animationStarted.
    parent = parent || element.offsetParent;
    if (!parent) {
        console.error('offsetParent is not set -- cannot scroll');
        return;
    }
    let offsetY = element.offsetTop + element.clientTop - parent.offsetTop;
    let offsetX = element.offsetLeft + element.clientLeft - parent.offsetLeft;
    while ((parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth) ||
        (skipOverflowHiddenElements && getComputedStyle(parent).overflow === 'hidden')) {
        if (parent.dataset._scaleY) {
            offsetY /= parent.dataset._scaleY;
            offsetX /= parent.dataset._scaleX;
        }
        offsetY += parent.offsetTop;
        offsetX += parent.offsetLeft;
        parent = parent.offsetParent;
        if (!parent) {
            return; // no need to scroll
        }
    }
    if (spot) {
        if (spot.top !== undefined) {
            offsetY += spot.top;
        }
        if (spot.left !== undefined) {
            offsetX += spot.left;
            parent.scrollLeft = offsetX;
        }
    }
    parent.scrollTop = offsetY;
}
function isPortraitOrientation(size) {
    return size.width <= size.height;
}
/**
 * Returns the filename or guessed filename from the url (see issue 3455).
 * @param {string} url - The original PDF location.
 * @param {string} defaultFilename - The value returned if the filename is
 *   unknown, or the protocol is unsupported.
 * @returns {string} Guessed PDF filename.
 */
function getPDFFileNameFromURL(url, defaultFilename = 'document.pdf') {
    if (typeof url !== 'string') {
        return defaultFilename;
    }
    if (isDataSchema(url)) {
        console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.');
        return defaultFilename;
    }
    const reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
    //            SCHEME        HOST         1.PATH  2.QUERY   3.REF
    // Pattern to get last matching NAME.pdf
    const reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
    const splitURI = reURI.exec(url);
    let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
    if (suggestedFilename) {
        suggestedFilename = suggestedFilename[0];
        if (suggestedFilename.includes('%')) {
            // URL-encoded %2Fpath%2Fto%2Ffile.pdf should be file.pdf
            try {
                suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
            }
            catch (ex) {
                // Possible (extremely rare) errors:
                // URIError "Malformed URI", e.g. for "%AA.pdf"
                // TypeError "null has no properties", e.g. for "%2F.pdf"
            }
        }
    }
    return suggestedFilename || defaultFilename;
}
function isDataSchema(url) {
    let i = 0;
    const ii = url.length;
    while (i < ii && url[i].trim() === '') {
        i++;
    }
    return url.substring(i, i + 5).toLowerCase() === 'data:';
}
/**
 * Gets the size of the specified page, converted from PDF units to inches.
 * @param {Object} An Object containing the properties: {Array} `view`,
 *   {number} `userUnit`, and {number} `rotate`.
 * @returns {Object} An Object containing the properties: {number} `width`
 *   and {number} `height`, given in inches.
 */
function getPageSizeMilliliters({ view, userUnit, rotate }) {
    const [x1, y1, x2, y2] = view;
    // We need to take the page rotation into account as well.
    const changeOrientation = rotate % 180 !== 0;
    const width = ((x2 - x1) / 72) * userUnit;
    const height = ((y2 - y1) / 72) * userUnit;
    // 1in == 25.4mm; no need to round to 2 decimals for millimeters.
    const sizeMillimeters = {
        width: Math.round(width * 25.4 * 10) / 10,
        height: Math.round(height * 25.4 * 10) / 10,
    };
    return {
        width: changeOrientation ? sizeMillimeters.height : sizeMillimeters.width,
        height: changeOrientation ? sizeMillimeters.width : sizeMillimeters.height,
    };
}

var FindState;
(function (FindState) {
    FindState[FindState["FOUND"] = 0] = "FOUND";
    FindState[FindState["NOT_FOUND"] = 1] = "NOT_FOUND";
    FindState[FindState["WRAPPED"] = 2] = "WRAPPED";
    FindState[FindState["PENDING"] = 3] = "PENDING";
})(FindState || (FindState = {}));
const FIND_TIMEOUT = 250; // ms
const MATCH_SCROLL_OFFSET_TOP = -50; // px
const MATCH_SCROLL_OFFSET_LEFT = -400; // px
const CHARACTERS_TO_NORMALIZE = {
    '\u2018': "'",
    '\u2019': "'",
    '\u201A': "'",
    '\u201B': "'",
    '\u201C': '"',
    '\u201D': '"',
    '\u201E': '"',
    '\u201F': '"',
    '\u00BC': '1/4',
    '\u00BD': '1/2',
    '\u00BE': '3/4',
};
let normalizationRegex = null;
function normalize(text) {
    if (!normalizationRegex) {
        // Compile the regular expression for text normalization once.
        const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join('');
        normalizationRegex = new RegExp(`[${replace}]`, 'g');
    }
    return text.replace(normalizationRegex, function (ch) {
        return CHARACTERS_TO_NORMALIZE[ch];
    });
}
class PdfFindController {
    constructor() {
        this._extractTextPromises = [];
        this._pageContents = []; // Stores the normalized text for each page.
        this._matchesCountTotal = 0;
        this._pagesToSearch = null;
        // Events
        this.searchComplete = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.searchState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._reset();
        //eventBus.on("findbarclose", this._onFindBarClose.bind(this));
    }
    get highlightMatches() {
        return this._highlightMatches;
    }
    get pageMatches() {
        return this._pageMatches;
    }
    get pageMatchesLength() {
        return this._pageMatchesLength;
    }
    get selected() {
        return this._selected;
    }
    get state() {
        return this._state;
    }
    /**
     * Set a reference to the PDF document in order to search it.
     * Note that searching is not possible if this method is not called.
     *
     * @param pdfDocument - The PDF document to search.
     */
    setDocument(pdfDocument) {
        if (this._pdfDocument) {
            this._reset();
        }
        if (!pdfDocument) {
            return;
        }
        this._pdfDocument = pdfDocument;
        this._firstPageCapability.resolve();
    }
    executeCommand(cmd, state) {
        if (!state) {
            return;
        }
        const pdfDocument = this._pdfDocument;
        if (this._state === null || this._shouldDirtyMatch(cmd, state)) {
            this._dirtyMatch = true;
        }
        this._state = state;
        if (cmd !== 'findhighlightallchange') {
            this._updateUIState(FindState.PENDING);
        }
        this._firstPageCapability.promise.then(() => {
            // If the document was closed before searching began, or if the search
            // operation was relevant for a previously opened document, do nothing.
            if (!this._pdfDocument || (pdfDocument && this._pdfDocument !== pdfDocument)) {
                return;
            }
            this._extractText();
            const findbarClosed = !this._highlightMatches;
            const pendingTimeout = !!this._findTimeout;
            if (this._findTimeout) {
                clearTimeout(this._findTimeout);
                this._findTimeout = null;
            }
            if (cmd === 'find') {
                // Trigger the find action with a small delay to avoid starting the
                // search when the user is still typing (saving resources).
                this._findTimeout = setTimeout(() => {
                    this._nextMatch();
                    this._findTimeout = null;
                }, FIND_TIMEOUT);
            }
            else if (this._dirtyMatch) {
                // Immediately trigger searching for non-'find' operations, when the
                // current state needs to be reset and matches re-calculated.
                this._nextMatch();
            }
            else if (cmd === 'findagain') {
                this._nextMatch();
                // When the findbar was previously closed, and `highlightAll` is set,
                // ensure that the matches on all active pages are highlighted again.
                if (findbarClosed && this._state.highlightAll) {
                    this._updateAllPages();
                }
            }
            else if (cmd === 'findhighlightallchange') {
                // If there was a pending search operation, synchronously trigger a new
                // search *first* to ensure that the correct matches are highlighted.
                if (pendingTimeout) {
                    this._nextMatch();
                }
                else {
                    this._highlightMatches = true;
                }
                this._updateAllPages(); // Update the highlighting on all active pages.
            }
            else {
                this._nextMatch();
            }
        });
    }
    scrollMatchIntoView({ element = null, pageIndex = -1, matchIndex = -1 }) {
        if (!this._scrollMatches || !element) {
            return;
        }
        else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
            return;
        }
        else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
            return;
        }
        this._scrollMatches = false; // Ensure that scrolling only happens once.
        const spot = {
            top: MATCH_SCROLL_OFFSET_TOP,
            left: MATCH_SCROLL_OFFSET_LEFT,
        };
        scrollIntoView(element, null, spot, true);
    }
    _reset() {
        this._highlightMatches = false;
        this._scrollMatches = false;
        this._pdfDocument = null;
        this._pageMatches = [];
        this._pageMatchesLength = [];
        this._state = null;
        // Currently selected match.
        this._selected = {
            pageIdx: -1,
            matchIdx: -1,
        };
        // Where the find algorithm currently is in the document.
        this._offset = {
            pageIdx: null,
            matchIdx: null,
            wrapped: false,
        };
        this._extractTextPromises = [];
        this._pageContents = []; // Stores the normalized text for each page.
        this._matchesCountTotal = 0;
        this._pagesToSearch = null;
        this._pendingFindMatches = Object.create(null);
        this._resumePageIdx = null;
        this._dirtyMatch = false;
        clearTimeout(this._findTimeout);
        this._findTimeout = null;
        this._firstPageCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
    }
    /**
     * @type {string} The (current) normalized search query.
     */
    get _query() {
        if (this._state.query !== this._rawQuery) {
            this._rawQuery = this._state.query;
            this._normalizedQuery = normalize(this._state.query);
        }
        return this._normalizedQuery;
    }
    _shouldDirtyMatch(cmd, state) {
        // When the search query changes, regardless of the actual search command
        // used, always re-calculate matches to avoid errors (fixes bug 1030622).
        if (state.query !== this._state.query) {
            return true;
        }
        switch (cmd) {
            case 'findagain':
                const pageNumber = this._selected.pageIdx + 1;
                const linkService = this.linkService;
                // Only treat a 'findagain' event as a new search operation when it's
                // *absolutely* certain that the currently selected match is no longer
                // visible, e.g. as a result of the user scrolling in the document.
                //
                // NOTE: If only a simple `this._linkService.page` check was used here,
                // there's a risk that consecutive 'findagain' operations could "skip"
                // over matches at the top/bottom of pages thus making them completely
                // inaccessible when there's multiple pages visible in the viewer.
                return (pageNumber >= 1 &&
                    pageNumber <= linkService.pagesCount &&
                    pageNumber !== linkService.page &&
                    !linkService.isPageVisible(pageNumber));
            case 'findhighlightallchange':
                return false;
        }
        return true;
    }
    /**
     * Helper for multi-term search that fills the `matchesWithLength` array
     * and handles cases where one search term includes another search term (for
     * example, "tamed tame" or "this is"). It looks for intersecting terms in
     * the `matches` and keeps elements with a longer match length.
     */
    _prepareMatches(matchesWithLength, matches, matchesLength) {
        // Sort the array of `{ match: <match>, matchLength: <matchLength> }`
        // objects on increasing index first and on the length otherwise.
        matchesWithLength.sort((a, b) => (a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match));
        for (let i = 0, len = matchesWithLength.length; i < len; i++) {
            if (this._isSubTerm(matchesWithLength, i)) {
                continue;
            }
            matches.push(matchesWithLength[i].match);
            matchesLength.push(matchesWithLength[i].matchLength);
        }
    }
    _isSubTerm(matchesWithLength, currentIndex) {
        const currentElem = matchesWithLength[currentIndex];
        const nextElem = matchesWithLength[currentIndex + 1];
        // Check for cases like "TAMEd TAME".
        if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
            currentElem.skipped = true;
            return true;
        }
        // Check for cases like "thIS IS".
        for (let i = currentIndex - 1; i >= 0; i--) {
            const prevElem = matchesWithLength[i];
            if (prevElem.skipped) {
                continue;
            }
            if (prevElem.match + prevElem.matchLength < currentElem.match) {
                break;
            }
            if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
                currentElem.skipped = true;
                return true;
            }
        }
        return false;
    }
    /**
     * Determine if the search query constitutes a "whole word", by comparing the
     * first/last character type with the preceding/following character type.
     */
    _isEntireWord(content, startIdx, length) {
        if (startIdx > 0) {
            const first = content.charCodeAt(startIdx);
            const limit = content.charCodeAt(startIdx - 1);
            if (getCharacterType(first) === getCharacterType(limit)) {
                return false;
            }
        }
        const endIdx = startIdx + length - 1;
        if (endIdx < content.length - 1) {
            const last = content.charCodeAt(endIdx);
            const limit = content.charCodeAt(endIdx + 1);
            if (getCharacterType(last) === getCharacterType(limit)) {
                return false;
            }
        }
        return true;
    }
    _calculatePhraseMatch(query, pageIndex, pageContent, entireWord) {
        const matches = [];
        const queryLen = query.length;
        let matchIdx = -queryLen;
        while (true) {
            matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
            if (matchIdx === -1) {
                break;
            }
            if (entireWord && !this._isEntireWord(pageContent, matchIdx, queryLen)) {
                continue;
            }
            matches.push(matchIdx);
        }
        this._pageMatches[pageIndex] = matches;
    }
    _calculateWordMatch(query, pageIndex, pageContent, entireWord) {
        const matchesWithLength = [];
        // Divide the query into pieces and search for text in each piece.
        const queryArray = query.match(/\S+/g);
        for (let i = 0, len = queryArray.length; i < len; i++) {
            const subquery = queryArray[i];
            const subqueryLen = subquery.length;
            let matchIdx = -subqueryLen;
            while (true) {
                matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);
                if (matchIdx === -1) {
                    break;
                }
                if (entireWord && !this._isEntireWord(pageContent, matchIdx, subqueryLen)) {
                    continue;
                }
                // Other searches do not, so we store the length.
                matchesWithLength.push({
                    match: matchIdx,
                    matchLength: subqueryLen,
                    skipped: false,
                });
            }
        }
        // Prepare arrays for storing the matches.
        this._pageMatchesLength[pageIndex] = [];
        this._pageMatches[pageIndex] = [];
        // Sort `matchesWithLength`, remove intersecting terms and put the result
        // into the two arrays.
        this._prepareMatches(matchesWithLength, this._pageMatches[pageIndex], this._pageMatchesLength[pageIndex]);
    }
    _calculateMatch(pageIndex) {
        let pageContent = this._pageContents[pageIndex];
        let query = this._query;
        const { caseSensitive, entireWord, phraseSearch } = this._state;
        if (query.length === 0) {
            // Do nothing: the matches should be wiped out already.
            return;
        }
        if (!caseSensitive) {
            pageContent = pageContent.toLowerCase();
            query = query.toLowerCase();
        }
        if (phraseSearch) {
            this._calculatePhraseMatch(query, pageIndex, pageContent, entireWord);
        }
        else {
            this._calculateWordMatch(query, pageIndex, pageContent, entireWord);
        }
        // When `highlightAll` is set, ensure that the matches on previously
        // rendered (and still active) pages are correctly highlighted.
        if (this._state.highlightAll) {
            this._updatePage(pageIndex);
        }
        if (this._resumePageIdx === pageIndex) {
            this._resumePageIdx = null;
            this._nextPageMatch();
        }
        // Update the match count.
        const pageMatchesCount = this._pageMatches[pageIndex].length;
        if (pageMatchesCount > 0) {
            this._matchesCountTotal += pageMatchesCount;
            this._updateUIResultsCount();
        }
    }
    _extractText() {
        // Perform text extraction once if this method is called multiple times.
        if (this._extractTextPromises.length > 0) {
            return;
        }
        let promise = Promise.resolve();
        for (let i = 0, ii = this.linkService.pagesCount; i < ii; i++) {
            const extractTextCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
            this._extractTextPromises[i] = extractTextCapability.promise;
            promise = promise.then(() => {
                return this._pdfDocument
                    .getPage(i + 1)
                    .then((pdfPage) => {
                    return pdfPage.getTextContent({
                        normalizeWhitespace: true,
                    });
                })
                    .then((textContent) => {
                    const textItems = textContent.items;
                    const strBuf = [];
                    for (let j = 0, jj = textItems.length; j < jj; j++) {
                        strBuf.push(textItems[j].str);
                    }
                    // Store the normalized page content (text items) as one string.
                    this._pageContents[i] = normalize(strBuf.join(''));
                    extractTextCapability.resolve(i);
                }, (reason) => {
                    console.error(`Unable to get text content for page ${i + 1}`, reason);
                    // Page error -- assuming no text content.
                    this._pageContents[i] = '';
                    extractTextCapability.resolve(i);
                });
            });
        }
    }
    _updatePage(index) {
        if (this._scrollMatches && this._selected.pageIdx === index) {
            // If the page is selected, scroll the page into view, which triggers
            // rendering the page, which adds the text layer. Once the text layer
            // is built, it will attempt to scroll the selected match into view.
            this.linkService.page = index + 1;
        }
        this._pdfPageContainer.updateMatches(index);
    }
    _updateAllPages() {
        this._pdfPageContainer.updateMatches(-1);
    }
    _nextMatch() {
        const previous = this._state.findPrevious;
        const currentPageIndex = this.linkService.page - 1;
        const numPages = this.linkService.pagesCount;
        this._highlightMatches = true;
        if (this._dirtyMatch) {
            // Need to recalculate the matches, reset everything.
            this._dirtyMatch = false;
            this._selected.pageIdx = this._selected.matchIdx = -1;
            this._offset.pageIdx = currentPageIndex;
            this._offset.matchIdx = null;
            this._offset.wrapped = false;
            this._resumePageIdx = null;
            this._pageMatches.length = 0;
            this._pageMatchesLength.length = 0;
            this._matchesCountTotal = 0;
            this._updateAllPages(); // Wipe out any previously highlighted matches.
            for (let i = 0; i < numPages; i++) {
                // Start finding the matches as soon as the text is extracted.
                if (this._pendingFindMatches[i] === true) {
                    continue;
                }
                this._pendingFindMatches[i] = true;
                this._extractTextPromises[i].then((pageIdx) => {
                    delete this._pendingFindMatches[pageIdx];
                    this._calculateMatch(pageIdx);
                });
            }
        }
        // If there's no query there's no point in searching.
        if (this._query === '') {
            this._updateUIState(FindState.FOUND);
            return;
        }
        // If we're waiting on a page, we return since we can't do anything else.
        if (this._resumePageIdx) {
            return;
        }
        const offset = this._offset;
        // Keep track of how many pages we should maximally iterate through.
        this._pagesToSearch = numPages;
        // If there's already a `matchIdx` that means we are iterating through a
        // page's matches.
        if (offset.matchIdx !== null) {
            const numPageMatches = this._pageMatches[offset.pageIdx].length;
            if ((!previous && offset.matchIdx + 1 < numPageMatches) || (previous && offset.matchIdx > 0)) {
                // The simple case; we just have advance the matchIdx to select
                // the next match on the page.
                offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
                this._updateMatch(/* found = */ true);
                return;
            }
            // We went beyond the current page's matches, so we advance to
            // the next page.
            this._advanceOffsetPage(previous);
        }
        // Start searching through the page.
        this._nextPageMatch();
    }
    _matchesReady(matches) {
        const offset = this._offset;
        const numMatches = matches.length;
        const previous = this._state.findPrevious;
        if (numMatches) {
            // There were matches for the page, so initialize `matchIdx`.
            offset.matchIdx = previous ? numMatches - 1 : 0;
            this._updateMatch(/* found = */ true);
            return true;
        }
        // No matches, so attempt to search the next page.
        this._advanceOffsetPage(previous);
        if (offset.wrapped) {
            offset.matchIdx = null;
            if (this._pagesToSearch < 0) {
                // No point in wrapping again, there were no matches.
                this._updateMatch(/* found = */ false);
                // While matches were not found, searching for a page
                // with matches should nevertheless halt.
                return true;
            }
        }
        // Matches were not found (and searching is not done).
        return false;
    }
    _nextPageMatch() {
        if (this._resumePageIdx !== null) {
            console.error('There can only be one pending page.');
        }
        let matches = null;
        do {
            const pageIdx = this._offset.pageIdx;
            matches = this._pageMatches[pageIdx];
            if (!matches) {
                // The matches don't exist yet for processing by `_matchesReady`,
                // so set a resume point for when they do exist.
                this._resumePageIdx = pageIdx;
                break;
            }
        } while (!this._matchesReady(matches));
    }
    _advanceOffsetPage(previous) {
        const offset = this._offset;
        const numPages = this.linkService.pagesCount;
        offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
        offset.matchIdx = null;
        this._pagesToSearch--;
        if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
            offset.pageIdx = previous ? numPages - 1 : 0;
            offset.wrapped = true;
        }
    }
    _updateMatch(found = false) {
        let state = FindState.NOT_FOUND;
        const wrapped = this._offset.wrapped;
        this._offset.wrapped = false;
        if (found) {
            const previousPage = this._selected.pageIdx;
            this._selected.pageIdx = this._offset.pageIdx;
            this._selected.matchIdx = this._offset.matchIdx;
            state = wrapped ? FindState.WRAPPED : FindState.FOUND;
            // Update the currently selected page to wipe out any selected matches.
            if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
                this._updatePage(previousPage);
            }
        }
        this._updateUIState(state, this._state.findPrevious);
        if (this._selected.pageIdx !== -1) {
            // Ensure that the match will be scrolled into view.
            this._scrollMatches = true;
            this._updatePage(this._selected.pageIdx);
        }
    }
    _requestMatchesCount() {
        const { pageIdx, matchIdx } = this._selected;
        let current = 0, total = this._matchesCountTotal;
        if (matchIdx !== -1) {
            for (let i = 0; i < pageIdx; i++) {
                current += (this._pageMatches[i] && this._pageMatches[i].length) || 0;
            }
            current += matchIdx + 1;
        }
        // When searching starts, this method may be called before the `pageMatches`
        // have been counted (in `_calculateMatch`). Ensure that the UI won't show
        // temporarily broken state when the active find result doesn't make sense.
        if (current < 1 || current > total) {
            current = total = 0;
        }
        return { current, total };
    }
    _updateUIResultsCount() {
        this.searchComplete.next({ matchesCount: this._requestMatchesCount() });
    }
    _updateUIState(state, previous) {
        this.searchState.next({
            state: state,
            previous: previous,
            matchesCount: this._requestMatchesCount(),
        });
    }
    get pdfPageContainer() {
        return this._pdfPageContainer;
    }
    set pdfPageContainer(value) {
        this._pdfPageContainer = value;
    }
    get linkService() {
        return this._linkService;
    }
    set linkService(value) {
        this._linkService = value;
    }
}
PdfFindController.ɵfac = function PdfFindController_Factory(t) { return new (t || PdfFindController)(); };
PdfFindController.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfFindController, factory: PdfFindController.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfFindController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

const CLEANUP_TIMEOUT = 30000;
var RenderingStates;
(function (RenderingStates) {
    RenderingStates[RenderingStates["INITIAL"] = 0] = "INITIAL";
    RenderingStates[RenderingStates["RUNNING"] = 1] = "RUNNING";
    RenderingStates[RenderingStates["PAUSED"] = 2] = "PAUSED";
    RenderingStates[RenderingStates["FINISHED"] = 3] = "FINISHED";
})(RenderingStates || (RenderingStates = {}));
/**
 * Controls rendering of the views for pages and thumbnails.
 */
class PdfRenderingQueue {
    constructor() {
        this.printing = false;
        this.isThumbnailViewEnabled = false;
        this.pdfViewer = null;
        this.pdfThumbnailViewer = null;
        this.onIdle = null;
        this.highestPriorityPage = null;
        this.idleTimeout = null;
        this.printing = false;
        this.isThumbnailViewEnabled = false;
    }
    setViewer(pdfViewer) {
        this.pdfViewer = pdfViewer;
    }
    setThumbnailViewer(pdfThumbnailViewer) {
        this.pdfThumbnailViewer = pdfThumbnailViewer;
    }
    /**
     * @param {PdfContainerItem} view
     * @returns {boolean}
     */
    isHighestPriority(view) {
        return this.highestPriorityPage === view.renderingId;
    }
    /**
     * @param {Object} currentlyVisiblePages
     */
    renderHighestPriority(currentlyVisiblePages) {
        if (this.idleTimeout) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
        // Pages have a higher priority than thumbnails, so check them first.
        if (this.pdfViewer && this.pdfViewer.forceRendering(currentlyVisiblePages)) {
            return;
        }
        // No pages needed rendering, so check thumbnails.
        if (this.pdfThumbnailViewer && this.pdfThumbnailViewer.forceRendering()) {
            return;
        }
        if (this.printing) {
            // If printing is currently ongoing do not reschedule cleanup.
            return;
        }
        if (this.onIdle) {
            this.idleTimeout = setTimeout(this.onIdle, CLEANUP_TIMEOUT);
        }
    }
    /**
     * @param {Object} visible
     * @param {Array} views
     * @param {boolean} scrolledDown
     */
    getHighestPriority(visible, views, scrolledDown) {
        /**
         * The state has changed. Figure out which page has the highest priority to
         * render next (if any).
         *
         * Priority:
         * 1. visible pages
         * 2. if last scrolled down, the page after the visible pages, or
         *    if last scrolled up, the page before the visible pages
         */
        const visibleViews = visible.views;
        const numVisible = visibleViews.length;
        if (numVisible === 0) {
            return null;
        }
        for (let i = 0; i < numVisible; ++i) {
            const view = visibleViews[i].view;
            if (!this.isViewFinished(view)) {
                return view;
            }
        }
        // All the visible views have rendered; try to render next/previous pages.
        if (scrolledDown) {
            const nextPageIndex = visible.last.id;
            // IDs start at 1, so no need to add 1.
            if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
                return views[nextPageIndex];
            }
        }
        else {
            const previousPageIndex = visible.first.id - 2;
            if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
                return views[previousPageIndex];
            }
        }
        // Everything that needs to be rendered has been.
        return null;
    }
    /**
     * @param {PdfContainerItem} view
     * @returns {boolean}
     */
    isViewFinished(view) {
        return view.renderingState === RenderingStates.FINISHED;
    }
    /**
     * Render a page or thumbnail view. This calls the appropriate function
     * based on the views state. If the view is already rendered it will return
     * `false`.
     *
     * @param {PdfContainerItem} view
     */
    renderView(view) {
        switch (view.renderingState) {
            case RenderingStates.FINISHED:
                return false;
            case RenderingStates.PAUSED:
                this.highestPriorityPage = view.renderingId;
                view.resume();
                break;
            case RenderingStates.RUNNING:
                this.highestPriorityPage = view.renderingId;
                break;
            case RenderingStates.INITIAL:
                this.highestPriorityPage = view.renderingId;
                view.draw().finally(() => this.renderHighestPriority());
                break;
        }
        return true;
    }
}
PdfRenderingQueue.ɵfac = function PdfRenderingQueue_Factory(t) { return new (t || PdfRenderingQueue)(); };
PdfRenderingQueue.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfRenderingQueue, factory: PdfRenderingQueue.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfRenderingQueue, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();

class PdfLinkService {
    constructor() {
        this.externalLinkEnabled = true;
    }
    setDocument(pdfDocument, baseUrl = null) {
        this.baseUrl = baseUrl;
        this.pdfDocument = pdfDocument;
        this._pagesRefCache = Object.create(null);
    }
    setViewer(pdfViewer) {
        this.pdfViewer = pdfViewer;
    }
    setHistory(pdfHistory) {
        this.pdfHistory = pdfHistory;
    }
    /**
     * @type {number}
     */
    get pagesCount() {
        return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
    /**
     * @type {number}
     */
    get page() {
        return this.pdfViewer.currentPageNumber;
    }
    /**
     * @param {number} value
     */
    set page(value) {
        this.pdfViewer.currentPageNumber = value;
    }
    /**
     * @type {number}
     */
    get rotation() {
        return this.pdfViewer.pagesRotation;
    }
    /**
     * @param {number} value
     */
    set rotation(value) {
        this.pdfViewer.pagesRotation = value;
    }
    /**
     * @param {string|Array} dest - The named, or explicit, PDF destination.
     */
    navigateTo(dest) {
        const goToDestination = ({ namedDest, explicitDest }) => {
            // Dest array looks like that: <page-ref> </XYZ|/FitXXX> <args..>
            const destRef = explicitDest[0];
            let pageNumber;
            if (destRef instanceof Object) {
                pageNumber = this._cachedPageNumber(destRef);
                if (pageNumber === null) {
                    // Fetch the page reference if it's not yet available. This could
                    // only occur during loading, before all pages have been resolved.
                    this.pdfDocument
                        .getPageIndex(destRef)
                        .then((pageIndex) => {
                        this.cachePageRef(pageIndex + 1, destRef);
                        goToDestination({ namedDest, explicitDest });
                    })
                        .catch(() => console.error(`PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid page reference, for dest="${dest}".`));
                    return;
                }
            }
            else if (Number.isInteger(destRef)) {
                pageNumber = destRef + 1;
            }
            else {
                console.error(`PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid destination reference, for dest="${dest}".`);
                return;
            }
            if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
                console.error(`PDFLinkService.navigateTo: "${pageNumber}" is not ` + `a valid page number, for dest="${dest}".`);
                return;
            }
            if (this.pdfHistory) {
                // Update the browser history before scrolling the new destination into
                // view, to be able to accurately capture the current document position.
                this.pdfHistory.pushCurrentPosition();
                this.pdfHistory.push({ namedDest, explicitDest, pageNumber });
            }
            this.pdfViewer.scrollPageIntoView({
                pageNumber,
                destArray: explicitDest,
            });
        };
        new Promise((resolve) => {
            if (typeof dest === 'string') {
                this.pdfDocument.getDestination(dest).then((destArray) => {
                    resolve({
                        namedDest: dest,
                        explicitDest: destArray,
                    });
                });
                return;
            }
            const data = {
                namedDest: '',
                explicitDest: dest,
            };
            resolve(data);
        }).then((data) => {
            if (!Array.isArray(data.explicitDest)) {
                console.error(`PDFLinkService.navigateTo: "${data.explicitDest}" is` + ` not a valid destination array, for dest="${dest}".`);
                return;
            }
            goToDestination(data);
        });
    }
    /**
     * @param {string|Array} dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
    getDestinationHash(dest) {
        if (typeof dest === 'string') {
            return this.getAnchorUrl('#' + escape(dest));
        }
        if (Array.isArray(dest)) {
            const str = JSON.stringify(dest);
            return this.getAnchorUrl('#' + escape(str));
        }
        return this.getAnchorUrl('');
    }
    /**
     * Prefix the full url on anchor links to make sure that links are resolved
     * relative to the current URL instead of the one defined in <base href>.
     * @param {string} anchor The anchor hash, including the #.
     * @returns {string} The hyperlink to the PDF object.
     */
    getAnchorUrl(anchor) {
        return (this.baseUrl || '') + anchor;
    }
    /**
     * @param {string} hash
     */
    setHash(hash) {
        let pageNumber, dest;
        if (hash.includes('=')) {
            const params = parseQueryString(hash);
            // borrowing syntax from "Parameters for Opening PDF Files"
            if ('nameddest' in params) {
                this.navigateTo(params.nameddest);
                return;
            }
            if ('page' in params) {
                pageNumber = params.page | 0 || 1;
            }
            if ('zoom' in params) {
                // Build the destination array.
                const zoomArgs = params.zoom.split(','); // scale,left,top
                const zoomArg = zoomArgs[0];
                const zoomArgNumber = parseFloat(zoomArg);
                if (!zoomArg.includes('Fit')) {
                    // If the zoomArg is a number, it has to get divided by 100. If it's
                    // a string, it should stay as it is.
                    dest = [
                        null,
                        { name: 'XYZ' },
                        zoomArgs.length > 1 ? zoomArgs[1] | 0 : null,
                        zoomArgs.length > 2 ? zoomArgs[2] | 0 : null,
                        zoomArgNumber ? zoomArgNumber / 100 : zoomArg,
                    ];
                }
                else {
                    if (zoomArg === 'Fit' || zoomArg === 'FitB') {
                        dest = [null, { name: zoomArg }];
                    }
                    else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
                        dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
                    }
                    else if (zoomArg === 'FitR') {
                        if (zoomArgs.length !== 5) {
                            console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
                        }
                        else {
                            dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
                        }
                    }
                    else {
                        console.error(`PDFLinkService.setHash: "${zoomArg}" is not ` + 'a valid zoom value.');
                    }
                }
            }
            if (dest) {
                this.pdfViewer.scrollPageIntoView({
                    pageNumber: pageNumber || this.page,
                    destArray: dest,
                    allowNegativeOffset: true,
                });
            }
            else if (pageNumber) {
                this.page = pageNumber; // simple page
            }
            // Named (or explicit) destination.
            dest = unescape(hash);
            try {
                dest = JSON.parse(dest);
                if (!Array.isArray(dest)) {
                    // Avoid incorrectly rejecting a valid named destination, such as
                    // e.g. "4.3" or "true", because `JSON.parse` converted its type.
                    dest = dest.toString();
                }
            }
            catch (ex) { }
            if (typeof dest === 'string' || this.isValidExplicitDestination(dest)) {
                this.navigateTo(dest);
                return;
            }
            console.error(`PDFLinkService.setHash: "${unescape(hash)}" is not ` + 'a valid destination.');
        }
    }
    /**
     * @param {string} action
     */
    executeNamedAction(action) {
        // See PDF reference, table 8.45 - Named action
        switch (action) {
            case 'GoBack':
                if (this.pdfHistory) {
                    this.pdfHistory.back();
                }
                break;
            case 'GoForward':
                if (this.pdfHistory) {
                    this.pdfHistory.forward();
                }
                break;
            case 'NextPage':
                if (this.page < this.pagesCount) {
                    this.page++;
                }
                break;
            case 'PrevPage':
                if (this.page > 1) {
                    this.page--;
                }
                break;
            case 'LastPage':
                this.page = this.pagesCount;
                break;
            case 'FirstPage':
                this.page = 1;
                break;
            default:
                break; // No action according to spec
        }
    }
    isValidExplicitDestination(dest) {
        if (!Array.isArray(dest)) {
            return false;
        }
        const destLength = dest.length;
        if (destLength < 2) {
            return false;
        }
        const page = dest[0];
        if (!(typeof page === 'object' && Number.isInteger(page.num) && Number.isInteger(page.gen)) &&
            !(Number.isInteger(page) && page >= 0)) {
            return false;
        }
        const zoom = dest[1];
        if (!(typeof zoom === 'object' && typeof zoom.name === 'string')) {
            return false;
        }
        let allowNull = true;
        switch (zoom.name) {
            case 'XYZ':
                if (destLength !== 5) {
                    return false;
                }
                break;
            case 'Fit':
            case 'FitB':
                return destLength === 2;
            case 'FitH':
            case 'FitBH':
            case 'FitV':
            case 'FitBV':
                if (destLength !== 3) {
                    return false;
                }
                break;
            case 'FitR':
                if (destLength !== 6) {
                    return false;
                }
                allowNull = false;
                break;
            default:
                return false;
        }
        for (let i = 2; i < destLength; i++) {
            const param = dest[i];
            if (!(typeof param === 'number' || (allowNull && param === null))) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {number} pageNum - page number.
     * @param {Object} pageRef - reference to the page.
     */
    cachePageRef(pageNum, pageRef) {
        if (!pageRef) {
            return;
        }
        const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
        this._pagesRefCache[refStr] = pageNum;
    }
    _cachedPageNumber(pageRef) {
        const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
        return (this._pagesRefCache && this._pagesRefCache[refStr]) || null;
    }
    /**
     * @param {number} pageNumber
     */
    isPageVisible(pageNumber) {
        return this.pdfViewer.isPageVisible(pageNumber);
    }
}
PdfLinkService.ɵfac = function PdfLinkService_Factory(t) { return new (t || PdfLinkService)(); };
PdfLinkService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfLinkService, factory: PdfLinkService.ɵfac });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfLinkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();

var PrintDPI;
(function (PrintDPI) {
    PrintDPI[PrintDPI["LOW"] = 150] = "LOW";
    PrintDPI[PrintDPI["MEDIUM"] = 300] = "MEDIUM";
    PrintDPI[PrintDPI["HIGH"] = 600] = "HIGH";
    PrintDPI[PrintDPI["ULTRA"] = 1200] = "ULTRA";
})(PrintDPI || (PrintDPI = {}));
class PdfPrintManager {
    constructor() { }
    print(pdfViewer, pdfDocument, pagesOverview, printDpi) {
        if (this.activeService) {
            console.warn('Ignored window.print() because of a pending print job.');
            return;
        }
        this._pdfViewer = pdfViewer;
        this.ensureOverlay();
        try {
            this._dispatchEvent('beforeprint');
        }
        finally {
            if (!this.activeService) {
                console.error('Expected print service to be initialized.');
                this.ensureOverlay();
            }
            else {
                this.layout(pagesOverview)
                    .then(() => this.renderPages(pdfDocument, pagesOverview, printDpi).then(() => this.performPrint()))
                    .then(() => {
                    // aborts acts on the "active" print request, so we need to check
                    // whether the print request (activeServiceOnEntry) is still active.
                    // Without the check, an unrelated print request (created after aborting
                    // this print request while the pages were being generated) would be
                    // aborted.
                    if (this.active) {
                        this._abort();
                    }
                });
            }
        }
    }
    layout(pagesOverview) {
        return new Promise((resolve) => {
            this.throwIfInactive();
            const body = document.querySelector('body');
            this.printContainer = document.createElement('div');
            this.printContainer.classList.add('docu-printable');
            this.printContainer.style.display = 'none';
            body.appendChild(this.printContainer);
            body.setAttribute('data-pdf-printing', `${true}`);
            const hasEqualPageSizes = pagesOverview.every((size) => size.width === pagesOverview[0].width && size.height === pagesOverview[0].height);
            if (!hasEqualPageSizes) {
                console.warn('Not all pages have the same size. The printed result may be incorrect!');
            }
            const pageSize = pagesOverview[0];
            // Insert a @page + size rule to make sure that the page size is correctly
            // set. Note that we assume that all pages have the same size, because
            // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
            this.pageStyleSheet = document.createElement('style');
            this.pageStyleSheet.textContent = this._addStylesForPrinting(pageSize.width, pageSize.height);
            body.appendChild(this.pageStyleSheet);
            resolve();
        });
    }
    renderProgress(index, total) {
        const progress = Math.round((index / total) * 100);
        this._pdfViewer.pdfPrintProgress.next({ progress });
    }
    renderPages(pdfDocument, pagesOverview, printDpi) {
        let currentPage = -1;
        const pageCount = pagesOverview.length;
        const renderNextPage = (resolve, reject) => {
            this.throwIfInactive();
            if (++currentPage >= pageCount) {
                this.renderProgress(pageCount, pageCount);
                resolve();
                return;
            }
            const index = currentPage;
            this.renderProgress(index, pageCount);
            this.renderPage(pdfDocument, index + 1, pagesOverview[index], printDpi)
                .then((page) => this.useRenderedPage(page))
                .then(() => renderNextPage(resolve, reject), reject);
        };
        return new Promise(renderNextPage);
    }
    destroy() {
        if (this.activeService !== this) {
            // |activeService| cannot be replaced without calling destroy() first,
            // so if it differs then an external consumer has a stale reference to
            // us.
            return;
        }
        const body = document.querySelector('body');
        body.removeAttribute('data-pdfprinting');
        this.printContainer.remove();
        this.printContainer = null;
        if (this.pageStyleSheet) {
            this.pageStyleSheet.remove();
            this.pageStyleSheet = null;
        }
        this.scratchCanvas.width = this.scratchCanvas.height = 0;
        this.scratchCanvas = null;
        this.activeService = null;
    }
    renderPage(pdfDocument, pageNumber, size, printDpi) {
        const scratchCanvas = this.activeService.scratchCanvas;
        // The size of the canvas in pixels for printing.
        const PRINT_UNITS = printDpi / 72.0;
        scratchCanvas.width = Math.floor(size.width * PRINT_UNITS);
        scratchCanvas.height = Math.floor(size.height * PRINT_UNITS);
        // The physical size of the img as specified by the PDF document.
        const width = Math.floor(size.width * CSS_UNITS) + 'px';
        const height = Math.floor(size.height * CSS_UNITS) + 'px';
        const ctx = scratchCanvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        ctx.restore();
        return pdfDocument
            .getPage(pageNumber)
            .then((pdfPage) => {
            const renderContext = {
                canvasContext: ctx,
                transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
                viewport: pdfPage.getViewport({ scale: 1, rotation: size.rotation }),
                intent: 'print',
            };
            return pdfPage.render(renderContext).promise;
        })
            .then(() => ({ width, height }));
    }
    useRenderedPage(printItem) {
        this.throwIfInactive();
        const img = document.createElement('img');
        img.style.width = printItem.width;
        img.style.height = printItem.height;
        const scratchCanvas = this.scratchCanvas;
        if ('toBlob' in scratchCanvas) {
            scratchCanvas.toBlob((blob) => (img.src = URL.createObjectURL(blob)));
        }
        else {
            // @ts-ignore
            img.src = scratchCanvas.toDataURL();
        }
        const wrapper = document.createElement('div');
        wrapper.appendChild(img);
        this.printContainer.appendChild(wrapper);
        return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
    }
    performPrint() {
        this.throwIfInactive();
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.active) {
                    resolve();
                    return;
                }
                this.printContainer.style.display = 'block';
                print.call(window);
                // Delay promise resolution in case print() was not synchronous.
                setTimeout(resolve, 20); // Tidy-up.
            }, 0);
        });
    }
    ensureOverlay() {
        if (!this.overlayPromise) {
            this.overlayPromise = new Promise((resolve) => resolve());
        }
        this.scratchCanvas = document.createElement('canvas');
        this.activeService = this;
        return this.overlayPromise;
    }
    throwIfInactive() {
        if (!this.active) {
            throw new Error('This print request was cancelled or completed.');
        }
    }
    _dispatchEvent(eventType) {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventType, false, false, 'custom');
        window.dispatchEvent(event);
    }
    _abort() {
        if (this.activeService) {
            this.destroy();
        }
    }
    _addStylesForPrinting(width, height) {
        // Insert a @page + size rule to make sure that the page size is correctly
        // set. Note that we assume that all pages have the same size, because
        // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
        // "size:<width> <height>" is what we need. But also add "A4" because
        // Firefox incorrectly reports support for the other value.
        const pageStyle = '@supports ((size:A4) and (size:1pt 1pt)) {' +
            '@page { size: ' +
            width +
            'pt ' +
            height +
            'pt;' +
            ' margin: 0; }' +
            '}';
        // Print styles for the whole document to avoid getting non related pdf elements from the DOM
        const documentStyles = '@media print {' +
            '* { margin: 0; padding: 0; }' +
            'body > *:not(.mnj-printable) { display: none; }' +
            '.mnj-printable { height: 100%; }' +
            '.mnj-printable > div { ' +
            'position: relative; top: 0; left: 0; width: 1px; height: 1px; overflow: visible; ' +
            'page-break-after: always; page-break-inside: avoid;' +
            '}' +
            '.mnj-printable canvas, .mnj-printable img { display: block; }';
        return pageStyle + documentStyles;
    }
    get active() {
        return this === this.activeService;
    }
}
PdfPrintManager.ɵfac = function PdfPrintManager_Factory(t) { return new (t || PdfPrintManager)(); };
PdfPrintManager.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfPrintManager, factory: PdfPrintManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfPrintManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

class PdfContainer {
    constructor(renderingQueue) {
        this.renderingQueue = renderingQueue;
        this._pageLabels = null;
        this._pagesRequests = new WeakMap();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    _resetView() {
        this.items = [];
        this._currentPageNumber = 1;
        this._pageLabels = null;
        this._pagesRotation = 0;
        this._pagesRequests = new WeakMap();
        // Remove children from the DOM
        this.container.textContent = '';
    }
    cleanup() {
        this.cancelRendering();
        this.items.forEach((i) => i.reset());
        this.setDocument(null);
    }
    cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    /**
     * @returns {Promise} Returns a promise containing a {PDFPageProxy} object.
     * @private
     */
    setPageLabels(labels) {
        if (!this.pdfDocument) {
            return;
        }
        if (!labels) {
            this._pageLabels = null;
        }
        else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null;
            console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
        }
        else {
            this._pageLabels = labels;
        }
        // Update all the `PDFThumbnailView` instances.
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            const label = this._pageLabels && this._pageLabels[i];
            this.items[i].setPageLabel(label);
        }
    }
    _ensurePdfPageLoaded(itemView) {
        if (itemView.pdfPage) {
            return Promise.resolve(itemView.pdfPage);
        }
        if (this._pagesRequests.has(itemView)) {
            return this._pagesRequests.get(itemView);
        }
        const promise = this.pdfDocument
            .getPage(itemView.id)
            .then((pdfPage) => {
            if (!itemView.pdfPage) {
                itemView.setPdfPage(pdfPage);
            }
            this._pagesRequests.delete(itemView);
            return pdfPage;
        })
            .catch((reason) => {
            console.error('Unable to get page for page view', reason);
            // Page error -- there is nothing that can be done.
            this._pagesRequests.delete(itemView);
        });
        this._pagesRequests.set(itemView, promise);
        return promise;
    }
}
class PdfContainerItem {
    constructor(id, defaultViewport, renderingQueue, renderer) {
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this.rotation = 0;
        this._renderingState = RenderingStates.INITIAL;
        this._viewport = defaultViewport;
        this.pdfPageRotate = defaultViewport.rotation;
    }
    get pdfPage() {
        return this._pdfPage;
    }
    get container() {
        return this._container;
    }
    get viewport() {
        return this._viewport;
    }
    get renderingState() {
        return this._renderingState;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
}

class PdfPageRef extends PdfContainerItem {
    // TODO move page description params to each PdfPageRef to print pdf with different page sizes
    constructor(pagesContainer, id, defaultViewport, findController, linkService, downloadManager, renderingQueue, renderer) {
        super(id, defaultViewport, renderingQueue, renderer);
        this.pagesContainer = pagesContainer;
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.findController = findController;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this.scaleNumber = defaultViewport.scale;
        this.renderingQueue = renderingQueue;
        this._container = this.createItemContainer(defaultViewport);
        this.pagesContainer.appendChild(this.container);
    }
    setPdfPage(page) {
        this._pdfPage = page;
        this.pdfPageRotate = page.rotate;
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = page.getViewport({
            scale: this.scaleNumber,
            rotation: totalRotation,
        });
        this.stats = page.stats;
        this.reset();
    }
    destroy() {
        this.reset();
        if (this._pdfPage) {
            this._pdfPage.cleanup();
        }
    }
    draw() {
        if (this.renderingState !== RenderingStates.INITIAL) {
            console.error('Must be in new state before drawing');
            this.reset(); // Ensure that we reset all state to prevent issues.
        }
        if (!this.pdfPage) {
            this._renderingState = RenderingStates.FINISHED;
            return Promise.reject(new Error('Page is not loaded'));
        }
        this._renderingState = RenderingStates.RUNNING;
        const pdfPage = this.pdfPage;
        const div = this.container;
        // Wrap the canvas so that if it has a CSS transform for high DPI the
        // overflow will be hidden in Firefox.
        const canvasWrapper = this._getOrBuildCanvas();
        if (this._annotationLayer && this._annotationLayer.div) {
            // The annotation layer needs to stay on top.
            div.insertBefore(canvasWrapper, this._annotationLayer.div);
        }
        else {
            div.appendChild(canvasWrapper);
        }
        const textLayerDiv = this._getOrBuildTextLayer();
        if (this._annotationLayer && this._annotationLayer.div) {
            // The annotation layer needs to stay on top.
            div.insertBefore(textLayerDiv, this._annotationLayer.div);
        }
        else {
            div.appendChild(textLayerDiv);
        }
        this._textLayer = DefaultTextLayerFactory.createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.findController);
        let renderContinueCallback = null;
        if (this.renderingQueue) {
            renderContinueCallback = (cont) => {
                if (!this.renderingQueue.isHighestPriority(this)) {
                    this._renderingState = RenderingStates.PAUSED;
                    this.resume = () => {
                        this._renderingState = RenderingStates.RUNNING;
                        cont();
                    };
                    return;
                }
                cont();
            };
        }
        const finishPaintTask = (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__awaiter"])(this, void 0, void 0, function* () {
            // The paintTask may have been replaced by a new one, so only remove
            // the reference to the paintTask if it matches the one that is
            // triggering this callback.
            if (paintTask === this.paintTask) {
                this.paintTask = null;
            }
            if (error instanceof pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["RenderingCancelledException"]) {
                this.error = null;
                return;
            }
            this._renderingState = RenderingStates.FINISHED;
            this.error = error;
            if (error) {
                throw error;
            }
        });
        const paintTask = this.paintOnCanvas(canvasWrapper);
        paintTask.onRenderContinue = renderContinueCallback;
        this.paintTask = paintTask;
        const resultPromise = paintTask.promise.then(() => finishPaintTask(null).then(() => {
            if (this._textLayer) {
                const readableStream = pdfPage.streamTextContent({
                    normalizeWhitespace: true,
                });
                this._textLayer.setTextContentStream(readableStream);
                this._textLayer.render();
            }
        }), (reason) => finishPaintTask(reason));
        if (!this._annotationLayer) {
            this._annotationLayer = DefaultAnnotationLayerFactory.createAnnotationLayerBuilder(this.container, pdfPage, this.linkService, this.downloadManager);
        }
        this._annotationLayer.render(this.viewport);
        div.setAttribute('data-loaded', `${true}`);
        return resultPromise;
    }
    paintOnCanvas(canvasWrapper) {
        const renderCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
        const result = {
            promise: renderCapability.promise,
            onRenderContinue(cont) {
                cont();
            },
            cancel() {
                renderTask.cancel();
            },
        };
        const viewport = this.viewport;
        const canvas = canvasWrapper;
        // Keep the canvas hidden until the first draw callback, or until drawing
        // is complete when `!this.renderingQueue`, to prevent black flickering.
        canvas.setAttribute('hidden', 'hidden');
        let isCanvasHidden = true;
        const showCanvas = function () {
            if (isCanvasHidden) {
                canvas.removeAttribute('hidden');
                isCanvasHidden = false;
            }
        };
        const ctx = canvasWrapper.getContext('2d', { alpha: false });
        const outputScale = getOutputScale(ctx);
        /*if (this.useOnlyCssZoom) {
                const actualSizeViewport = viewport.clone({ scale: CSS_UNITS });
                // Use a scale that makes the canvas have the originally intended size
                // of the page.
                outputScale.sx *= actualSizeViewport.width / viewport.width;
                outputScale.sy *= actualSizeViewport.height / viewport.height;
                outputScale.scaled = true;
            }*/
        const pixelsInViewport = viewport.width * viewport.height;
        const maxScale = Math.sqrt(16777216 / pixelsInViewport);
        if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
            outputScale.sx = maxScale;
            outputScale.sy = maxScale;
            outputScale.scaled = true;
        }
        const sfx = approximateFraction(outputScale.sx);
        const sfy = approximateFraction(outputScale.sy);
        canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
        canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
        canvas.style.width = roundToDivide(viewport.width, sfx[1]) + 'px';
        canvas.style.height = roundToDivide(viewport.height, sfy[1]) + 'px';
        // Add the viewport so it's known what it was originally drawn with.
        //this.paintedViewportMap.set(canvas, viewport);
        // Rendering area
        const transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
        const renderContext = {
            canvasContext: ctx,
            transform,
            viewport: this.viewport,
            enableWebGL: false,
            renderInteractiveForms: false,
        };
        const renderTask = this.pdfPage.render(renderContext);
        renderTask.onContinue = function (cont) {
            showCanvas();
            if (result.onRenderContinue) {
                result.onRenderContinue(cont);
            }
            else {
                cont();
            }
        };
        renderTask.promise.then(function () {
            showCanvas();
            renderCapability.resolve(undefined);
        }, function (error) {
            showCanvas();
            renderCapability.reject(error);
        });
        return result;
    }
    reset(keepZoomLayer = false, keepAnnotations = false) {
        this.cancelRendering();
        this._renderingState = RenderingStates.INITIAL;
        if (this.container) {
            this._updatePageContainer();
        }
        if (this._canvasContainer) {
            this.renderer.removeChild(this.container, this._canvasContainer);
            this._canvasContainer = null;
        }
        if (this._textLayerContainer) {
            this.renderer.removeChild(this.container, this._textLayerContainer);
            this._textLayerContainer = null;
        }
        if (this._annotationLayer) {
            if (this._annotationLayer.div) {
                this._annotationLayer.hide();
            }
            else {
                this._annotationLayer.cancel();
                this._annotationLayer = null;
            }
        }
        this.renderer.setAttribute(this.container, 'data-page-id', `${this.id}`);
        this.renderer.removeAttribute(this.container, 'data-loaded');
    }
    update(scale, rotation) {
        this.scaleNumber = scale || this.scaleNumber;
        // The rotation may be zero.
        if (typeof rotation !== 'undefined') {
            this.rotation = rotation;
        }
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = this.viewport.clone({
            scale: this.scaleNumber * CSS_UNITS,
            rotation: totalRotation,
        });
        /*let isScalingRestricted = false;
    
            if (this._canvasContainer) {
                if (this.useOnlyCssZoom || (this.hasRestrictedScaling && isScalingRestricted)) {
                    this.cssTransform(this.canvas, true);
                    return;
                }
                if (!this.zoomLayer && !this.canvas.hasAttribute("hidden")) {
                    this.zoomLayer = this.canvas.parentNode;
                    this.zoomLayer.style.position = "absolute";
                }
            }
            if (this.zoomLayer) {
                this.cssTransform(this.zoomLayer.firstChild);
            }*/
        this.reset(/* keepZoomLayer = */ true, /* keepAnnotations = */ true);
    }
    updateMatches() {
        if (this.textLayer) {
            this.textLayer._updateMatches();
        }
    }
    cancelRendering() {
        if (this._renderTask) {
            this._renderTask.cancel();
        }
        if (this.textLayer) {
            this.textLayer.cancel();
            this._textLayer = null;
        }
        if (this._annotationLayer) {
            this._annotationLayer.cancel();
            this._annotationLayer = null;
        }
    }
    _updatePageContainer() {
        this.renderer.setStyle(this.container, 'width', `${this.viewport.width}px`);
        this.renderer.setStyle(this.container, 'height', `${this.viewport.height}px`);
        return this.container;
    }
    createItemContainer(defaultViewport) {
        const pageElement = this.renderer.createElement('div');
        this.renderer.addClass(pageElement, 'pdf-page');
        this.renderer.setStyle(pageElement, 'position', 'relative');
        if (this.pdfPage) {
            this.renderer.setAttribute(pageElement, 'data-page-number', `${this.id}`);
        }
        if (defaultViewport) {
            this.renderer.setStyle(pageElement, 'width', `${defaultViewport.width}px`);
            this.renderer.setStyle(pageElement, 'height', `${defaultViewport.height}px`);
        }
        return pageElement;
    }
    _getOrBuildTextLayer() {
        if (!this._textLayerContainer) {
            this._textLayerContainer = this._createTextLayer();
        }
        this.renderer.appendChild(this.container, this._textLayerContainer);
        return this._textLayerContainer;
    }
    _createTextLayer() {
        const { height, width } = this.viewport;
        const coercedHeight = Math.floor(height);
        const coercedWidth = Math.floor(width);
        const textLayer = this.renderer.createElement('div');
        this.renderer.addClass(textLayer, 'textLayer');
        this.renderer.setStyle(textLayer, 'position', 'absolute');
        this.renderer.setStyle(textLayer, 'height', `${coercedHeight}px`);
        this.renderer.setStyle(textLayer, 'width', `${coercedWidth}px`);
        this.renderer.setStyle(textLayer, 'top', `0`);
        this.renderer.setStyle(textLayer, 'left', `0`);
        this.renderer.setStyle(textLayer, 'right', `0`);
        this.renderer.setStyle(textLayer, 'bottom', `0`);
        this.renderer.setStyle(textLayer, 'opacity', `0.2`);
        this.renderer.setStyle(textLayer, 'line-height', '1');
        return textLayer;
    }
    _getOrBuildCanvas() {
        if (!this._canvasContainer) {
            this._canvasContainer = this._createCanvas();
        }
        this.renderer.appendChild(this.container, this._canvasContainer);
        return this._canvasContainer;
    }
    _createCanvas() {
        const { height, width } = this.viewport;
        const coercedHeight = Math.floor(height);
        const coercedWidth = Math.floor(width);
        const canvas = this.renderer.createElement('canvas');
        canvas.height = coercedHeight;
        canvas.width = coercedWidth;
        this.renderer.setAttribute(canvas, 'aria-label', `Page ${this.id}`);
        this.renderer.setStyle(canvas, 'height', `${coercedHeight}px`);
        this.renderer.setStyle(canvas, 'width', `${coercedWidth}px`);
        return canvas;
    }
    setPageLabel(label) {
        this._pageLabel = typeof label === 'string' ? label : null;
        if (this._pageLabel !== null) {
            this.container.setAttribute('data-page-label', this._pageLabel);
        }
        else {
            this.container.removeAttribute('data-page-label');
        }
    }
    getPagePoint(x, y) {
        return this.viewport.convertToPdfPoint(x, y);
    }
    get textLayer() {
        return this._textLayer;
    }
    get viewport() {
        return this._viewport;
    }
    get renderingState() {
        return this._renderingState;
    }
    get renderingId() {
        return 'page' + this.id;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["normalizePassiveListenerOptions"])({
    passive: true,
});
class PdfPageViewerRef extends PdfContainer {
    constructor(id, renderingQueue, linkService, findController, downloadManager, _config) {
        super(renderingQueue);
        this.id = id;
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.findController = findController;
        this.downloadManager = downloadManager;
        this._config = _config;
        this._currentScale = null;
        this._buffer = new PDFPageViewBuffer(this._config.maxPagesRendered);
        this._pageViewsReady = false;
        this._scrollMode = ScrollMode.VERTICAL;
        this._spreadMode = SpreadMode.NONE;
        this._renderType = RendererType.CANVAS;
        //Events
        this.pagesLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pageLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pageChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.scaleChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rotationChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateViewArea = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollUpdate = () => {
            if (this.pagesCount === 0) {
                return;
            }
            this.update();
        };
        /** Handler that is invoked when the user scrolls into the pdf container */
        this._scrollMove = () => {
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
        if (findController) {
            this.findController.pdfPageContainer = this;
        }
        this._currentScaleNumber = 1;
        this._currentScale = _config.scale;
        this._pagesRotation = _config.rotation;
        this._currentPageNumber = _config.initialPage;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
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
    setDocument(pdfDocument) {
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
        const pagesCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
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
                const pageRef = new PdfPageRef(this.container, pageNum, viewport.clone(), this.findController, this.linkService, this.downloadManager, this.renderingQueue, this.renderer);
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
                pdfDocument.getPage(pageNum).then((pdfPage) => {
                    this.pageLoaded.next({ pageIndex: pdfPage.pageNumber });
                    const pageView = this.items[pageNum - 1];
                    if (!pageView.pdfPage) {
                        pageView.setPdfPage(pdfPage);
                    }
                    if (--getPagesLeft === 0) {
                        pagesCapability.resolve();
                    }
                }, (reason) => {
                    console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
                    if (--getPagesLeft === 0) {
                        pagesCapability.resolve();
                    }
                });
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
    _setCurrentPageNumber(val, resetCurrentPageView = false) {
        if (this._currentPageNumber === val) {
            if (resetCurrentPageView) {
                this._resetCurrentPageView();
            }
            return true;
        }
        if (!(0 < val && val <= this.pagesCount)) {
            return false;
        }
        const oldPageNumber = this._currentPageNumber;
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
    get currentScaleNumber() {
        return this._currentScaleNumber;
    }
    /**
     * @param {number} val - Scale of the pages in percents.
     */
    set currentScaleNumber(val) {
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
        this._buffer.resize(newCacheSize, visiblePages.map((v) => v.view));
        this.renderingQueue.renderHighestPriority(visible);
        this._updateHelper(visiblePages);
        const oldLocation = this._location;
        this._updateLocation(visible.first);
        this.updateViewArea.next({
            oldLocation: oldLocation,
            actualLocation: this._location,
        });
    }
    _updateHelper(visiblePages) {
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
    updateMatches(pageIndex) {
        if (pageIndex === -1) {
            this.items.forEach((item) => item.updateMatches());
        }
        else {
            this.items[pageIndex].updateMatches();
        }
    }
    _resetView() {
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
    _resetCurrentPageView() {
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
    forceRendering(currentlyVisiblePages) {
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
        let scale = 0;
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
        }
        else if (this._currentScaleNumber === 0) {
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
    _updateLocation(firstPage) {
        const currentScale = this._currentScaleNumber;
        const currentScaleValue = this.currentScale;
        const normalizedScaleValue = parseFloat(currentScaleValue.toString()) === currentScale
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
    _scrollIntoView({ pageDiv, pageSpot = null, pageNumber = null }) {
        scrollIntoView(pageDiv, this.container, pageSpot);
    }
    _cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    _updateScrollMode(pageNumber = null) {
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
    _setScale(value, noScroll = false) {
        let scale = parseFloat(`${value}`);
        if (scale > 0) {
            this._setScaleUpdatePages(scale, value, noScroll);
        }
        else {
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
    _setScaleUpdatePages(newScaleNumber, newScale, noScroll = false) {
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
            let page = this._currentPageNumber, dest;
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
    _isSameScale(oldScale, newScale) {
        if (newScale === oldScale) {
            return true;
        }
        return Math.abs(newScale - oldScale) < 1e-15;
    }
    _getVisiblePages() {
        return getVisibleElements(this.container, this.items, true, this._isScrollModeHorizontal);
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('scroll', this._scrollMove, passiveEventListenerOptions);
    }
    get pagesCount() {
        return this.items.length;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
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
    get renderType() {
        return this._renderType;
    }
}

class PdfThumbnailRef extends PdfContainerItem {
    constructor(thumbnailContainer, id, defaultViewport, linkService, renderingQueue, renderer) {
        super(id, defaultViewport, renderingQueue, renderer);
        this.thumbnailContainer = thumbnailContainer;
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.linkService = linkService;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this._container = this.createItemContainer();
        const anchor = this.getOrCreateAnchorContainer();
        anchor.appendChild(this.container);
        this.thumbnailContainer.appendChild(anchor);
    }
    setPdfPage(pdfPage) {
        this._pdfPage = pdfPage;
        this.pdfPageRotate = pdfPage.rotate;
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = pdfPage.getViewport({ scale: 1, rotation: totalRotation });
        this.reset();
    }
    reset() {
        this.cancelRendering();
        this._renderingState = RenderingStates.INITIAL;
        if (this.container) {
            this._updateItemContainer();
        }
        this._thumbnailAnchor.removeAttribute('data-loaded');
        const childNodes = this.container.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
            this.container.removeChild(childNodes[i]);
        }
        if (this.canvas) {
            // Zeroing the width and height causes Firefox to release graphics
            // resources immediately, which can greatly reduce memory consumption.
            this.canvas.width = 0;
            this.canvas.height = 0;
            delete this.canvas;
        }
        if (this._thumbnailImage) {
            this._thumbnailImage.removeAttribute('src');
            delete this._thumbnailImage;
        }
    }
    update(rotation) {
        if (typeof rotation !== 'undefined') {
            this.rotation = rotation;
        }
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = this._viewport.clone({
            scale: 1,
            rotation: totalRotation,
        });
        this.reset();
    }
    draw() {
        if (this._renderingState !== RenderingStates.INITIAL) {
            console.error('Must be in new state before drawing');
            return Promise.resolve(undefined);
        }
        this._renderingState = RenderingStates.RUNNING;
        const renderCapability = Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"])();
        const finishRenderTask = (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__awaiter"])(this, void 0, void 0, function* () {
            // The renderTask may have been replaced by a new one, so only remove
            // the reference to the renderTask if it matches the one that is
            // triggering this callback.
            if (renderTask === this._renderTask) {
                this._renderTask = null;
            }
            if (error instanceof pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["RenderingCancelledException"]) {
                console.error(error);
                renderCapability.resolve(undefined);
                return;
            }
            this._renderingState = RenderingStates.FINISHED;
            this._convertCanvasToImage();
            if (!error) {
                renderCapability.resolve(undefined);
            }
            else {
                renderCapability.reject(error);
            }
        });
        const ctx = this._getPageDrawContext();
        const drawViewport = this.viewport.clone({
            scale: this.canvasWidth / this.width,
        });
        const renderContinueCallback = (cont) => {
            if (!this.renderingQueue.isHighestPriority(this)) {
                this._renderingState = RenderingStates.PAUSED;
                this.resume = () => {
                    this._renderingState = RenderingStates.RUNNING;
                    cont();
                };
                return;
            }
            cont();
        };
        const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
        };
        this._renderTask = this._pdfPage.render(renderContext);
        const renderTask = this._renderTask;
        renderTask.onContinue = renderContinueCallback;
        renderTask.promise.then(() => finishRenderTask(null), (error) => finishRenderTask(error));
        return renderCapability.promise;
    }
    getOrCreateAnchorContainer() {
        if (!this._thumbnailAnchor) {
            this._thumbnailAnchor = this.createThumbnailAnchor();
        }
        return this._thumbnailAnchor;
    }
    createThumbnailAnchor() {
        const thumbnailAnchor = this.renderer.createElement('a');
        this.renderer.setProperty(thumbnailAnchor, 'href', this.linkService.getAnchorUrl('#page' + this.id));
        this.renderer.setProperty(thumbnailAnchor, 'title', this._thumbPageTitle);
        this.renderer.listen(thumbnailAnchor, 'click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.linkService.page = this.id;
            return false;
        });
        if (this._pdfPage) {
            this.renderer.setAttribute(thumbnailAnchor, 'data-page-number', `${this.id}`);
        }
        return thumbnailAnchor;
    }
    createItemContainer() {
        const thumbnail = this.renderer.createElement('div');
        this.renderer.addClass(thumbnail, 'pdf-thumbnail');
        this.renderer.setStyle(thumbnail, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(thumbnail, 'height', `${this.canvasHeight}px`);
        return thumbnail;
    }
    _updateItemContainer() {
        this.renderer.setStyle(this.container, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(this.container, 'height', `${this.canvasHeight}px`);
        return this.container;
    }
    _getOrBuildImgThumbnail() {
        if (!this._thumbnailImage) {
            this._thumbnailImage = this._createImgThumbnail();
        }
        this.renderer.setAttribute(this.container, 'data-loaded', `${true}`);
        this.renderer.appendChild(this.container, this._thumbnailImage);
        return this._thumbnailImage;
    }
    _createImgThumbnail() {
        const image = this.renderer.createElement('img');
        this.renderer.addClass(image, 'thumbnailImage');
        this.renderer.setAttribute(image, 'aria-label', `Page ${this.id}`);
        this.renderer.setStyle(image, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(image, 'height', `${this.canvasHeight}px`);
        this.renderer.setProperty(image, 'src', this.canvas.toDataURL());
        return image;
    }
    _getPageDrawContext(noCtxScale = false) {
        if (this.canvas) {
            return;
        }
        const canvas = this.renderer.createElement('canvas');
        // Keep the no-thumbnail outline visible, i.e. `data-loaded === false`,
        // until rendering/image conversion is complete, to avoid display issues.
        this.canvas = canvas;
        const ctx = canvas.getContext('2d', { alpha: false });
        const outputScale = getOutputScale(ctx);
        canvas.width = this.canvasWidth * outputScale.sx || 0;
        canvas.height = this.canvasHeight * outputScale.sy || 0;
        canvas.style.width = this.canvasWidth + 'px';
        canvas.style.height = this.canvasHeight + 'px';
        if (!noCtxScale && outputScale.scaled) {
            ctx.scale(outputScale.sx, outputScale.sy);
        }
        return ctx;
    }
    _convertCanvasToImage() {
        this._getPageDrawContext();
        if (this._renderingState !== RenderingStates.FINISHED) {
            return;
        }
        this.container.appendChild(this._getOrBuildImgThumbnail());
        this._thumbnailAnchor.setAttribute('data-loaded', `${true}`);
        // Zeroing the width and height causes Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
    }
    /**
     * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
     *              rather than calling this one directly.
     */
    cancelRendering() {
        if (this._renderTask) {
            this._renderTask.cancel();
            this._renderTask = null;
        }
        this.resume = null;
    }
    /**
     * @param {string|null} label
     */
    setPageLabel(label) {
        this._pageLabel = typeof label === 'string' ? label : null;
        this.renderer.setProperty(this.container, 'title', this._thumbPageTitle);
        if (this._renderingState !== RenderingStates.FINISHED) {
            return;
        }
        const pageTitle = this._thumbPageTitle;
        if (this._thumbnailImage) {
            this._thumbnailImage.setAttribute('aria-label', `${pageTitle}`);
        }
    }
    get _thumbPageTitle() {
        return this._pageLabel ? this._pageLabel : this.id;
    }
    get viewport() {
        return this._viewport;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
    get canvasWidth() {
        return 98;
    }
    get canvasHeight() {
        return 98 / (this.width / this.height) || 0;
    }
    get container() {
        return this._container;
    }
    get renderingId() {
        return `thumbnail-${this.id}`;
    }
}

/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions$1 = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["normalizePassiveListenerOptions"])({
    passive: true,
});
class PdfThumbnailViewerRef extends PdfContainer {
    constructor(id, linkService, renderingQueue) {
        super(renderingQueue);
        this.id = id;
        this.linkService = linkService;
        this.renderingQueue = renderingQueue;
        this._scrollUpdate = () => {
            if (!this.items || this.items.length === 0) {
                return;
            }
            this.update();
        };
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        this.renderer.setStyle(element, 'display', 'block');
        if (element !== this.container) {
            if (this.container) {
                this._removeRootElementListeners(this.container);
            }
            this.container = element;
            this.renderingQueue.setThumbnailViewer(this);
            this.scroll = watchScroll(this.container, this._scrollUpdate);
            this._resetView();
        }
        return this;
    }
    dispose() {
        this.items.forEach((i) => i.reset());
        this.setDocument(null);
        this.renderingQueue.setThumbnailViewer(null);
    }
    setDocument(pdfDocument) {
        if (this.pdfDocument) {
            this._cancelRendering();
            this._resetView();
        }
        this.pdfDocument = pdfDocument;
        if (!pdfDocument) {
            return;
        }
        pdfDocument
            .getPage(1)
            .then((firstPdfPage) => {
            const pagesCount = pdfDocument.numPages;
            const viewport = firstPdfPage.getViewport({ scale: 1 });
            for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
                const thumbnail = new PdfThumbnailRef(this.container, pageNum, viewport.clone(), this.linkService, this.renderingQueue, this.renderer);
                this.items.push(thumbnail);
            }
            // Set the first `pdfPage` immediately, since it's already loaded,
            // rather than having to repeat the `PDFDocumentProxy.getPage` call in
            // the `this._ensurePdfPageLoaded` method before rendering can start.
            const firstThumbnailView = this.items[0];
            if (firstThumbnailView) {
                firstThumbnailView.setPdfPage(firstPdfPage);
            }
            // Ensure that the current thumbnail is always highlighted on load.
            const thumbnailView = this.items[this._currentPageNumber - 1];
            thumbnailView.container.classList.add('selected');
        })
            .catch((reason) => {
            console.error('Unable to initialize thumbnail viewer', reason);
        });
    }
    scrollThumbnailIntoView(pageNumber) {
        if (!this.pdfDocument) {
            return;
        }
        const thumbnailView = this.items[pageNumber - 1];
        if (!thumbnailView) {
            console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.');
            return;
        }
        if (pageNumber !== this._currentPageNumber) {
            const prevThumbnailView = this.items[this._currentPageNumber - 1];
            // Remove the highlight from the previous thumbnail...
            prevThumbnailView.container.classList.remove('selected');
            // ... and add the highlight to the new thumbnail.
            thumbnailView.container.classList.add('selected');
        }
        const visibleThumbs = this._getVisibleThumbs();
        const numVisibleThumbs = visibleThumbs.views.length;
        // If the thumbnail isn't currently visible, scroll it into view.
        if (numVisibleThumbs > 0) {
            const first = visibleThumbs.first.id;
            // Account for only one thumbnail being visible.
            const last = numVisibleThumbs > 1 ? visibleThumbs.last.id : first;
            let shouldScroll = false;
            if (pageNumber <= first || pageNumber >= last) {
                shouldScroll = true;
            }
            else {
                visibleThumbs.views.some((view) => {
                    if (view.id !== pageNumber) {
                        return false;
                    }
                    shouldScroll = view.percent < 100;
                    return true;
                });
            }
            if (shouldScroll) {
                scrollIntoView(thumbnailView.container, this.container, { top: -19 });
            }
        }
        this._currentPageNumber = pageNumber;
    }
    update() {
        this.renderingQueue.renderHighestPriority();
    }
    _getVisibleThumbs() {
        return getVisibleElements(this.container, this.items);
    }
    _cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    get pagesRotation() {
        return this._pagesRotation;
    }
    set pagesRotation(rotation) {
        if (!isValidRotation(rotation)) {
            throw new Error('Invalid thumbnails rotation angle.');
        }
        if (!this.pdfDocument) {
            return;
        }
        if (this._pagesRotation === rotation) {
            return; // The rotation didn't change.
        }
        this._pagesRotation = rotation;
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].update(rotation);
        }
    }
    /**
     * @param {Array|null} labels
     */
    setPageLabels(labels) {
        if (!this.pdfDocument) {
            return;
        }
        if (!labels) {
            this._pageLabels = null;
        }
        else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null;
            console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
        }
        else {
            this._pageLabels = labels;
        }
        // Update all the `PDFThumbnailView` instances.
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            const label = this._pageLabels && this._pageLabels[i];
            this.items[i].setPageLabel(label);
        }
    }
    forceRendering() {
        const visibleThumbs = this._getVisibleThumbs();
        const thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this.items, this.scroll.down);
        if (thumbView) {
            this._ensurePdfPageLoaded(thumbView).then(() => this.renderingQueue.renderView(thumbView));
            return true;
        }
        return false;
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('scroll', this._scrollUpdate, passiveEventListenerOptions$1);
    }
}

const DEFAULT_PDF_VIEW_CONFIG = {
    initialPage: 1,
    scale: 'auto',
    rotation: 0,
    searchOptions: {
        phraseSearch: true,
        caseSensitive: false,
        entireWord: false,
        highlightAll: true,
    },
    printDPI: PrintDPI.HIGH,
    maxPagesRendered: 10,
    rendererPagesThreshold: 2,
};
function MNJ_PDF_VIEW_CONFIGURATION_FACTORY(impl) {
    return impl || DEFAULT_PDF_VIEW_CONFIG;
}
/**
 * Injection token that can be used to configure the
 * behavior of the pdf viewer components.
 */
const MNJ_PDF_VIEW_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PDF_VIEW_CONFIG');
const MNJ_PDF_VIEW_CONFIGURATION_PROVIDER = {
    provide: MNJ_PDF_VIEW_CONFIGURATION,
    useFactory: MNJ_PDF_VIEW_CONFIGURATION_FACTORY,
};

class PdfViewerRef {
    constructor(renderingQueue, linkService, downloadManager, printManager, findController) {
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.printManager = printManager;
        this.findController = findController;
        // Events
        /** Emits when pdf has been loaded */
        this.pdfLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** Emits when pdf properties has been retrieved */
        this.pdfPropertiesLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /** Emits when pdfjs is rendering the printable version */
        this.pdfPrintProgress = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.findController.linkService = this.linkService;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value < 0 && value > this.pdfDocument.numPages) {
            throw new Error(`Page ${value} doesn't exist in the current pf document`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.currentPageNumber = value;
        }
        this._currentPage = value;
    }
    get currentScale() {
        return this._currentScale;
    }
    set currentScale(value) {
        if (value < MIN_SCALE || value > MAX_SCALE) {
            throw new Error(`Scale must be a value between ${MIN_SCALE} and ${MAX_SCALE}`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.currentScale = value;
        }
        this._currentScale = value;
    }
    get currentRotation() {
        return this._currentRotation;
    }
    set currentRotation(value) {
        if (!isValidRotation(value)) {
            throw new Error(`${value} is not a valid rotation value must be one of 0, 90, 180, 270`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.pagesRotation = value;
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.pagesRotation = value;
        }
        this._currentRotation = value;
    }
    get currentSearchQuery() {
        return this._currentSearchQuery || '';
    }
    set currentSearchQuery(value) {
        this._currentSearchQuery = value;
        this.search();
    }
    get currentSearchOptions() {
        return this._currentSearchOptions;
    }
    set currentSearchOptions(value) {
        this._currentSearchOptions = value;
        this.search();
    }
    zoomIn(ticks) {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        let newScale = this.pdfPageViewer.currentScaleNumber;
        do {
            // @ts-ignore
            newScale = (newScale * DEFAULT_SCALE_DELTA).toFixed(2);
            newScale = Math.ceil(newScale * 10) / 10;
            newScale = Math.min(MAX_SCALE, newScale);
        } while (--ticks > 0 && newScale < MAX_SCALE);
        this.pdfPageViewer.currentScale = newScale;
    }
    zoomOut(ticks) {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        let newScale = this.pdfPageViewer.currentScaleNumber;
        do {
            // @ts-ignore
            newScale = (newScale / DEFAULT_SCALE_DELTA).toFixed(2);
            newScale = Math.floor(newScale * 10) / 10;
            newScale = Math.max(MIN_SCALE, newScale);
        } while (--ticks > 0 && newScale > MIN_SCALE);
        this.pdfPageViewer.currentScale = newScale;
    }
    zoomReset() {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        this.pdfPageViewer.currentScale = DEFAULT_SCALE_VALUE;
    }
    downloadPdf(pdfSrc) {
        const fileName = this.pdfProperties.fileName || getPDFFileNameFromURL(pdfSrc);
        if (!this.pdfDocument) {
            if (!pdfSrc) {
                throw new Error(`There is no pdf loaded`);
            }
            this.downloadManager.downloadUrl(pdfSrc, fileName);
        }
        this.pdfDocument
            .getData()
            .then((data) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            this.downloadManager.download(blob, pdfSrc, fileName);
        })
            .catch((err) => {
            console.log(err);
            this.downloadManager.downloadUrl(pdfSrc, fileName);
        }); // Error occurred, try downloading with the URL.
    }
    printPdf(printDPI) {
        if (!this.pdfDocument) {
            throw new Error('There is no pdf to print');
        }
        if (!this.pdfPageViewer.pageViewsReady) {
            throw new Error('Print is not ready, pdf loading');
        }
        const pagesOverview = this.pdfPageViewer.getPagesOverview();
        this.printManager.print(this, this.pdfDocument, pagesOverview, printDPI);
    }
    search() {
        this.findController.executeCommand('find', Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions));
    }
    findNext() {
        this.findController.executeCommand('findagain', Object.assign(Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions), { findPrevious: false }));
    }
    findPrevious() {
        this.findController.executeCommand('findagain', Object.assign(Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions), { findPrevious: true }));
    }
    getDocumentProperties() {
        return Promise.all([
            this.pdfDocument.getDownloadInfo(),
            this.pdfDocument.getMetadata(),
            this.pdfDocument.getPage(1),
        ]).then(([size, data, page]) => {
            const { info, contentDispositionFilename } = data;
            const docProperties = {
                fileName: contentDispositionFilename || getPDFFileNameFromURL(this._pdfSrc || ''),
                fileSize: size.length,
                title: info.Title,
                author: info.Author,
                subject: info.Subject,
                keywords: info.Keywords,
                creationDate: pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["PDFDateString"].toDateObject(info.CreationDate),
                updateDate: pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["PDFDateString"].toDateObject(info.ModDate),
                creator: info.Creator,
                pdfProducer: info.Producer,
                pdfVersion: info.PDFFormatVersion,
                pageCount: this.pdfDocument.numPages,
                pageSize: getPageSizeMilliliters(page),
            };
            this.pdfProperties = docProperties;
            return docProperties;
        });
    }
    cleanUp() {
        if (this.pdfPageViewer) {
            this.pdfPageViewer.cleanup();
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.cleanup();
        }
        // We don't want to remove fonts used by active page SVGs.
        if (this.pdfPageViewer.renderType !== RendererType.SVG) {
            this.pdfDocument.cleanup();
        }
    }
    dispose() {
        if (!this.pdfDocument) {
            return; // run cleanup when document is loaded
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.dispose();
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.dispose();
        }
        // We don't want to remove fonts used by active page SVGs.
        if (this.pdfPageViewer.renderType !== RendererType.SVG) {
            this.pdfDocument.cleanup();
        }
    }
    syncPageAndThumbnail(pageIndex) {
        this._currentPage = pageIndex;
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.scrollThumbnailIntoView(pageIndex);
        }
    }
    get pdfSrc() {
        return this._pdfSrc;
    }
    set pdfSrc(value) {
        if (this._pdfSrc) {
            this.cleanUp();
        }
        if (value) {
            this._pdfSrc = value;
            Object(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["getDocument"])(value)
                .promise.then((pdfDocument) => {
                this.pdfDocument = pdfDocument;
                this.pdfLoaded.next({ pdf: pdfDocument });
            })
                .then(() => {
                this.getDocumentProperties().then((pdfProperties) => this.pdfPropertiesLoaded.next({ properties: pdfProperties }));
            });
        }
    }
    get pdfDocument() {
        return this._pdfDocument;
    }
    set pdfDocument(value) {
        this._pdfDocument = value;
        this.getDocumentProperties();
        this.linkService.setDocument(this.pdfDocument);
        if (this._pdfPageViewer) {
            this._pdfPageViewer.setDocument(this.pdfDocument);
        }
        if (this._pdfThumbnailViewer) {
            this._pdfThumbnailViewer.setDocument(this.pdfDocument);
        }
        if (this.pdfOutlineViewer) {
            this.pdfOutlineViewer.setDocument(this.pdfDocument);
        }
        if (this.pdfAttachmentViewer) {
            this.pdfAttachmentViewer.setDocument(this.pdfDocument);
        }
    }
    get pdfPageViewer() {
        return this._pdfPageViewer;
    }
    set pdfPageViewer(value) {
        this._pdfPageViewer = value;
        if (this.pdfDocument) {
            this.pdfPageViewer.setDocument(this.pdfDocument);
        }
    }
    get pdfThumbnailViewer() {
        return this._pdfThumbnailViewer;
    }
    set pdfThumbnailViewer(value) {
        this._pdfThumbnailViewer = value;
        if (this.pdfDocument) {
            this.pdfThumbnailViewer.setDocument(this.pdfDocument);
        }
    }
}

function registerWorker() {
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["GlobalWorkerOptions"].workerSrc = pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_6__;
}
function unRegisterWorker() {
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["GlobalWorkerOptions"].workerSrc = null;
}
class PdfViewerRegistry {
    constructor() {
        this._pdfViewerRefInstances = {};
    }
    registerPdfViewer(viewerId, pdfViewerRef) {
        if (Object.keys(this._pdfViewerRefInstances).length === 0) {
            registerWorker();
        }
        this._pdfViewerRefInstances[viewerId] = pdfViewerRef;
    }
    removePdfViewer(viewerId) {
        this._pdfViewerRefInstances[viewerId] = null;
        if (Object.keys(this._pdfViewerRefInstances).length) {
            unRegisterWorker();
        }
    }
    getReference(viewerId) {
        const viewerRef = this._pdfViewerRefInstances[viewerId];
        if (!viewerRef) {
            throw new Error(`Viewer ${viewerId} does not exist on the page`);
        }
        return viewerRef;
    }
    ngOnDestroy() {
        Object.keys(this._pdfViewerRefInstances).forEach((instance) => this.removePdfViewer(instance));
    }
}
PdfViewerRegistry.ɵfac = function PdfViewerRegistry_Factory(t) { return new (t || PdfViewerRegistry)(); };
PdfViewerRegistry.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ token: PdfViewerRegistry, factory: PdfViewerRegistry.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(PdfViewerRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

let nextUniqueId = 0;
class MnjPdfViewer {
    constructor(renderingQueue, linkService, findController, downloadManager, printManager, registry, _changeDetectorRef, _config) {
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.findController = findController;
        this.downloadManager = downloadManager;
        this.printManager = printManager;
        this.registry = registry;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        // Pdf Viewer Events
        this.pdfLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pdfProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pdfSearchProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pdfSearchComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pdfPrintProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Page Viewer Events
        this.pageViewerPagesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageViewerPageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageViewerPageChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageViewerScaleChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageViewerRotationChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.pageViewerUpdateViewArea = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Outline Viewer Events
        this.outlineViewerLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Attachment Viewer Events
        this.attachmentViewerLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.id = `mnj-pdf-viewer-${nextUniqueId++}`;
        this._pdfRef = new PdfViewerRef(this.renderingQueue, this.linkService, this.downloadManager, this.printManager, this.findController);
        this.registry.registerPdfViewer(this.id, this._pdfRef);
        this._handleEvents(this._pdfRef);
    }
    get pdfSrc() {
        return this._pdfRef.pdfSrc;
    }
    set pdfSrc(value) {
        this._pdfRef.pdfSrc = value;
    }
    get page() {
        return this._pdfRef.currentPage;
    }
    set page(value) {
        this._pdfRef.currentPage = value;
    }
    get scale() {
        return this._pdfRef.currentScale;
    }
    set scale(value) {
        this._pdfRef.currentScale = value;
    }
    get rotation() {
        return this._pdfRef.currentRotation;
    }
    set rotation(value) {
        this._pdfRef.currentRotation = value;
    }
    get searchOptions() {
        return this._pdfRef.currentSearchOptions;
    }
    set searchOptions(searchOptions) {
        this._pdfRef.currentSearchOptions = searchOptions;
    }
    /** Whether pdf viewer is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        //this._pdfRef.disabled = this._disabled;
    }
    ngOnDestroy() {
        this._pdfRef.dispose();
        this.registry.removePdfViewer(this.id);
    }
    // TODO: Move all this methods to a registry to manage subscriptions and unSubscriptions globally
    registerPageViewer() {
        const pdfPageViewerRef = new PdfPageViewerRef(this.id, this.renderingQueue, this.linkService, this.findController, this.downloadManager, this._config);
        this._pdfRef.pdfPageViewer = pdfPageViewerRef;
        this._handlePageViewerEvents(pdfPageViewerRef);
        return pdfPageViewerRef;
    }
    registerThumbnailViewer() {
        const pdfThumbnailViewerRef = new PdfThumbnailViewerRef(this.id, this.linkService, this.renderingQueue);
        this._pdfRef.pdfThumbnailViewer = pdfThumbnailViewerRef;
        return pdfThumbnailViewerRef;
    }
    registerAttachmentViewer() {
        const pdfAttachmentViewerRef = new PdfAttachmentViewerRef(this.downloadManager);
        this._pdfRef.pdfAttachmentViewer = pdfAttachmentViewerRef;
        this._handleAttachmentViewerEvents(pdfAttachmentViewerRef);
        return pdfAttachmentViewerRef;
    }
    registerOutlineViewer() {
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
    search(phrase) {
        this._pdfRef.currentSearchQuery = phrase;
    }
    findNext() {
        this._pdfRef.findNext();
    }
    findPrevious() {
        this._pdfRef.findPrevious();
    }
    /** Handles the events from the underlying `PdfViewerRef`. */
    _handleEvents(ref) {
        ref.pdfLoaded.subscribe((event) => {
            this.pdfLoaded.emit(Object.assign({ source: this }, event));
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.pdfPropertiesLoaded.subscribe((event) => {
            this.pdfProperties.emit(Object.assign({ source: this }, event));
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.pdfPrintProgress.subscribe((event) => {
            this.pdfPrintProgress.emit(Object.assign({ source: this }, event));
        });
        this.findController.searchState.subscribe((event) => {
            this.pdfSearchProgress.emit(Object.assign({ source: this }, event));
        });
        this.findController.searchComplete.subscribe((event) => {
            this.pdfSearchComplete.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfPageViewerRef`. */
    _handlePageViewerEvents(pageViewerRef) {
        pageViewerRef.pagesLoaded.subscribe((event) => {
            this.pageViewerPagesLoaded.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.pageLoaded.subscribe((event) => {
            this.pageViewerPageLoaded.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.pageChanging.subscribe((event) => {
            this._pdfRef.syncPageAndThumbnail(event.actualPageIndex);
            this.pageViewerPageChanging.emit(Object.assign({ source: this }, event));
            this._changeDetectorRef.detectChanges();
        });
        pageViewerRef.scaleChanging.subscribe((event) => {
            this.pageViewerScaleChanging.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.rotationChanging.subscribe((event) => {
            this.pageViewerRotationChanging.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.updateViewArea.subscribe((event) => {
            this.pageViewerUpdateViewArea.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfOutlineViewerRef`. */
    _handleOutlineViewerEvents(outlineViewerRef) {
        outlineViewerRef.outlineLoaded.subscribe((event) => {
            this.outlineViewerLoaded.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfAttachmentViewerRef`. */
    _handleAttachmentViewerEvents(attachmentViewerRef) {
        attachmentViewerRef.attachmentsLoaded.subscribe((event) => {
            this.attachmentViewerLoaded.emit(Object.assign({ source: this }, event));
        });
    }
}
MnjPdfViewer.ɵfac = function MnjPdfViewer_Factory(t) { return new (t || MnjPdfViewer)(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfRenderingQueue), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfLinkService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfFindController), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfDownloadManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfPrintManager), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(PdfViewerRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"])(MNJ_PDF_VIEW_CONFIGURATION)); };
MnjPdfViewer.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"])({ type: MnjPdfViewer, selectors: [["mnj-pdf-viewer"]], hostAttrs: [1, "mnj-pdf-viewer", "cdk-visually-hidden"], hostVars: 2, hostBindings: function MnjPdfViewer_HostBindings(rf, ctx) { if (rf & 2) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"])("id", ctx.id)("disabled", ctx.disabled);
    } }, inputs: { pdfSrc: "pdfSrc", page: "page", scale: "scale", rotation: "rotation", searchOptions: "searchOptions", disabled: ["pdfViewerDisabled", "disabled"] }, outputs: { pdfLoaded: "pdfLoaded", pdfProperties: "pdfProperties", pdfSearchProgress: "pdfSearchProgress", pdfSearchComplete: "pdfSearchComplete", pdfPrintProgress: "pdfPrintProgress", pageViewerPagesLoaded: "pageViewerPagesLoaded", pageViewerPageLoaded: "pageViewerPageLoaded", pageViewerPageChanging: "pageViewerPageChanging", pageViewerScaleChanging: "pageViewerScaleChanging", pageViewerRotationChanging: "pageViewerRotationChanging", pageViewerUpdateViewArea: "pageViewerUpdateViewArea", outlineViewerLoaded: "outlineViewerLoaded", attachmentViewerLoaded: "attachmentViewerLoaded" }, exportAs: ["mnjPdfViewer"], features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"])([PdfRenderingQueue, PdfDownloadManager, PdfFindController, PdfLinkService, PdfPrintManager])], decls: 0, vars: 0, template: function MnjPdfViewer_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MnjPdfViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-viewer',
                template: '',
                exportAs: 'mnjPdfViewer',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                providers: [PdfRenderingQueue, PdfDownloadManager, PdfFindController, PdfLinkService, PdfPrintManager],
                host: {
                    class: 'mnj-pdf-viewer cdk-visually-hidden',
                    '[attr.id]': 'id',
                    '[attr.disabled]': 'disabled',
                },
            }]
    }], function () { return [{ type: PdfRenderingQueue }, { type: PdfLinkService }, { type: PdfFindController }, { type: PdfDownloadManager }, { type: PdfPrintManager }, { type: PdfViewerRegistry }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MNJ_PDF_VIEW_CONFIGURATION]
            }] }]; }, { pdfSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], searchOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['pdfViewerDisabled']
        }], pdfLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pdfProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pdfSearchProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pdfSearchComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pdfPrintProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerPagesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerPageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerPageChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerScaleChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerRotationChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pageViewerUpdateViewArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], outlineViewerLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], attachmentViewerLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();

class MnjPdfViewerModule {
}
MnjPdfViewerModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"])({ type: MnjPdfViewerModule });
MnjPdfViewerModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"])({ factory: function MnjPdfViewerModule_Factory(t) { return new (t || MnjPdfViewerModule)(); }, providers: [MNJ_PDF_VIEW_CONFIGURATION_PROVIDER], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"])(MnjPdfViewerModule, { declarations: [MnjPdfViewer,
        PdfPageLoading,
        PdfDownloadButton,
        PdfPrintButton,
        PdfThumbnailViewer,
        PdfPageViewer,
        PdfSearchInput,
        PdfAttachmentsViewer,
        PdfTocViewer,
        PdfUploadButton,
        PdfPropertiesButton], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]], exports: [MnjPdfViewer,
        PdfPageLoading,
        PdfDownloadButton,
        PdfPrintButton,
        PdfThumbnailViewer,
        PdfPageViewer,
        PdfSearchInput,
        PdfAttachmentsViewer,
        PdfTocViewer,
        PdfUploadButton,
        PdfPropertiesButton] }); })();
/*@__PURE__*/ (function () { Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"])(MnjPdfViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["ScrollingModule"]],
                declarations: [
                    MnjPdfViewer,
                    PdfPageLoading,
                    PdfDownloadButton,
                    PdfPrintButton,
                    PdfThumbnailViewer,
                    PdfPageViewer,
                    PdfSearchInput,
                    PdfAttachmentsViewer,
                    PdfTocViewer,
                    PdfUploadButton,
                    PdfPropertiesButton,
                ],
                providers: [MNJ_PDF_VIEW_CONFIGURATION_PROVIDER],
                exports: [
                    MnjPdfViewer,
                    PdfPageLoading,
                    PdfDownloadButton,
                    PdfPrintButton,
                    PdfThumbnailViewer,
                    PdfPageViewer,
                    PdfSearchInput,
                    PdfAttachmentsViewer,
                    PdfTocViewer,
                    PdfUploadButton,
                    PdfPropertiesButton,
                ],
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=mnj-ngx-pdfviewer.js.map


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer.ts":
/*!*************************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer.ts ***!
  \*************************************************************************/
/*! exports provided: PdfAttachmentsViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentsViewer", function() { return PdfAttachmentsViewer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfAttachmentsViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.attachmentViewerRef) {
                this.attachmentViewerRef.dispose();
                this.attachmentViewerRef = null;
            }
            this._pdfViewer = value;
            this.attachmentViewerRef = this._pdfViewer.registerAttachmentViewer();
        }
    }
    ngAfterViewInit() {
        this.attachmentViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfAttachmentsViewer.ɵfac = function PdfAttachmentsViewer_Factory(t) { return new (t || PdfAttachmentsViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfAttachmentsViewer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfAttachmentsViewer, selectors: [["mnj-pdf-attachments-viewer"], ["", "mnjPdfAttachmentsViewer", ""]], hostAttrs: [1, "mnj-attachments-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfAttachmentsViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page {\n  margin: 10px auto;\n}\n.mnj-page-viewer .pdf-page > .textLayer > span {\n  color: transparent;\n  cursor: text;\n  position: absolute;\n  transform-origin: 0 0;\n  white-space: pre;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper {\n  position: absolute;\n  width: 10em;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup {\n  border-radius: 2px;\n  cursor: pointer;\n  margin-left: 5px;\n  max-width: 20em;\n  padding: 6px;\n  position: absolute;\n  word-wrap: break-word;\n  z-index: 200;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup > * {\n  font-size: 9px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup h1,\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup span {\n  display: inline-block;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup p {\n  border-top: 1px solid currentColor;\n  margin-top: 2px;\n  padding-top: 2px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer > section {\n  position: absolute;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .linkAnnotation > a,\n.mnj-page-viewer .pdf-page > .annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  font-size: 1em;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.mnj-thumbnail-viewer .pdf-thumbnail {\n  margin: 10px auto;\n}\n.mnj-toc-viewer .outlineWithDeepNesting > .outlineItem {\n  margin: 0 10px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler {\n  float: left;\n  height: 0;\n  position: relative;\n  width: 0;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before {\n  content: \"\";\n  display: inline-block;\n  height: 15px;\n  position: absolute;\n  width: 15px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden ~ .outlineItems {\n  display: none;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > a {\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 13px;\n  height: auto;\n  line-height: 15px;\n  margin-bottom: 1px;\n  margin-left: 15px;\n  min-width: calc(100% - 15px);\n  padding: 2px 0 5px 4px;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: normal;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > .outlineItems {\n  margin-left: 20px;\n}\n.mnj-attachments-viewer .attachmentsItem > button {\n  border: 1px solid currentColor;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0 15px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUFI7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVBWO0FBU1U7RUFDRSxjQUFBO0FBUFo7QUFVVTs7RUFFRSxxQkFBQTtBQVJaO0FBV1U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaO0FBY007RUFDRSxrQkFBQTtBQVpSO0FBZU07O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWJSO0FBcUJFO0VBQ0UsaUJBQUE7QUFsQko7QUEyQkk7RUFDRSxjQUFBO0FBeEJOO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6Qk47QUEyQk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQWhCVztFQWlCWCxrQkFBQTtFQUNBLFdBbEJXO0FBUG5CO0FBNEJNO0VBQ0UsYUFBQTtBQTFCUjtBQStCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQWhDVztFQWlDWCxrQkFBQTtFQUNBLGlCQWxDVztFQW1DWCw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsaUJBQUE7QUE5QlI7QUF1Q0k7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBcENOIiwiZmlsZSI6InByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQQUdFU1xuLm1uai1wYWdlLXZpZXdlciB7XG4gIC5wZGYtcGFnZSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgICAvLyBURVhUIExBWUVSXG4gICAgPiAudGV4dExheWVyIHtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBTk5PVEFUSU9OU1xuICAgID4gLmFubm90YXRpb25MYXllciB7XG4gICAgICAucG9wdXBXcmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBlbTtcblxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuXG4gICAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgLmxpbmtBbm5vdGF0aW9uID4gYSxcbiAgICAgIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUSFVNQk5BSUxcbi5tbmotdGh1bWJuYWlsLXZpZXdlciB7XG4gIC5wZGYtdGh1bWJuYWlsIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG4vLyBUT0Ncbi5tbmotdG9jLXZpZXdlciB7XG4gICR0b2MtYXJyb3ctc2l6ZTogMTVweDtcblxuICAub3V0bGluZVdpdGhEZWVwTmVzdGluZyB7XG4gICAgJiA+IC5vdXRsaW5lSXRlbSB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW1Ub2dnbGVyIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6ICR0b2MtYXJyb3ctc2l6ZTtcbiAgICAgIH1cblxuICAgICAgJi5vdXRsaW5lSXRlbXNIaWRkZW4gfiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW0ge1xuICAgICAgPiBhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogJHRvYy1hcnJvdy1zaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gI3skdG9jLWFycm93LXNpemV9KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgPiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFUVEFDSE1FTlRTXG4ubW5qLWF0dGFjaG1lbnRzLXZpZXdlciB7XG4gIC5hdHRhY2htZW50c0l0ZW0ge1xuICAgID4gYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfAttachmentsViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-attachments-viewer, [mnjPdfAttachmentsViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-attachments-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button.ts":
/*!**********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button.ts ***!
  \**********************************************************************/
/*! exports provided: PdfDownloadButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadButton", function() { return PdfDownloadButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfDownloadButton {
    constructor() { }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.downloadPdf();
            event.stopPropagation();
        }
    }
}
PdfDownloadButton.ɵfac = function PdfDownloadButton_Factory(t) { return new (t || PdfDownloadButton)(); };
PdfDownloadButton.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PdfDownloadButton, selectors: [["button", "mnjPdfDownload", ""]], hostBindings: function PdfDownloadButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PdfDownloadButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfDownloadButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfDownload]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-loading.ts":
/*!*******************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-loading.ts ***!
  \*******************************************************************/
/*! exports provided: PdfPageLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageLoading", function() { return PdfPageLoading; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



/**
 * Element that will be used as a template for the loader
 * of a pdfPage when it is loading.
 */
class PdfPageLoading {
    constructor(templateRef) {
        this.templateRef = templateRef;
        this._matchSize = false;
    }
    get matchSize() {
        return this._matchSize;
    }
    set matchSize(value) {
        this._matchSize = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
    }
}
PdfPageLoading.ɵfac = function PdfPageLoading_Factory(t) { return new (t || PdfPageLoading)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])); };
PdfPageLoading.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PdfPageLoading, selectors: [["ng-template", "mnjPdfLoading", ""]], inputs: { matchSize: "matchSize" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PdfPageLoading, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{ selector: 'ng-template[mnjPdfLoading]' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] }]; }, { matchSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer.ts":
/*!******************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer.ts ***!
  \******************************************************************/
/*! exports provided: PdfPageViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewer", function() { return PdfPageViewer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfPageViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.pageViewerRef) {
                this.pageViewerRef.dispose();
                this.pageViewerRef = null;
            }
            this._pdfViewer = value;
            this.pageViewerRef = this.pdfViewer.registerPageViewer();
        }
    }
    ngAfterViewInit() {
        this.pageViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfPageViewer.ɵfac = function PdfPageViewer_Factory(t) { return new (t || PdfPageViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfPageViewer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfPageViewer, selectors: [["mnj-pdf-page-viewer"], ["", "mnjPdfPageViewer", ""]], hostAttrs: [1, "mnj-page-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfPageViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page {\n  margin: 10px auto;\n}\n.mnj-page-viewer .pdf-page > .textLayer > span {\n  color: transparent;\n  cursor: text;\n  position: absolute;\n  transform-origin: 0 0;\n  white-space: pre;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper {\n  position: absolute;\n  width: 10em;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup {\n  border-radius: 2px;\n  cursor: pointer;\n  margin-left: 5px;\n  max-width: 20em;\n  padding: 6px;\n  position: absolute;\n  word-wrap: break-word;\n  z-index: 200;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup > * {\n  font-size: 9px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup h1,\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup span {\n  display: inline-block;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup p {\n  border-top: 1px solid currentColor;\n  margin-top: 2px;\n  padding-top: 2px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer > section {\n  position: absolute;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .linkAnnotation > a,\n.mnj-page-viewer .pdf-page > .annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  font-size: 1em;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.mnj-thumbnail-viewer .pdf-thumbnail {\n  margin: 10px auto;\n}\n.mnj-toc-viewer .outlineWithDeepNesting > .outlineItem {\n  margin: 0 10px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler {\n  float: left;\n  height: 0;\n  position: relative;\n  width: 0;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before {\n  content: \"\";\n  display: inline-block;\n  height: 15px;\n  position: absolute;\n  width: 15px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden ~ .outlineItems {\n  display: none;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > a {\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 13px;\n  height: auto;\n  line-height: 15px;\n  margin-bottom: 1px;\n  margin-left: 15px;\n  min-width: calc(100% - 15px);\n  padding: 2px 0 5px 4px;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: normal;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > .outlineItems {\n  margin-left: 20px;\n}\n.mnj-attachments-viewer .attachmentsItem > button {\n  border: 1px solid currentColor;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0 15px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUFI7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVBWO0FBU1U7RUFDRSxjQUFBO0FBUFo7QUFVVTs7RUFFRSxxQkFBQTtBQVJaO0FBV1U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaO0FBY007RUFDRSxrQkFBQTtBQVpSO0FBZU07O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWJSO0FBcUJFO0VBQ0UsaUJBQUE7QUFsQko7QUEyQkk7RUFDRSxjQUFBO0FBeEJOO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6Qk47QUEyQk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQWhCVztFQWlCWCxrQkFBQTtFQUNBLFdBbEJXO0FBUG5CO0FBNEJNO0VBQ0UsYUFBQTtBQTFCUjtBQStCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQWhDVztFQWlDWCxrQkFBQTtFQUNBLGlCQWxDVztFQW1DWCw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsaUJBQUE7QUE5QlI7QUF1Q0k7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBcENOIiwiZmlsZSI6InByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQQUdFU1xuLm1uai1wYWdlLXZpZXdlciB7XG4gIC5wZGYtcGFnZSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgICAvLyBURVhUIExBWUVSXG4gICAgPiAudGV4dExheWVyIHtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBTk5PVEFUSU9OU1xuICAgID4gLmFubm90YXRpb25MYXllciB7XG4gICAgICAucG9wdXBXcmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBlbTtcblxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuXG4gICAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgLmxpbmtBbm5vdGF0aW9uID4gYSxcbiAgICAgIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUSFVNQk5BSUxcbi5tbmotdGh1bWJuYWlsLXZpZXdlciB7XG4gIC5wZGYtdGh1bWJuYWlsIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG4vLyBUT0Ncbi5tbmotdG9jLXZpZXdlciB7XG4gICR0b2MtYXJyb3ctc2l6ZTogMTVweDtcblxuICAub3V0bGluZVdpdGhEZWVwTmVzdGluZyB7XG4gICAgJiA+IC5vdXRsaW5lSXRlbSB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW1Ub2dnbGVyIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6ICR0b2MtYXJyb3ctc2l6ZTtcbiAgICAgIH1cblxuICAgICAgJi5vdXRsaW5lSXRlbXNIaWRkZW4gfiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW0ge1xuICAgICAgPiBhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogJHRvYy1hcnJvdy1zaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gI3skdG9jLWFycm93LXNpemV9KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgPiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFUVEFDSE1FTlRTXG4ubW5qLWF0dGFjaG1lbnRzLXZpZXdlciB7XG4gIC5hdHRhY2htZW50c0l0ZW0ge1xuICAgID4gYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfPageViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-page-viewer, [mnjPdfPageViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-page-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button.ts":
/*!*******************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button.ts ***!
  \*******************************************************************/
/*! exports provided: PdfPrintButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrintButton", function() { return PdfPrintButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfPrintButton {
    constructor() { }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.printPdf();
            event.stopPropagation();
        }
    }
}
PdfPrintButton.ɵfac = function PdfPrintButton_Factory(t) { return new (t || PdfPrintButton)(); };
PdfPrintButton.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PdfPrintButton, selectors: [["button", "mnjPdfPrint", ""]], hostBindings: function PdfPrintButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PdfPrintButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfPrintButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfPrint]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button.ts":
/*!************************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button.ts ***!
  \************************************************************************/
/*! exports provided: PdfPropertiesButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPropertiesButton", function() { return PdfPropertiesButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfPropertiesButton {
    constructor() {
        this.pdfProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onCLick(event) {
        if (this.pdfViewer) {
            this.pdfViewer.retrievePdfProperties().then((properties) => this.pdfProperties.emit(properties));
        }
        event.stopPropagation();
    }
}
PdfPropertiesButton.ɵfac = function PdfPropertiesButton_Factory(t) { return new (t || PdfPropertiesButton)(); };
PdfPropertiesButton.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PdfPropertiesButton, selectors: [["button", "mnjPdfProperties", ""]], hostBindings: function PdfPropertiesButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PdfPropertiesButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] }, outputs: { pdfProperties: "pdfProperties" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfPropertiesButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfProperties]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }], pdfProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input.ts":
/*!*******************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input.ts ***!
  \*******************************************************************/
/*! exports provided: PdfSearchInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfSearchInput", function() { return PdfSearchInput; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfSearchInput {
    constructor() { }
    onSubmit(event) {
        if (this.pdfViewer) {
            this.pdfViewer.search(event.target.value);
            event.stopPropagation();
        }
    }
}
PdfSearchInput.ɵfac = function PdfSearchInput_Factory(t) { return new (t || PdfSearchInput)(); };
PdfSearchInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PdfSearchInput, selectors: [["input", "mnjPdfSearchInput", ""]], hostBindings: function PdfSearchInput_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup.enter", function PdfSearchInput_keyup_enter_HostBindingHandler($event) { return ctx.onSubmit($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfSearchInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'input[mnjPdfSearchInput]',
                host: { '(keyup.enter)': 'onSubmit($event)' },
            }]
    }], function () { return []; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer.ts":
/*!***********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer.ts ***!
  \***********************************************************************/
/*! exports provided: PdfThumbnailViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewer", function() { return PdfThumbnailViewer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfThumbnailViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.thumbnailViewerRef) {
                this.thumbnailViewerRef.dispose();
                this.thumbnailViewerRef = null;
            }
            this._pdfViewer = value;
            this.thumbnailViewerRef = this._pdfViewer.registerThumbnailViewer();
        }
    }
    ngAfterViewInit() {
        this.thumbnailViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfThumbnailViewer.ɵfac = function PdfThumbnailViewer_Factory(t) { return new (t || PdfThumbnailViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfThumbnailViewer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfThumbnailViewer, selectors: [["mnj-pdf-thumbnail-viewer"], ["", "mnjPdfThumbnailViewer", ""]], hostAttrs: [1, "mnj-thumbnail-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfThumbnailViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page {\n  margin: 10px auto;\n}\n.mnj-page-viewer .pdf-page > .textLayer > span {\n  color: transparent;\n  cursor: text;\n  position: absolute;\n  transform-origin: 0 0;\n  white-space: pre;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper {\n  position: absolute;\n  width: 10em;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup {\n  border-radius: 2px;\n  cursor: pointer;\n  margin-left: 5px;\n  max-width: 20em;\n  padding: 6px;\n  position: absolute;\n  word-wrap: break-word;\n  z-index: 200;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup > * {\n  font-size: 9px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup h1,\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup span {\n  display: inline-block;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup p {\n  border-top: 1px solid currentColor;\n  margin-top: 2px;\n  padding-top: 2px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer > section {\n  position: absolute;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .linkAnnotation > a,\n.mnj-page-viewer .pdf-page > .annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  font-size: 1em;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.mnj-thumbnail-viewer .pdf-thumbnail {\n  margin: 10px auto;\n}\n.mnj-toc-viewer .outlineWithDeepNesting > .outlineItem {\n  margin: 0 10px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler {\n  float: left;\n  height: 0;\n  position: relative;\n  width: 0;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before {\n  content: \"\";\n  display: inline-block;\n  height: 15px;\n  position: absolute;\n  width: 15px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden ~ .outlineItems {\n  display: none;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > a {\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 13px;\n  height: auto;\n  line-height: 15px;\n  margin-bottom: 1px;\n  margin-left: 15px;\n  min-width: calc(100% - 15px);\n  padding: 2px 0 5px 4px;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: normal;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > .outlineItems {\n  margin-left: 20px;\n}\n.mnj-attachments-viewer .attachmentsItem > button {\n  border: 1px solid currentColor;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0 15px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUFI7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVBWO0FBU1U7RUFDRSxjQUFBO0FBUFo7QUFVVTs7RUFFRSxxQkFBQTtBQVJaO0FBV1U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaO0FBY007RUFDRSxrQkFBQTtBQVpSO0FBZU07O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWJSO0FBcUJFO0VBQ0UsaUJBQUE7QUFsQko7QUEyQkk7RUFDRSxjQUFBO0FBeEJOO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6Qk47QUEyQk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQWhCVztFQWlCWCxrQkFBQTtFQUNBLFdBbEJXO0FBUG5CO0FBNEJNO0VBQ0UsYUFBQTtBQTFCUjtBQStCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQWhDVztFQWlDWCxrQkFBQTtFQUNBLGlCQWxDVztFQW1DWCw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsaUJBQUE7QUE5QlI7QUF1Q0k7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBcENOIiwiZmlsZSI6InByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQQUdFU1xuLm1uai1wYWdlLXZpZXdlciB7XG4gIC5wZGYtcGFnZSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgICAvLyBURVhUIExBWUVSXG4gICAgPiAudGV4dExheWVyIHtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBTk5PVEFUSU9OU1xuICAgID4gLmFubm90YXRpb25MYXllciB7XG4gICAgICAucG9wdXBXcmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBlbTtcblxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuXG4gICAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgLmxpbmtBbm5vdGF0aW9uID4gYSxcbiAgICAgIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUSFVNQk5BSUxcbi5tbmotdGh1bWJuYWlsLXZpZXdlciB7XG4gIC5wZGYtdGh1bWJuYWlsIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG4vLyBUT0Ncbi5tbmotdG9jLXZpZXdlciB7XG4gICR0b2MtYXJyb3ctc2l6ZTogMTVweDtcblxuICAub3V0bGluZVdpdGhEZWVwTmVzdGluZyB7XG4gICAgJiA+IC5vdXRsaW5lSXRlbSB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW1Ub2dnbGVyIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6ICR0b2MtYXJyb3ctc2l6ZTtcbiAgICAgIH1cblxuICAgICAgJi5vdXRsaW5lSXRlbXNIaWRkZW4gfiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW0ge1xuICAgICAgPiBhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogJHRvYy1hcnJvdy1zaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gI3skdG9jLWFycm93LXNpemV9KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgPiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFUVEFDSE1FTlRTXG4ubW5qLWF0dGFjaG1lbnRzLXZpZXdlciB7XG4gIC5hdHRhY2htZW50c0l0ZW0ge1xuICAgID4gYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfThumbnailViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-thumbnail-viewer, [mnjPdfThumbnailViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-thumbnail-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer.ts":
/*!*****************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer.ts ***!
  \*****************************************************************/
/*! exports provided: PdfTocViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfTocViewer", function() { return PdfTocViewer; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfTocViewer {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    get pdfViewer() {
        return this._pdfViewer;
    }
    set pdfViewer(value) {
        if (this._pdfViewer !== value) {
            if (this.outlineViewerRef) {
                this.outlineViewerRef.dispose();
                this.outlineViewerRef = null;
            }
            this._pdfViewer = value;
            this.outlineViewerRef = this._pdfViewer.registerOutlineViewer();
        }
    }
    ngAfterViewInit() {
        this.outlineViewerRef.withRenderer(this.renderer).withRootElement(this.elementRef);
    }
}
PdfTocViewer.ɵfac = function PdfTocViewer_Factory(t) { return new (t || PdfTocViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfTocViewer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PdfTocViewer, selectors: [["mnj-pdf-toc-viewer"], ["", "mnjPdfTocViewer", ""]], hostAttrs: [1, "mnj-toc-viewer"], inputs: { pdfViewer: ["for", "pdfViewer"] }, decls: 0, vars: 0, template: function PdfTocViewer_Template(rf, ctx) { }, styles: [".mnj-page-viewer .pdf-page {\n  margin: 10px auto;\n}\n.mnj-page-viewer .pdf-page > .textLayer > span {\n  color: transparent;\n  cursor: text;\n  position: absolute;\n  transform-origin: 0 0;\n  white-space: pre;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper {\n  position: absolute;\n  width: 10em;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup {\n  border-radius: 2px;\n  cursor: pointer;\n  margin-left: 5px;\n  max-width: 20em;\n  padding: 6px;\n  position: absolute;\n  word-wrap: break-word;\n  z-index: 200;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup > * {\n  font-size: 9px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup h1,\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup span {\n  display: inline-block;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .popupWrapper .popup p {\n  border-top: 1px solid currentColor;\n  margin-top: 2px;\n  padding-top: 2px;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer > section {\n  position: absolute;\n}\n.mnj-page-viewer .pdf-page > .annotationLayer .linkAnnotation > a,\n.mnj-page-viewer .pdf-page > .annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  font-size: 1em;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.mnj-thumbnail-viewer .pdf-thumbnail {\n  margin: 10px auto;\n}\n.mnj-toc-viewer .outlineWithDeepNesting > .outlineItem {\n  margin: 0 10px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler {\n  float: left;\n  height: 0;\n  position: relative;\n  width: 0;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler:before {\n  content: \"\";\n  display: inline-block;\n  height: 15px;\n  position: absolute;\n  width: 15px;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItemToggler.outlineItemsHidden ~ .outlineItems {\n  display: none;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > a {\n  border-radius: 2px;\n  display: inline-block;\n  font-size: 13px;\n  height: auto;\n  line-height: 15px;\n  margin-bottom: 1px;\n  margin-left: 15px;\n  min-width: calc(100% - 15px);\n  padding: 2px 0 5px 4px;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  white-space: normal;\n}\n.mnj-toc-viewer .outlineWithDeepNesting .outlineItem > .outlineItems {\n  margin-left: 20px;\n}\n.mnj-attachments-viewer .attachmentsItem > button {\n  border: 1px solid currentColor;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  height: 40px;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0 15px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: baseline;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUU7RUFDRSxpQkFBQTtBQURKO0FBS007RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFIUjtBQVNNO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBUFI7QUFTUTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQVBWO0FBU1U7RUFDRSxjQUFBO0FBUFo7QUFVVTs7RUFFRSxxQkFBQTtBQVJaO0FBV1U7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVRaO0FBY007RUFDRSxrQkFBQTtBQVpSO0FBZU07O0VBRUUsY0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQWJSO0FBcUJFO0VBQ0UsaUJBQUE7QUFsQko7QUEyQkk7RUFDRSxjQUFBO0FBeEJOO0FBMkJJO0VBQ0UsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUF6Qk47QUEyQk07RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQWhCVztFQWlCWCxrQkFBQTtFQUNBLFdBbEJXO0FBUG5CO0FBNEJNO0VBQ0UsYUFBQTtBQTFCUjtBQStCTTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQWhDVztFQWlDWCxrQkFBQTtFQUNBLGlCQWxDVztFQW1DWCw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBZ0NNO0VBQ0UsaUJBQUE7QUE5QlI7QUF1Q0k7RUFDRSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0FBcENOIiwiZmlsZSI6InByb2plY3RzL21uai1uZ3gtcGRmdmlld2VyL3NyYy9saWIvZGlyZWN0aXZlcy9wZGYtdmlld2VyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQQUdFU1xuLm1uai1wYWdlLXZpZXdlciB7XG4gIC5wZGYtcGFnZSB7XG4gICAgbWFyZ2luOiAxMHB4IGF1dG87XG5cbiAgICAvLyBURVhUIExBWUVSXG4gICAgPiAudGV4dExheWVyIHtcbiAgICAgID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY3Vyc29yOiB0ZXh0O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBTk5PVEFUSU9OU1xuICAgID4gLmFubm90YXRpb25MYXllciB7XG4gICAgICAucG9wdXBXcmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTBlbTtcblxuICAgICAgICAucG9wdXAge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDIwZW07XG4gICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgei1pbmRleDogMjAwO1xuXG4gICAgICAgICAgPiAqIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxLFxuICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgID4gc2VjdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgLmxpbmtBbm5vdGF0aW9uID4gYSxcbiAgICAgIC5idXR0b25XaWRnZXRBbm5vdGF0aW9uLnB1c2hCdXR0b24gPiBhIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBUSFVNQk5BSUxcbi5tbmotdGh1bWJuYWlsLXZpZXdlciB7XG4gIC5wZGYtdGh1bWJuYWlsIHtcbiAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgfVxufVxuXG4vLyBUT0Ncbi5tbmotdG9jLXZpZXdlciB7XG4gICR0b2MtYXJyb3ctc2l6ZTogMTVweDtcblxuICAub3V0bGluZVdpdGhEZWVwTmVzdGluZyB7XG4gICAgJiA+IC5vdXRsaW5lSXRlbSB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW1Ub2dnbGVyIHtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgaGVpZ2h0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDA7XG5cbiAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgaGVpZ2h0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6ICR0b2MtYXJyb3ctc2l6ZTtcbiAgICAgIH1cblxuICAgICAgJi5vdXRsaW5lSXRlbXNIaWRkZW4gfiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3V0bGluZUl0ZW0ge1xuICAgICAgPiBhIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBsaW5lLWhlaWdodDogJHRvYy1hcnJvdy1zaXplO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAkdG9jLWFycm93LXNpemU7XG4gICAgICAgIG1pbi13aWR0aDogY2FsYygxMDAlIC0gI3skdG9jLWFycm93LXNpemV9KTtcbiAgICAgICAgcGFkZGluZzogMnB4IDAgNXB4IDRweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAgIH1cblxuICAgICAgPiAub3V0bGluZUl0ZW1zIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIEFUVEFDSE1FTlRTXG4ubW5qLWF0dGFjaG1lbnRzLXZpZXdlciB7XG4gIC5hdHRhY2htZW50c0l0ZW0ge1xuICAgID4gYnV0dG9uIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfTocViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mnj-pdf-toc-viewer, [mnjPdfTocViewer]',
                template: '',
                styleUrls: ['./pdf-viewer.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                host: { class: 'mnj-toc-viewer' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button.ts":
/*!********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button.ts ***!
  \********************************************************************/
/*! exports provided: PdfUploadButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfUploadButton", function() { return PdfUploadButton; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PdfUploadButton {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.fileLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.fileInput = this._buildFileInput();
        this.renderer.appendChild(this.elementRef.nativeElement, this.fileInput);
    }
    onCLick(event) {
        if (this.pdfViewer) {
            this.fileInput.click();
        }
    }
    upload(event) {
        const pdfFile = event.target.files[0];
        if (URL.createObjectURL) {
            this.pdfViewer.pdfSrc = URL.createObjectURL(pdfFile);
        }
        else {
            // Read the local file into a Uint8Array.
            const fileReader = new FileReader();
            fileReader.onload = (evt) => {
                // @ts-ignore
                const buffer = evt.target.result;
                this.pdfViewer.pdfSrc = new Uint8Array(buffer);
            };
            fileReader.readAsArrayBuffer(pdfFile);
        }
        this.fileLoaded.emit(pdfFile);
    }
    _buildFileInput() {
        const fileInput = this.renderer.createElement('input');
        this.renderer.setProperty(fileInput, 'type', 'file');
        this.renderer.setProperty(fileInput, 'accept', '.pdf, application/pdf');
        this.renderer.listen(fileInput, 'change', (event) => this.upload(event));
        this.renderer.addClass(fileInput, 'cdk-visually-hidden');
        return fileInput;
    }
}
PdfUploadButton.ɵfac = function PdfUploadButton_Factory(t) { return new (t || PdfUploadButton)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
PdfUploadButton.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PdfUploadButton, selectors: [["button", "mnjPdfUpload", ""]], hostBindings: function PdfUploadButton_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PdfUploadButton_click_HostBindingHandler($event) { return ctx.onCLick($event); });
    } }, inputs: { pdfViewer: ["for", "pdfViewer"] }, outputs: { fileLoaded: "fileLoaded" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfUploadButton, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'button[mnjPdfUpload]',
                host: { '(click)': 'onCLick($event)' },
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['for']
        }], fileLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer.ts":
/*!*************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer.ts ***!
  \*************************************************************/
/*! exports provided: MnjPdfViewer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewer", function() { return MnjPdfViewer; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pdf_attachment_viewer_ref__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pdf-attachment-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-attachment-viewer-ref.ts");
/* harmony import */ var _pdf_outline_viewer_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pdf-outline-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-outline-viewer-ref.ts");
/* harmony import */ var _pdf_page_viewer_ref__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pdf-page-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-page-viewer-ref.ts");
/* harmony import */ var _pdf_thumbnail_viewer_ref__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pdf-thumbnail-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-viewer-ref.ts");
/* harmony import */ var _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pdf-viewer-config */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-config.ts");
/* harmony import */ var _pdf_viewer_ref__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pdf-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-ref.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");
/* harmony import */ var _pdf_viewer_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pdf-viewer-registry */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-registry.ts");












let nextUniqueId = 0;
class MnjPdfViewer {
    constructor(renderingQueue, linkService, findController, downloadManager, printManager, registry, _changeDetectorRef, _config) {
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.findController = findController;
        this.downloadManager = downloadManager;
        this.printManager = printManager;
        this.registry = registry;
        this._changeDetectorRef = _changeDetectorRef;
        this._config = _config;
        // Pdf Viewer Events
        this.pdfLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pdfProperties = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pdfSearchProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pdfSearchComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pdfPrintProgress = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Page Viewer Events
        this.pageViewerPagesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageViewerPageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageViewerPageChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageViewerScaleChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageViewerRotationChanging = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pageViewerUpdateViewArea = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Outline Viewer Events
        this.outlineViewerLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // Attachment Viewer Events
        this.attachmentViewerLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.id = `mnj-pdf-viewer-${nextUniqueId++}`;
        this._pdfRef = new _pdf_viewer_ref__WEBPACK_IMPORTED_MODULE_7__["PdfViewerRef"](this.renderingQueue, this.linkService, this.downloadManager, this.printManager, this.findController);
        this.registry.registerPdfViewer(this.id, this._pdfRef);
        this._handleEvents(this._pdfRef);
    }
    get pdfSrc() {
        return this._pdfRef.pdfSrc;
    }
    set pdfSrc(value) {
        this._pdfRef.pdfSrc = value;
    }
    get page() {
        return this._pdfRef.currentPage;
    }
    set page(value) {
        this._pdfRef.currentPage = value;
    }
    get scale() {
        return this._pdfRef.currentScale;
    }
    set scale(value) {
        this._pdfRef.currentScale = value;
    }
    get rotation() {
        return this._pdfRef.currentRotation;
    }
    set rotation(value) {
        this._pdfRef.currentRotation = value;
    }
    get searchOptions() {
        return this._pdfRef.currentSearchOptions;
    }
    set searchOptions(searchOptions) {
        this._pdfRef.currentSearchOptions = searchOptions;
    }
    /** Whether pdf viewer is disabled. */
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceBooleanProperty"])(value);
        //this._pdfRef.disabled = this._disabled;
    }
    ngOnDestroy() {
        this._pdfRef.dispose();
        this.registry.removePdfViewer(this.id);
    }
    // TODO: Move all this methods to a registry to manage subscriptions and unSubscriptions globally
    registerPageViewer() {
        const pdfPageViewerRef = new _pdf_page_viewer_ref__WEBPACK_IMPORTED_MODULE_4__["PdfPageViewerRef"](this.id, this.renderingQueue, this.linkService, this.findController, this.downloadManager, this._config);
        this._pdfRef.pdfPageViewer = pdfPageViewerRef;
        this._handlePageViewerEvents(pdfPageViewerRef);
        return pdfPageViewerRef;
    }
    registerThumbnailViewer() {
        const pdfThumbnailViewerRef = new _pdf_thumbnail_viewer_ref__WEBPACK_IMPORTED_MODULE_5__["PdfThumbnailViewerRef"](this.id, this.linkService, this.renderingQueue);
        this._pdfRef.pdfThumbnailViewer = pdfThumbnailViewerRef;
        return pdfThumbnailViewerRef;
    }
    registerAttachmentViewer() {
        const pdfAttachmentViewerRef = new _pdf_attachment_viewer_ref__WEBPACK_IMPORTED_MODULE_2__["PdfAttachmentViewerRef"](this.downloadManager);
        this._pdfRef.pdfAttachmentViewer = pdfAttachmentViewerRef;
        this._handleAttachmentViewerEvents(pdfAttachmentViewerRef);
        return pdfAttachmentViewerRef;
    }
    registerOutlineViewer() {
        const pdfOutlineViewerRef = new _pdf_outline_viewer_ref__WEBPACK_IMPORTED_MODULE_3__["PdfOutlineViewerRef"](this.linkService);
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
    search(phrase) {
        this._pdfRef.currentSearchQuery = phrase;
    }
    findNext() {
        this._pdfRef.findNext();
    }
    findPrevious() {
        this._pdfRef.findPrevious();
    }
    /** Handles the events from the underlying `PdfViewerRef`. */
    _handleEvents(ref) {
        ref.pdfLoaded.subscribe((event) => {
            this.pdfLoaded.emit(Object.assign({ source: this }, event));
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.pdfPropertiesLoaded.subscribe((event) => {
            this.pdfProperties.emit(Object.assign({ source: this }, event));
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            this._changeDetectorRef.markForCheck();
        });
        ref.pdfPrintProgress.subscribe((event) => {
            this.pdfPrintProgress.emit(Object.assign({ source: this }, event));
        });
        this.findController.searchState.subscribe((event) => {
            this.pdfSearchProgress.emit(Object.assign({ source: this }, event));
        });
        this.findController.searchComplete.subscribe((event) => {
            this.pdfSearchComplete.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfPageViewerRef`. */
    _handlePageViewerEvents(pageViewerRef) {
        pageViewerRef.pagesLoaded.subscribe((event) => {
            this.pageViewerPagesLoaded.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.pageLoaded.subscribe((event) => {
            this.pageViewerPageLoaded.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.pageChanging.subscribe((event) => {
            this._pdfRef.syncPageAndThumbnail(event.actualPageIndex);
            this.pageViewerPageChanging.emit(Object.assign({ source: this }, event));
            this._changeDetectorRef.detectChanges();
        });
        pageViewerRef.scaleChanging.subscribe((event) => {
            this.pageViewerScaleChanging.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.rotationChanging.subscribe((event) => {
            this.pageViewerRotationChanging.emit(Object.assign({ source: this }, event));
        });
        pageViewerRef.updateViewArea.subscribe((event) => {
            this.pageViewerUpdateViewArea.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfOutlineViewerRef`. */
    _handleOutlineViewerEvents(outlineViewerRef) {
        outlineViewerRef.outlineLoaded.subscribe((event) => {
            this.outlineViewerLoaded.emit(Object.assign({ source: this }, event));
        });
    }
    /** Handles the events from the underlying `PdfAttachmentViewerRef`. */
    _handleAttachmentViewerEvents(attachmentViewerRef) {
        attachmentViewerRef.attachmentsLoaded.subscribe((event) => {
            this.attachmentViewerLoaded.emit(Object.assign({ source: this }, event));
        });
    }
}
MnjPdfViewer.ɵfac = function MnjPdfViewer_Factory(t) { return new (t || MnjPdfViewer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["PdfRenderingQueue"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["PdfLinkService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["PdfFindController"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["PdfDownloadManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_8__["PdfPrintManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pdf_viewer_registry__WEBPACK_IMPORTED_MODULE_9__["PdfViewerRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pdf_viewer_config__WEBPACK_IMPORTED_MODULE_6__["MNJ_PDF_VIEW_CONFIGURATION"])); };
MnjPdfViewer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MnjPdfViewer, selectors: [["mnj-pdf-viewer"]], hostAttrs: [1, "mnj-pdf-viewer", "cdk-visually-hidden"], hostVars: 2, hostBindings: function MnjPdfViewer_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("disabled", ctx.disabled);
    } }, inputs: { pdfSrc: "pdfSrc", page: "page", scale: "scale", rotation: "rotation", searchOptions: "searchOptions", disabled: ["pdfViewerDisabled", "disabled"] }, outputs: { pdfLoaded: "pdfLoaded", pdfProperties: "pdfProperties", pdfSearchProgress: "pdfSearchProgress", pdfSearchComplete: "pdfSearchComplete", pdfPrintProgress: "pdfPrintProgress", pageViewerPagesLoaded: "pageViewerPagesLoaded", pageViewerPageLoaded: "pageViewerPageLoaded", pageViewerPageChanging: "pageViewerPageChanging", pageViewerScaleChanging: "pageViewerScaleChanging", pageViewerRotationChanging: "pageViewerRotationChanging", pageViewerUpdateViewArea: "pageViewerUpdateViewArea", outlineViewerLoaded: "outlineViewerLoaded", attachmentViewerLoaded: "attachmentViewerLoaded" }, exportAs: ["mnjPdfViewer"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_services__WEBPACK_IMPORTED_MODULE_8__["PdfRenderingQueue"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfDownloadManager"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfFindController"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfLinkService"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfPrintManager"]])], decls: 0, vars: 0, template: function MnjPdfViewer_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MnjPdfViewer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'mnj-pdf-viewer',
                template: '',
                exportAs: 'mnjPdfViewer',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
                providers: [_services__WEBPACK_IMPORTED_MODULE_8__["PdfRenderingQueue"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfDownloadManager"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfFindController"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfLinkService"], _services__WEBPACK_IMPORTED_MODULE_8__["PdfPrintManager"]],
                host: {
                    class: 'mnj-pdf-viewer cdk-visually-hidden',
                    '[attr.id]': 'id',
                    '[attr.disabled]': 'disabled',
                },
            }]
    }], function () { return [{ type: _services__WEBPACK_IMPORTED_MODULE_8__["PdfRenderingQueue"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["PdfLinkService"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["PdfFindController"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["PdfDownloadManager"] }, { type: _services__WEBPACK_IMPORTED_MODULE_8__["PdfPrintManager"] }, { type: _pdf_viewer_registry__WEBPACK_IMPORTED_MODULE_9__["PdfViewerRegistry"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_pdf_viewer_config__WEBPACK_IMPORTED_MODULE_6__["MNJ_PDF_VIEW_CONFIGURATION"]]
            }] }]; }, { pdfSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], page: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], searchOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['pdfViewerDisabled']
        }], pdfLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pdfProperties: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pdfSearchProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pdfSearchComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pdfPrintProgress: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerPagesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerPageLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerPageChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerScaleChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerRotationChanging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], pageViewerUpdateViewArea: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], outlineViewerLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], attachmentViewerLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/index.ts":
/*!*********************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public-api */ "../mnj-ngx-pdfviewer/src/lib/public-api.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _public_api__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _public_api__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));



/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/index.ts":
/*!****************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/index.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pdf_location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-location */ "../mnj-ngx-pdfviewer/src/lib/models/pdf-location.ts");
/* harmony import */ var _pdf_location__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pdf_location__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pdf_location__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pdf_location__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pdf_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf-properties */ "../mnj-ngx-pdfviewer/src/lib/models/pdf-properties.ts");
/* harmony import */ var _pdf_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pdf_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pdf_properties__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pdf_properties__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scale */ "../mnj-ngx-pdfviewer/src/lib/models/scale.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_AUTO_SCALE", function() { return _scale__WEBPACK_IMPORTED_MODULE_2__["MAX_AUTO_SCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MIN_SCALE", function() { return _scale__WEBPACK_IMPORTED_MODULE_2__["MIN_SCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAX_SCALE", function() { return _scale__WEBPACK_IMPORTED_MODULE_2__["MAX_SCALE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_DELTA", function() { return _scale__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCALE_DELTA"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_VALUE", function() { return _scale__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCALE_VALUE"]; });

/* harmony import */ var _search_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-options */ "../mnj-ngx-pdfviewer/src/lib/models/search-options.ts");
/* harmony import */ var _search_options__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_search_options__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_options__WEBPACK_IMPORTED_MODULE_3__) if(["MAX_AUTO_SCALE","MIN_SCALE","MAX_SCALE","DEFAULT_SCALE_DELTA","DEFAULT_SCALE_VALUE","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_options__WEBPACK_IMPORTED_MODULE_3__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _visualization_options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visualization-options */ "../mnj-ngx-pdfviewer/src/lib/models/visualization-options.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RendererType", function() { return _visualization_options__WEBPACK_IMPORTED_MODULE_4__["RendererType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SpreadMode", function() { return _visualization_options__WEBPACK_IMPORTED_MODULE_4__["SpreadMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollMode", function() { return _visualization_options__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextLayerMode", function() { return _visualization_options__WEBPACK_IMPORTED_MODULE_4__["TextLayerMode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PresentationModeState", function() { return _visualization_options__WEBPACK_IMPORTED_MODULE_4__["PresentationModeState"]; });








/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/pdf-location.ts":
/*!***********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/pdf-location.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/pdf-properties.ts":
/*!*************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/pdf-properties.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/scale.ts":
/*!****************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/scale.ts ***!
  \****************************************************/
/*! exports provided: MAX_AUTO_SCALE, MIN_SCALE, MAX_SCALE, DEFAULT_SCALE_DELTA, DEFAULT_SCALE_VALUE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_AUTO_SCALE", function() { return MAX_AUTO_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MIN_SCALE", function() { return MIN_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_SCALE", function() { return MAX_SCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_DELTA", function() { return DEFAULT_SCALE_DELTA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SCALE_VALUE", function() { return DEFAULT_SCALE_VALUE; });
const MAX_AUTO_SCALE = 1.25;
const MIN_SCALE = 0.1;
const MAX_SCALE = 10.0;
const DEFAULT_SCALE_DELTA = 1.1;
const DEFAULT_SCALE_VALUE = 'auto';


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/search-options.ts":
/*!*************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/search-options.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/models/visualization-options.ts":
/*!********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/models/visualization-options.ts ***!
  \********************************************************************/
/*! exports provided: RendererType, SpreadMode, ScrollMode, TextLayerMode, PresentationModeState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererType", function() { return RendererType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpreadMode", function() { return SpreadMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollMode", function() { return ScrollMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerMode", function() { return TextLayerMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresentationModeState", function() { return PresentationModeState; });
var RendererType;
(function (RendererType) {
    RendererType["CANVAS"] = "canvas";
    RendererType["SVG"] = "svg";
})(RendererType || (RendererType = {}));
var SpreadMode;
(function (SpreadMode) {
    SpreadMode[SpreadMode["UNKNOWN"] = -1] = "UNKNOWN";
    SpreadMode[SpreadMode["NONE"] = 0] = "NONE";
    SpreadMode[SpreadMode["ODD"] = 1] = "ODD";
    SpreadMode[SpreadMode["EVEN"] = 2] = "EVEN";
})(SpreadMode || (SpreadMode = {}));
var ScrollMode;
(function (ScrollMode) {
    ScrollMode[ScrollMode["UNKNOWN"] = -1] = "UNKNOWN";
    ScrollMode[ScrollMode["VERTICAL"] = 0] = "VERTICAL";
    ScrollMode[ScrollMode["HORIZONTAL"] = 1] = "HORIZONTAL";
    ScrollMode[ScrollMode["WRAPPED"] = 2] = "WRAPPED";
})(ScrollMode || (ScrollMode = {}));
var TextLayerMode;
(function (TextLayerMode) {
    TextLayerMode[TextLayerMode["DISABLE"] = 0] = "DISABLE";
    TextLayerMode[TextLayerMode["ENABLE"] = 1] = "ENABLE";
    TextLayerMode[TextLayerMode["ENABLE_ENHANCE"] = 2] = "ENABLE_ENHANCE";
})(TextLayerMode || (TextLayerMode = {}));
var PresentationModeState;
(function (PresentationModeState) {
    PresentationModeState[PresentationModeState["UNKNOWN"] = 0] = "UNKNOWN";
    PresentationModeState[PresentationModeState["NORMAL"] = 1] = "NORMAL";
    PresentationModeState[PresentationModeState["CHANGING"] = 2] = "CHANGING";
    PresentationModeState[PresentationModeState["FULLSCREEN"] = 3] = "FULLSCREEN";
})(PresentationModeState || (PresentationModeState = {}));


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-attachment-viewer-ref.ts":
/*!*****************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-attachment-viewer-ref.ts ***!
  \*****************************************************************/
/*! exports provided: PdfAttachmentViewerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentViewerRef", function() { return PdfAttachmentViewerRef; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



class PdfAttachmentViewerRef {
    constructor(downloadManager) {
        this.downloadManager = downloadManager;
        //Events
        this.attachmentsLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        this.renderer.setStyle(element, 'display', 'block');
        if (element !== this.container) {
            this._container = element;
            this.reset();
        }
        return this;
    }
    dispose() {
        this.reset();
        this.attachmentsLoaded.complete();
    }
    setDocument(pdfDocument) {
        this.pdfDocument = pdfDocument;
        this.pdfDocument.getAttachments().then((attachments) => this.render({ attachments }));
    }
    reset(keepRenderedCapability = false) {
        this.attachments = null;
        this.container.textContent = '';
        if (!keepRenderedCapability) {
            this._renderedCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createPromiseCapability"]();
        }
    }
    render({ attachments, keepRenderedCapability = false }) {
        let attachmentsCount = 0;
        if (this.attachments) {
            this.reset(keepRenderedCapability === true);
        }
        this.attachments = attachments || null;
        if (!attachments) {
            this._dispatchEvent(attachmentsCount);
            return;
        }
        const names = Object.keys(attachments).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
        attachmentsCount = names.length;
        for (let i = 0; i < attachmentsCount; i++) {
            const item = attachments[names[i]];
            const filename = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["removeNullCharacters"](pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["getFilenameFromUrl"](item.filename));
            const div = document.createElement('div');
            div.className = 'attachmentsItem';
            const button = document.createElement('button');
            button.textContent = filename;
            if (/\.pdf$/i.test(filename)) {
                this._bindPdfLink(button, item.content, filename);
            }
            else {
                this._bindLink(button, item.content, filename);
            }
            div.appendChild(button);
            this._container.appendChild(div);
        }
        this._dispatchEvent(attachmentsCount);
    }
    /**
     * Used to append FileAttachment annotations to the sidebar.
     * @private
     */
    _appendAttachment({ id, filename, content }) {
        this._renderedCapability.promise.then(() => {
            let attachments = this.attachments;
            if (!attachments) {
                attachments = Object.create(null);
            }
            else {
                for (const name in attachments) {
                    if (id === name) {
                        return; // Ignore the new attachment if it already exists.
                    }
                }
            }
            attachments[id] = {
                filename,
                content,
            };
            this.render({
                attachments,
                keepRenderedCapability: true,
            });
        });
    }
    _bindPdfLink(button, content, filename) {
        button.onclick = () => {
            const blobUrl = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createObjectURL"](content, 'application/pdf');
            const viewerUrl = '?file=' + encodeURIComponent(blobUrl + '#' + filename);
            window.open(viewerUrl);
            return false;
        };
    }
    _bindLink(button, content, filename) {
        button.onclick = () => {
            this.downloadManager.downloadData(content, filename, '');
            return false;
        };
    }
    _dispatchEvent(attachmentsCount) {
        this._renderedCapability.resolve();
        this.attachmentsLoaded.next({ count: attachmentsCount });
    }
    get container() {
        return this._container;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts":
/*!*****************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-container.ts ***!
  \*****************************************************/
/*! exports provided: PdfContainer, PdfContainerItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfContainer", function() { return PdfContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfContainerItem", function() { return PdfContainerItem; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");

class PdfContainer {
    constructor(renderingQueue) {
        this.renderingQueue = renderingQueue;
        this._pageLabels = null;
        this._pagesRequests = new WeakMap();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    _resetView() {
        this.items = [];
        this._currentPageNumber = 1;
        this._pageLabels = null;
        this._pagesRotation = 0;
        this._pagesRequests = new WeakMap();
        // Remove children from the DOM
        this.container.textContent = '';
    }
    cleanup() {
        this.cancelRendering();
        this.items.forEach((i) => i.reset());
        this.setDocument(null);
    }
    cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    /**
     * @returns {Promise} Returns a promise containing a {PDFPageProxy} object.
     * @private
     */
    setPageLabels(labels) {
        if (!this.pdfDocument) {
            return;
        }
        if (!labels) {
            this._pageLabels = null;
        }
        else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null;
            console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
        }
        else {
            this._pageLabels = labels;
        }
        // Update all the `PDFThumbnailView` instances.
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            const label = this._pageLabels && this._pageLabels[i];
            this.items[i].setPageLabel(label);
        }
    }
    _ensurePdfPageLoaded(itemView) {
        if (itemView.pdfPage) {
            return Promise.resolve(itemView.pdfPage);
        }
        if (this._pagesRequests.has(itemView)) {
            return this._pagesRequests.get(itemView);
        }
        const promise = this.pdfDocument
            .getPage(itemView.id)
            .then((pdfPage) => {
            if (!itemView.pdfPage) {
                itemView.setPdfPage(pdfPage);
            }
            this._pagesRequests.delete(itemView);
            return pdfPage;
        })
            .catch((reason) => {
            console.error('Unable to get page for page view', reason);
            // Page error -- there is nothing that can be done.
            this._pagesRequests.delete(itemView);
        });
        this._pagesRequests.set(itemView, promise);
        return promise;
    }
}
class PdfContainerItem {
    constructor(id, defaultViewport, renderingQueue, renderer) {
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this.rotation = 0;
        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_0__["RenderingStates"].INITIAL;
        this._viewport = defaultViewport;
        this.pdfPageRotate = defaultViewport.rotation;
    }
    get pdfPage() {
        return this._pdfPage;
    }
    get container() {
        return this._container;
    }
    get viewport() {
        return this._viewport;
    }
    get renderingState() {
        return this._renderingState;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-outline-viewer-ref.ts":
/*!**************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-outline-viewer-ref.ts ***!
  \**************************************************************/
/*! exports provided: PdfOutlineViewerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfOutlineViewerRef", function() { return PdfOutlineViewerRef; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");



const DEFAULT_TITLE = '\u2013';
class PdfOutlineViewerRef {
    constructor(linkService) {
        this.linkService = linkService;
        //Events
        this.outlineLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    withRenderer(renderer) {
        this.renderer = renderer;
        return this;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        if (element !== this.container) {
            this._container = element;
            this.reset();
        }
        return this;
    }
    dispose() {
        this.reset();
        this.outlineLoaded.complete();
    }
    setDocument(pdfDocument) {
        this.pdfDocument = pdfDocument;
        pdfDocument.getOutline().then((outline) => this.render({ outline }));
    }
    reset() {
        this.outline = null;
        this.lastToggleIsShow = true;
        // Remove the outline from the DOM.
        this.container.textContent = '';
        // Ensure that the left (right in RTL locales) margin is always reset,
        // to prevent incorrect outline alignment if a new document is opened.
        this.container.classList.remove('outlineWithDeepNesting');
    }
    _bindLink(element, { url, newWindow, dest }) {
        const { linkService } = this;
        if (url) {
            pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["addLinkAttributes"](element, {
                url,
                target: newWindow ? pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["LinkTarget"].BLANK : linkService.externalLinkTarget,
                rel: linkService.externalLinkRel,
                enabled: linkService.externalLinkEnabled,
            });
            return;
        }
        element.href = linkService.getDestinationHash(dest);
        element.onclick = () => {
            if (dest) {
                linkService.navigateTo(dest);
            }
            return false;
        };
    }
    _setStyles(element, { bold, italic }) {
        if (bold) {
            element.style.fontWeight = 'bold';
        }
        if (italic) {
            element.style.fontStyle = 'italic';
        }
    }
    /**
     * Prepend a button before an outline item which allows the user to toggle
     * the visibility of all outline items at that level.
     *
     * @private
     */
    _addToggleButton(div, { count, items }) {
        const toggler = document.createElement('div');
        toggler.className = 'outlineItemToggler';
        if (count < 0 && Math.abs(count) === items.length) {
            toggler.classList.add('outlineItemsHidden');
        }
        toggler.onclick = (evt) => {
            evt.stopPropagation();
            toggler.classList.toggle('outlineItemsHidden');
            if (evt.shiftKey) {
                const shouldShowAll = !toggler.classList.contains('outlineItemsHidden');
                this._toggleOutlineItem(div, shouldShowAll);
            }
        };
        div.insertBefore(toggler, div.firstChild);
    }
    /**
     * Toggle the visibility of the subtree of an outline item.
     *
     * @param {Element} root - the root of the outline (sub)tree.
     * @param {boolean} show - whether to show the outline (sub)tree. If false,
     *   the outline subtree rooted at |root| will be collapsed.
     *
     * @private
     */
    _toggleOutlineItem(root, show = false) {
        this.lastToggleIsShow = show;
        for (const toggler of root.querySelectorAll('.outlineItemToggler')) {
            toggler.classList.toggle('outlineItemsHidden', !show);
        }
    }
    /**
     * Collapse or expand all subtrees of the outline.
     */
    toggleOutlineTree() {
        if (!this.outline) {
            return;
        }
        this._toggleOutlineItem(this.container, !this.lastToggleIsShow);
    }
    /**
     * @param params
     */
    render({ outline }) {
        let outlineCount = 0;
        if (this.outline) {
            this.reset();
        }
        this.outline = outline || null;
        if (!outline) {
            this._dispatchEvent(outlineCount);
            return;
        }
        const fragment = document.createDocumentFragment();
        const queue = [{ parent: fragment, items: this.outline }];
        let hasAnyNesting = false;
        while (queue.length > 0) {
            const levelData = queue.shift();
            for (const item of levelData.items) {
                const div = document.createElement('div');
                div.className = 'outlineItem';
                const element = document.createElement('a');
                this._bindLink(element, item);
                this._setStyles(element, item);
                element.textContent = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["removeNullCharacters"](item.title) || DEFAULT_TITLE;
                div.appendChild(element);
                if (item.items.length > 0) {
                    hasAnyNesting = true;
                    this._addToggleButton(div, item);
                    const itemsDiv = document.createElement('div');
                    itemsDiv.className = 'outlineItems';
                    div.appendChild(itemsDiv);
                    queue.push({ parent: itemsDiv, items: item.items });
                }
                levelData.parent.appendChild(div);
                outlineCount++;
            }
        }
        if (hasAnyNesting) {
            this.container.classList.add('outlineWithDeepNesting');
            this.lastToggleIsShow = fragment.querySelectorAll('.outlineItemsHidden').length === 0;
        }
        this.container.appendChild(fragment);
        this._dispatchEvent(outlineCount);
    }
    /**
     * @private
     */
    _dispatchEvent(outlineCount) {
        this.outlineLoaded.next({ count: outlineCount });
    }
    get container() {
        return this._container;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-page-ref.ts":
/*!****************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-page-ref.ts ***!
  \****************************************************/
/*! exports provided: PdfPageRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageRef", function() { return PdfPageRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pdf_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-container */ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");





class PdfPageRef extends _pdf_container__WEBPACK_IMPORTED_MODULE_2__["PdfContainerItem"] {
    // TODO move page description params to each PdfPageRef to print pdf with different page sizes
    constructor(pagesContainer, id, defaultViewport, findController, linkService, downloadManager, renderingQueue, renderer) {
        super(id, defaultViewport, renderingQueue, renderer);
        this.pagesContainer = pagesContainer;
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.findController = findController;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this.scaleNumber = defaultViewport.scale;
        this.renderingQueue = renderingQueue;
        this._container = this.createItemContainer(defaultViewport);
        this.pagesContainer.appendChild(this.container);
    }
    setPdfPage(page) {
        this._pdfPage = page;
        this.pdfPageRotate = page.rotate;
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = page.getViewport({
            scale: this.scaleNumber,
            rotation: totalRotation,
        });
        this.stats = page.stats;
        this.reset();
    }
    destroy() {
        this.reset();
        if (this._pdfPage) {
            this._pdfPage.cleanup();
        }
    }
    draw() {
        if (this.renderingState !== _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].INITIAL) {
            console.error('Must be in new state before drawing');
            this.reset(); // Ensure that we reset all state to prevent issues.
        }
        if (!this.pdfPage) {
            this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].FINISHED;
            return Promise.reject(new Error('Page is not loaded'));
        }
        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].RUNNING;
        const pdfPage = this.pdfPage;
        const div = this.container;
        // Wrap the canvas so that if it has a CSS transform for high DPI the
        // overflow will be hidden in Firefox.
        const canvasWrapper = this._getOrBuildCanvas();
        if (this._annotationLayer && this._annotationLayer.div) {
            // The annotation layer needs to stay on top.
            div.insertBefore(canvasWrapper, this._annotationLayer.div);
        }
        else {
            div.appendChild(canvasWrapper);
        }
        const textLayerDiv = this._getOrBuildTextLayer();
        if (this._annotationLayer && this._annotationLayer.div) {
            // The annotation layer needs to stay on top.
            div.insertBefore(textLayerDiv, this._annotationLayer.div);
        }
        else {
            div.appendChild(textLayerDiv);
        }
        this._textLayer = _utils__WEBPACK_IMPORTED_MODULE_4__["DefaultTextLayerFactory"].createTextLayerBuilder(textLayerDiv, this.id - 1, this.viewport, this.findController);
        let renderContinueCallback = null;
        if (this.renderingQueue) {
            renderContinueCallback = (cont) => {
                if (!this.renderingQueue.isHighestPriority(this)) {
                    this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].PAUSED;
                    this.resume = () => {
                        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].RUNNING;
                        cont();
                    };
                    return;
                }
                cont();
            };
        }
        const finishPaintTask = (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // The paintTask may have been replaced by a new one, so only remove
            // the reference to the paintTask if it matches the one that is
            // triggering this callback.
            if (paintTask === this.paintTask) {
                this.paintTask = null;
            }
            if (error instanceof pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["RenderingCancelledException"]) {
                this.error = null;
                return;
            }
            this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].FINISHED;
            this.error = error;
            if (error) {
                throw error;
            }
        });
        const paintTask = this.paintOnCanvas(canvasWrapper);
        paintTask.onRenderContinue = renderContinueCallback;
        this.paintTask = paintTask;
        const resultPromise = paintTask.promise.then(() => finishPaintTask(null).then(() => {
            if (this._textLayer) {
                const readableStream = pdfPage.streamTextContent({
                    normalizeWhitespace: true,
                });
                this._textLayer.setTextContentStream(readableStream);
                this._textLayer.render();
            }
        }), (reason) => finishPaintTask(reason));
        if (!this._annotationLayer) {
            this._annotationLayer = _utils__WEBPACK_IMPORTED_MODULE_4__["DefaultAnnotationLayerFactory"].createAnnotationLayerBuilder(this.container, pdfPage, this.linkService, this.downloadManager);
        }
        this._annotationLayer.render(this.viewport);
        div.setAttribute('data-loaded', `${true}`);
        return resultPromise;
    }
    paintOnCanvas(canvasWrapper) {
        const renderCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createPromiseCapability"]();
        const result = {
            promise: renderCapability.promise,
            onRenderContinue(cont) {
                cont();
            },
            cancel() {
                renderTask.cancel();
            },
        };
        const viewport = this.viewport;
        const canvas = canvasWrapper;
        // Keep the canvas hidden until the first draw callback, or until drawing
        // is complete when `!this.renderingQueue`, to prevent black flickering.
        canvas.setAttribute('hidden', 'hidden');
        let isCanvasHidden = true;
        const showCanvas = function () {
            if (isCanvasHidden) {
                canvas.removeAttribute('hidden');
                isCanvasHidden = false;
            }
        };
        const ctx = canvasWrapper.getContext('2d', { alpha: false });
        const outputScale = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOutputScale"])(ctx);
        /*if (this.useOnlyCssZoom) {
                const actualSizeViewport = viewport.clone({ scale: CSS_UNITS });
                // Use a scale that makes the canvas have the originally intended size
                // of the page.
                outputScale.sx *= actualSizeViewport.width / viewport.width;
                outputScale.sy *= actualSizeViewport.height / viewport.height;
                outputScale.scaled = true;
            }*/
        const pixelsInViewport = viewport.width * viewport.height;
        const maxScale = Math.sqrt(16777216 / pixelsInViewport);
        if (outputScale.sx > maxScale || outputScale.sy > maxScale) {
            outputScale.sx = maxScale;
            outputScale.sy = maxScale;
            outputScale.scaled = true;
        }
        const sfx = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["approximateFraction"])(outputScale.sx);
        const sfy = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["approximateFraction"])(outputScale.sy);
        canvas.width = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["roundToDivide"])(viewport.width * outputScale.sx, sfx[0]);
        canvas.height = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["roundToDivide"])(viewport.height * outputScale.sy, sfy[0]);
        canvas.style.width = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["roundToDivide"])(viewport.width, sfx[1]) + 'px';
        canvas.style.height = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["roundToDivide"])(viewport.height, sfy[1]) + 'px';
        // Add the viewport so it's known what it was originally drawn with.
        //this.paintedViewportMap.set(canvas, viewport);
        // Rendering area
        const transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
        const renderContext = {
            canvasContext: ctx,
            transform,
            viewport: this.viewport,
            enableWebGL: false,
            renderInteractiveForms: false,
        };
        const renderTask = this.pdfPage.render(renderContext);
        renderTask.onContinue = function (cont) {
            showCanvas();
            if (result.onRenderContinue) {
                result.onRenderContinue(cont);
            }
            else {
                cont();
            }
        };
        renderTask.promise.then(function () {
            showCanvas();
            renderCapability.resolve(undefined);
        }, function (error) {
            showCanvas();
            renderCapability.reject(error);
        });
        return result;
    }
    reset(keepZoomLayer = false, keepAnnotations = false) {
        this.cancelRendering();
        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].INITIAL;
        if (this.container) {
            this._updatePageContainer();
        }
        if (this._canvasContainer) {
            this.renderer.removeChild(this.container, this._canvasContainer);
            this._canvasContainer = null;
        }
        if (this._textLayerContainer) {
            this.renderer.removeChild(this.container, this._textLayerContainer);
            this._textLayerContainer = null;
        }
        if (this._annotationLayer) {
            if (this._annotationLayer.div) {
                this._annotationLayer.hide();
            }
            else {
                this._annotationLayer.cancel();
                this._annotationLayer = null;
            }
        }
        this.renderer.setAttribute(this.container, 'data-page-id', `${this.id}`);
        this.renderer.removeAttribute(this.container, 'data-loaded');
    }
    update(scale, rotation) {
        this.scaleNumber = scale || this.scaleNumber;
        // The rotation may be zero.
        if (typeof rotation !== 'undefined') {
            this.rotation = rotation;
        }
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = this.viewport.clone({
            scale: this.scaleNumber * _utils__WEBPACK_IMPORTED_MODULE_4__["CSS_UNITS"],
            rotation: totalRotation,
        });
        /*let isScalingRestricted = false;
    
            if (this._canvasContainer) {
                if (this.useOnlyCssZoom || (this.hasRestrictedScaling && isScalingRestricted)) {
                    this.cssTransform(this.canvas, true);
                    return;
                }
                if (!this.zoomLayer && !this.canvas.hasAttribute("hidden")) {
                    this.zoomLayer = this.canvas.parentNode;
                    this.zoomLayer.style.position = "absolute";
                }
            }
            if (this.zoomLayer) {
                this.cssTransform(this.zoomLayer.firstChild);
            }*/
        this.reset(/* keepZoomLayer = */ true, /* keepAnnotations = */ true);
    }
    updateMatches() {
        if (this.textLayer) {
            this.textLayer._updateMatches();
        }
    }
    cancelRendering() {
        if (this._renderTask) {
            this._renderTask.cancel();
        }
        if (this.textLayer) {
            this.textLayer.cancel();
            this._textLayer = null;
        }
        if (this._annotationLayer) {
            this._annotationLayer.cancel();
            this._annotationLayer = null;
        }
    }
    _updatePageContainer() {
        this.renderer.setStyle(this.container, 'width', `${this.viewport.width}px`);
        this.renderer.setStyle(this.container, 'height', `${this.viewport.height}px`);
        return this.container;
    }
    createItemContainer(defaultViewport) {
        const pageElement = this.renderer.createElement('div');
        this.renderer.addClass(pageElement, 'pdf-page');
        this.renderer.setStyle(pageElement, 'position', 'relative');
        if (this.pdfPage) {
            this.renderer.setAttribute(pageElement, 'data-page-number', `${this.id}`);
        }
        if (defaultViewport) {
            this.renderer.setStyle(pageElement, 'width', `${defaultViewport.width}px`);
            this.renderer.setStyle(pageElement, 'height', `${defaultViewport.height}px`);
        }
        return pageElement;
    }
    _getOrBuildTextLayer() {
        if (!this._textLayerContainer) {
            this._textLayerContainer = this._createTextLayer();
        }
        this.renderer.appendChild(this.container, this._textLayerContainer);
        return this._textLayerContainer;
    }
    _createTextLayer() {
        const { height, width } = this.viewport;
        const coercedHeight = Math.floor(height);
        const coercedWidth = Math.floor(width);
        const textLayer = this.renderer.createElement('div');
        this.renderer.addClass(textLayer, 'textLayer');
        this.renderer.setStyle(textLayer, 'position', 'absolute');
        this.renderer.setStyle(textLayer, 'height', `${coercedHeight}px`);
        this.renderer.setStyle(textLayer, 'width', `${coercedWidth}px`);
        this.renderer.setStyle(textLayer, 'top', `0`);
        this.renderer.setStyle(textLayer, 'left', `0`);
        this.renderer.setStyle(textLayer, 'right', `0`);
        this.renderer.setStyle(textLayer, 'bottom', `0`);
        this.renderer.setStyle(textLayer, 'opacity', `0.2`);
        this.renderer.setStyle(textLayer, 'line-height', '1');
        return textLayer;
    }
    _getOrBuildCanvas() {
        if (!this._canvasContainer) {
            this._canvasContainer = this._createCanvas();
        }
        this.renderer.appendChild(this.container, this._canvasContainer);
        return this._canvasContainer;
    }
    _createCanvas() {
        const { height, width } = this.viewport;
        const coercedHeight = Math.floor(height);
        const coercedWidth = Math.floor(width);
        const canvas = this.renderer.createElement('canvas');
        canvas.height = coercedHeight;
        canvas.width = coercedWidth;
        this.renderer.setAttribute(canvas, 'aria-label', `Page ${this.id}`);
        this.renderer.setStyle(canvas, 'height', `${coercedHeight}px`);
        this.renderer.setStyle(canvas, 'width', `${coercedWidth}px`);
        return canvas;
    }
    setPageLabel(label) {
        this._pageLabel = typeof label === 'string' ? label : null;
        if (this._pageLabel !== null) {
            this.container.setAttribute('data-page-label', this._pageLabel);
        }
        else {
            this.container.removeAttribute('data-page-label');
        }
    }
    getPagePoint(x, y) {
        return this.viewport.convertToPdfPoint(x, y);
    }
    get textLayer() {
        return this._textLayer;
    }
    get viewport() {
        return this._viewport;
    }
    get renderingState() {
        return this._renderingState;
    }
    get renderingId() {
        return 'page' + this.id;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-page-viewer-ref.ts":
/*!***********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-page-viewer-ref.ts ***!
  \***********************************************************/
/*! exports provided: PdfPageViewerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewerRef", function() { return PdfPageViewerRef; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models */ "../mnj-ngx-pdfviewer/src/lib/models/index.ts");
/* harmony import */ var _pdf_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pdf-container */ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts");
/* harmony import */ var _pdf_page_ref__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pdf-page-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-page-ref.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");








/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["normalizePassiveListenerOptions"])({
    passive: true,
});
class PdfPageViewerRef extends _pdf_container__WEBPACK_IMPORTED_MODULE_5__["PdfContainer"] {
    constructor(id, renderingQueue, linkService, findController, downloadManager, _config) {
        super(renderingQueue);
        this.id = id;
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.findController = findController;
        this.downloadManager = downloadManager;
        this._config = _config;
        this._currentScale = null;
        this._buffer = new _utils__WEBPACK_IMPORTED_MODULE_7__["PDFPageViewBuffer"](this._config.maxPagesRendered);
        this._pageViewsReady = false;
        this._scrollMode = _models__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"].VERTICAL;
        this._spreadMode = _models__WEBPACK_IMPORTED_MODULE_4__["SpreadMode"].NONE;
        this._renderType = _models__WEBPACK_IMPORTED_MODULE_4__["RendererType"].CANVAS;
        //Events
        this.pagesLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pageLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.pageChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.scaleChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.rotationChanging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.updateViewArea = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._scrollUpdate = () => {
            if (this.pagesCount === 0) {
                return;
            }
            this.update();
        };
        /** Handler that is invoked when the user scrolls into the pdf container */
        this._scrollMove = () => {
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
        if (findController) {
            this.findController.pdfPageContainer = this;
        }
        this._currentScaleNumber = 1;
        this._currentScale = _config.scale;
        this._pagesRotation = _config.rotation;
        this._currentPageNumber = _config.initialPage;
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(rootElement);
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
            this.scroll = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["watchScroll"])(this.container, this._scrollUpdate);
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
    setDocument(pdfDocument) {
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
        const pagesCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_2__["createPromiseCapability"]();
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
            const viewport = firstPage.getViewport({ scale: scale * _utils__WEBPACK_IMPORTED_MODULE_7__["CSS_UNITS"] });
            for (let pageNum = 1; pageNum <= numPages; ++pageNum) {
                const pageRef = new _pdf_page_ref__WEBPACK_IMPORTED_MODULE_6__["PdfPageRef"](this.container, pageNum, viewport.clone(), this.findController, this.linkService, this.downloadManager, this.renderingQueue, this.renderer);
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
                pdfDocument.getPage(pageNum).then((pdfPage) => {
                    this.pageLoaded.next({ pageIndex: pdfPage.pageNumber });
                    const pageView = this.items[pageNum - 1];
                    if (!pageView.pdfPage) {
                        pageView.setPdfPage(pdfPage);
                    }
                    if (--getPagesLeft === 0) {
                        pagesCapability.resolve();
                    }
                }, (reason) => {
                    console.error(`Unable to get page ${pageNum} to initialize viewer`, reason);
                    if (--getPagesLeft === 0) {
                        pagesCapability.resolve();
                    }
                });
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
    _setCurrentPageNumber(val, resetCurrentPageView = false) {
        if (this._currentPageNumber === val) {
            if (resetCurrentPageView) {
                this._resetCurrentPageView();
            }
            return true;
        }
        if (!(0 < val && val <= this.pagesCount)) {
            return false;
        }
        const oldPageNumber = this._currentPageNumber;
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
    get currentScaleNumber() {
        return this._currentScaleNumber;
    }
    /**
     * @param {number} val - Scale of the pages in percents.
     */
    set currentScaleNumber(val) {
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
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isValidRotation"])(rotation)) {
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
        this._buffer.resize(newCacheSize, visiblePages.map((v) => v.view));
        this.renderingQueue.renderHighestPriority(visible);
        this._updateHelper(visiblePages);
        const oldLocation = this._location;
        this._updateLocation(visible.first);
        this.updateViewArea.next({
            oldLocation: oldLocation,
            actualLocation: this._location,
        });
    }
    _updateHelper(visiblePages) {
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
    updateMatches(pageIndex) {
        if (pageIndex === -1) {
            this.items.forEach((item) => item.updateMatches());
        }
        else {
            this.items[pageIndex].updateMatches();
        }
    }
    _resetView() {
        super._resetView();
        this._currentScaleNumber = 1;
        this._currentScale = null;
        this._buffer = new _utils__WEBPACK_IMPORTED_MODULE_7__["PDFPageViewBuffer"](this._config.maxPagesRendered);
        this._location = null;
        this._pageViewsReady = false;
        this._scrollMode = _models__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"].VERTICAL;
        this._spreadMode = _models__WEBPACK_IMPORTED_MODULE_4__["SpreadMode"].NONE;
        // ... and reset the Scroll mode CSS class(es) afterwards.
        this._updateScrollMode();
    }
    /**
     * Refreshes page view: scrolls to the current page and updates the scale.
     * @private
     */
    _resetCurrentPageView() {
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
    forceRendering(currentlyVisiblePages) {
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
        const pageWidth = (changeOrientation ? pageView.height : pageView.width) / pageView.scaleNumber / _utils__WEBPACK_IMPORTED_MODULE_7__["CSS_UNITS"];
        const pageHeight = (changeOrientation ? pageView.width : pageView.height) / pageView.scaleNumber / _utils__WEBPACK_IMPORTED_MODULE_7__["CSS_UNITS"];
        let scale = 0;
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
                widthScale = (this.container.clientWidth - hPadding) / width / _utils__WEBPACK_IMPORTED_MODULE_7__["CSS_UNITS"];
                heightScale = (this.container.clientHeight - vPadding) / height / _utils__WEBPACK_IMPORTED_MODULE_7__["CSS_UNITS"];
                scale = Math.min(Math.abs(widthScale), Math.abs(heightScale));
                break;
            default:
                console.error(`${this.id}.scrollPageIntoView: ` + `"${destArray[1].name}" is not a valid destination type.`);
                return;
        }
        if (scale && scale !== this._currentScaleNumber) {
            this.currentScale = scale;
        }
        else if (this._currentScaleNumber === 0) {
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
    _updateLocation(firstPage) {
        const currentScale = this._currentScaleNumber;
        const currentScaleValue = this.currentScale;
        const normalizedScaleValue = parseFloat(currentScaleValue.toString()) === currentScale
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
    _scrollIntoView({ pageDiv, pageSpot = null, pageNumber = null }) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_7__["scrollIntoView"])(pageDiv, this.container, pageSpot);
    }
    _cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    _updateScrollMode(pageNumber = null) {
        const scrollMode = this._scrollMode;
        const viewer = this.container;
        viewer.classList.toggle('scrollHorizontal', scrollMode === _models__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"].HORIZONTAL);
        viewer.classList.toggle('scrollWrapped', scrollMode === _models__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"].WRAPPED);
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
    _setScale(value, noScroll = false) {
        let scale = parseFloat(`${value}`);
        if (scale > 0) {
            this._setScaleUpdatePages(scale, value, noScroll);
        }
        else {
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
                    const horizontalScale = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["isPortraitOrientation"])(currentPage)
                        ? pageWidthScale
                        : Math.min(pageHeightScale, pageWidthScale);
                    scale = Math.min(_models__WEBPACK_IMPORTED_MODULE_4__["MAX_AUTO_SCALE"], horizontalScale);
                    break;
                default:
                    console.error(`${this.id}._setScale: "${value}" is an unknown zoom value.`);
                    return;
            }
            this._setScaleUpdatePages(scale, value, noScroll);
        }
    }
    _setScaleUpdatePages(newScaleNumber, newScale, noScroll = false) {
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
            let page = this._currentPageNumber, dest;
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
    _isSameScale(oldScale, newScale) {
        if (newScale === oldScale) {
            return true;
        }
        return Math.abs(newScale - oldScale) < 1e-15;
    }
    _getVisiblePages() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_7__["getVisibleElements"])(this.container, this.items, true, this._isScrollModeHorizontal);
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('scroll', this._scrollMove, passiveEventListenerOptions);
    }
    get pagesCount() {
        return this.items.length;
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        this._disabled = value;
    }
    get _isScrollModeHorizontal() {
        // Used to ensure that pre-rendering of the next/previous page works
        // correctly, since Scroll/Spread modes are ignored in Presentation Mode.
        return this.isInPresentationMode ? false : this._scrollMode === _models__WEBPACK_IMPORTED_MODULE_4__["ScrollMode"].HORIZONTAL;
    }
    get isInPresentationMode() {
        return this.presentationModeState === _models__WEBPACK_IMPORTED_MODULE_4__["PresentationModeState"].FULLSCREEN;
    }
    get isChangingPresentationMode() {
        return this.presentationModeState === _models__WEBPACK_IMPORTED_MODULE_4__["PresentationModeState"].CHANGING;
    }
    get renderType() {
        return this._renderType;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-ref.ts":
/*!*********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-ref.ts ***!
  \*********************************************************/
/*! exports provided: PdfThumbnailRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailRef", function() { return PdfThumbnailRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pdf_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-container */ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");





class PdfThumbnailRef extends _pdf_container__WEBPACK_IMPORTED_MODULE_2__["PdfContainerItem"] {
    constructor(thumbnailContainer, id, defaultViewport, linkService, renderingQueue, renderer) {
        super(id, defaultViewport, renderingQueue, renderer);
        this.thumbnailContainer = thumbnailContainer;
        this.id = id;
        this.defaultViewport = defaultViewport;
        this.linkService = linkService;
        this.renderingQueue = renderingQueue;
        this.renderer = renderer;
        this._container = this.createItemContainer();
        const anchor = this.getOrCreateAnchorContainer();
        anchor.appendChild(this.container);
        this.thumbnailContainer.appendChild(anchor);
    }
    setPdfPage(pdfPage) {
        this._pdfPage = pdfPage;
        this.pdfPageRotate = pdfPage.rotate;
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = pdfPage.getViewport({ scale: 1, rotation: totalRotation });
        this.reset();
    }
    reset() {
        this.cancelRendering();
        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].INITIAL;
        if (this.container) {
            this._updateItemContainer();
        }
        this._thumbnailAnchor.removeAttribute('data-loaded');
        const childNodes = this.container.childNodes;
        for (let i = childNodes.length - 1; i >= 0; i--) {
            this.container.removeChild(childNodes[i]);
        }
        if (this.canvas) {
            // Zeroing the width and height causes Firefox to release graphics
            // resources immediately, which can greatly reduce memory consumption.
            this.canvas.width = 0;
            this.canvas.height = 0;
            delete this.canvas;
        }
        if (this._thumbnailImage) {
            this._thumbnailImage.removeAttribute('src');
            delete this._thumbnailImage;
        }
    }
    update(rotation) {
        if (typeof rotation !== 'undefined') {
            this.rotation = rotation;
        }
        const totalRotation = (this.rotation + this.pdfPageRotate) % 360;
        this._viewport = this._viewport.clone({
            scale: 1,
            rotation: totalRotation,
        });
        this.reset();
    }
    draw() {
        if (this._renderingState !== _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].INITIAL) {
            console.error('Must be in new state before drawing');
            return Promise.resolve(undefined);
        }
        this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].RUNNING;
        const renderCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createPromiseCapability"]();
        const finishRenderTask = (error) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // The renderTask may have been replaced by a new one, so only remove
            // the reference to the renderTask if it matches the one that is
            // triggering this callback.
            if (renderTask === this._renderTask) {
                this._renderTask = null;
            }
            if (error instanceof pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["RenderingCancelledException"]) {
                console.error(error);
                renderCapability.resolve(undefined);
                return;
            }
            this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].FINISHED;
            this._convertCanvasToImage();
            if (!error) {
                renderCapability.resolve(undefined);
            }
            else {
                renderCapability.reject(error);
            }
        });
        const ctx = this._getPageDrawContext();
        const drawViewport = this.viewport.clone({
            scale: this.canvasWidth / this.width,
        });
        const renderContinueCallback = (cont) => {
            if (!this.renderingQueue.isHighestPriority(this)) {
                this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].PAUSED;
                this.resume = () => {
                    this._renderingState = _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].RUNNING;
                    cont();
                };
                return;
            }
            cont();
        };
        const renderContext = {
            canvasContext: ctx,
            viewport: drawViewport,
        };
        this._renderTask = this._pdfPage.render(renderContext);
        const renderTask = this._renderTask;
        renderTask.onContinue = renderContinueCallback;
        renderTask.promise.then(() => finishRenderTask(null), (error) => finishRenderTask(error));
        return renderCapability.promise;
    }
    getOrCreateAnchorContainer() {
        if (!this._thumbnailAnchor) {
            this._thumbnailAnchor = this.createThumbnailAnchor();
        }
        return this._thumbnailAnchor;
    }
    createThumbnailAnchor() {
        const thumbnailAnchor = this.renderer.createElement('a');
        this.renderer.setProperty(thumbnailAnchor, 'href', this.linkService.getAnchorUrl('#page' + this.id));
        this.renderer.setProperty(thumbnailAnchor, 'title', this._thumbPageTitle);
        this.renderer.listen(thumbnailAnchor, 'click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.linkService.page = this.id;
            return false;
        });
        if (this._pdfPage) {
            this.renderer.setAttribute(thumbnailAnchor, 'data-page-number', `${this.id}`);
        }
        return thumbnailAnchor;
    }
    createItemContainer() {
        const thumbnail = this.renderer.createElement('div');
        this.renderer.addClass(thumbnail, 'pdf-thumbnail');
        this.renderer.setStyle(thumbnail, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(thumbnail, 'height', `${this.canvasHeight}px`);
        return thumbnail;
    }
    _updateItemContainer() {
        this.renderer.setStyle(this.container, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(this.container, 'height', `${this.canvasHeight}px`);
        return this.container;
    }
    _getOrBuildImgThumbnail() {
        if (!this._thumbnailImage) {
            this._thumbnailImage = this._createImgThumbnail();
        }
        this.renderer.setAttribute(this.container, 'data-loaded', `${true}`);
        this.renderer.appendChild(this.container, this._thumbnailImage);
        return this._thumbnailImage;
    }
    _createImgThumbnail() {
        const image = this.renderer.createElement('img');
        this.renderer.addClass(image, 'thumbnailImage');
        this.renderer.setAttribute(image, 'aria-label', `Page ${this.id}`);
        this.renderer.setStyle(image, 'width', `${this.canvasWidth}px`);
        this.renderer.setStyle(image, 'height', `${this.canvasHeight}px`);
        this.renderer.setProperty(image, 'src', this.canvas.toDataURL());
        return image;
    }
    _getPageDrawContext(noCtxScale = false) {
        if (this.canvas) {
            return;
        }
        const canvas = this.renderer.createElement('canvas');
        // Keep the no-thumbnail outline visible, i.e. `data-loaded === false`,
        // until rendering/image conversion is complete, to avoid display issues.
        this.canvas = canvas;
        const ctx = canvas.getContext('2d', { alpha: false });
        const outputScale = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getOutputScale"])(ctx);
        canvas.width = this.canvasWidth * outputScale.sx || 0;
        canvas.height = this.canvasHeight * outputScale.sy || 0;
        canvas.style.width = this.canvasWidth + 'px';
        canvas.style.height = this.canvasHeight + 'px';
        if (!noCtxScale && outputScale.scaled) {
            ctx.scale(outputScale.sx, outputScale.sy);
        }
        return ctx;
    }
    _convertCanvasToImage() {
        this._getPageDrawContext();
        if (this._renderingState !== _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].FINISHED) {
            return;
        }
        this.container.appendChild(this._getOrBuildImgThumbnail());
        this._thumbnailAnchor.setAttribute('data-loaded', `${true}`);
        // Zeroing the width and height causes Firefox to release graphics
        // resources immediately, which can greatly reduce memory consumption.
        this.canvas.width = 0;
        this.canvas.height = 0;
        delete this.canvas;
    }
    /**
     * PLEASE NOTE: Most likely you want to use the `this.reset()` method,
     *              rather than calling this one directly.
     */
    cancelRendering() {
        if (this._renderTask) {
            this._renderTask.cancel();
            this._renderTask = null;
        }
        this.resume = null;
    }
    /**
     * @param {string|null} label
     */
    setPageLabel(label) {
        this._pageLabel = typeof label === 'string' ? label : null;
        this.renderer.setProperty(this.container, 'title', this._thumbPageTitle);
        if (this._renderingState !== _services__WEBPACK_IMPORTED_MODULE_3__["RenderingStates"].FINISHED) {
            return;
        }
        const pageTitle = this._thumbPageTitle;
        if (this._thumbnailImage) {
            this._thumbnailImage.setAttribute('aria-label', `${pageTitle}`);
        }
    }
    get _thumbPageTitle() {
        return this._pageLabel ? this._pageLabel : this.id;
    }
    get viewport() {
        return this._viewport;
    }
    get width() {
        return this.viewport.width;
    }
    get height() {
        return this.viewport.height;
    }
    get canvasWidth() {
        return 98;
    }
    get canvasHeight() {
        return 98 / (this.width / this.height) || 0;
    }
    get container() {
        return this._container;
    }
    get renderingId() {
        return `thumbnail-${this.id}`;
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-viewer-ref.ts":
/*!****************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-viewer-ref.ts ***!
  \****************************************************************/
/*! exports provided: PdfThumbnailViewerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewerRef", function() { return PdfThumbnailViewerRef; });
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
/* harmony import */ var _pdf_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-container */ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts");
/* harmony import */ var _pdf_thumbnail_ref__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf-thumbnail-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-ref.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");





/** Options that can be used to bind a passive event listener. */
const passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["normalizePassiveListenerOptions"])({
    passive: true,
});
class PdfThumbnailViewerRef extends _pdf_container__WEBPACK_IMPORTED_MODULE_2__["PdfContainer"] {
    constructor(id, linkService, renderingQueue) {
        super(renderingQueue);
        this.id = id;
        this.linkService = linkService;
        this.renderingQueue = renderingQueue;
        this._scrollUpdate = () => {
            if (!this.items || this.items.length === 0) {
                return;
            }
            this.update();
        };
    }
    withRootElement(rootElement) {
        const element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_0__["coerceElement"])(rootElement);
        this.renderer.setStyle(element, 'overflow', 'auto');
        this.renderer.setStyle(element, 'height', '100%');
        this.renderer.setStyle(element, 'display', 'block');
        if (element !== this.container) {
            if (this.container) {
                this._removeRootElementListeners(this.container);
            }
            this.container = element;
            this.renderingQueue.setThumbnailViewer(this);
            this.scroll = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["watchScroll"])(this.container, this._scrollUpdate);
            this._resetView();
        }
        return this;
    }
    dispose() {
        this.items.forEach((i) => i.reset());
        this.setDocument(null);
        this.renderingQueue.setThumbnailViewer(null);
    }
    setDocument(pdfDocument) {
        if (this.pdfDocument) {
            this._cancelRendering();
            this._resetView();
        }
        this.pdfDocument = pdfDocument;
        if (!pdfDocument) {
            return;
        }
        pdfDocument
            .getPage(1)
            .then((firstPdfPage) => {
            const pagesCount = pdfDocument.numPages;
            const viewport = firstPdfPage.getViewport({ scale: 1 });
            for (let pageNum = 1; pageNum <= pagesCount; ++pageNum) {
                const thumbnail = new _pdf_thumbnail_ref__WEBPACK_IMPORTED_MODULE_3__["PdfThumbnailRef"](this.container, pageNum, viewport.clone(), this.linkService, this.renderingQueue, this.renderer);
                this.items.push(thumbnail);
            }
            // Set the first `pdfPage` immediately, since it's already loaded,
            // rather than having to repeat the `PDFDocumentProxy.getPage` call in
            // the `this._ensurePdfPageLoaded` method before rendering can start.
            const firstThumbnailView = this.items[0];
            if (firstThumbnailView) {
                firstThumbnailView.setPdfPage(firstPdfPage);
            }
            // Ensure that the current thumbnail is always highlighted on load.
            const thumbnailView = this.items[this._currentPageNumber - 1];
            thumbnailView.container.classList.add('selected');
        })
            .catch((reason) => {
            console.error('Unable to initialize thumbnail viewer', reason);
        });
    }
    scrollThumbnailIntoView(pageNumber) {
        if (!this.pdfDocument) {
            return;
        }
        const thumbnailView = this.items[pageNumber - 1];
        if (!thumbnailView) {
            console.error('scrollThumbnailIntoView: Invalid "pageNumber" parameter.');
            return;
        }
        if (pageNumber !== this._currentPageNumber) {
            const prevThumbnailView = this.items[this._currentPageNumber - 1];
            // Remove the highlight from the previous thumbnail...
            prevThumbnailView.container.classList.remove('selected');
            // ... and add the highlight to the new thumbnail.
            thumbnailView.container.classList.add('selected');
        }
        const visibleThumbs = this._getVisibleThumbs();
        const numVisibleThumbs = visibleThumbs.views.length;
        // If the thumbnail isn't currently visible, scroll it into view.
        if (numVisibleThumbs > 0) {
            const first = visibleThumbs.first.id;
            // Account for only one thumbnail being visible.
            const last = numVisibleThumbs > 1 ? visibleThumbs.last.id : first;
            let shouldScroll = false;
            if (pageNumber <= first || pageNumber >= last) {
                shouldScroll = true;
            }
            else {
                visibleThumbs.views.some((view) => {
                    if (view.id !== pageNumber) {
                        return false;
                    }
                    shouldScroll = view.percent < 100;
                    return true;
                });
            }
            if (shouldScroll) {
                Object(_utils__WEBPACK_IMPORTED_MODULE_4__["scrollIntoView"])(thumbnailView.container, this.container, { top: -19 });
            }
        }
        this._currentPageNumber = pageNumber;
    }
    update() {
        this.renderingQueue.renderHighestPriority();
    }
    _getVisibleThumbs() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["getVisibleElements"])(this.container, this.items);
    }
    _cancelRendering() {
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            if (this.items[i]) {
                this.items[i].cancelRendering();
            }
        }
    }
    get pagesRotation() {
        return this._pagesRotation;
    }
    set pagesRotation(rotation) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_4__["isValidRotation"])(rotation)) {
            throw new Error('Invalid thumbnails rotation angle.');
        }
        if (!this.pdfDocument) {
            return;
        }
        if (this._pagesRotation === rotation) {
            return; // The rotation didn't change.
        }
        this._pagesRotation = rotation;
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            this.items[i].update(rotation);
        }
    }
    /**
     * @param {Array|null} labels
     */
    setPageLabels(labels) {
        if (!this.pdfDocument) {
            return;
        }
        if (!labels) {
            this._pageLabels = null;
        }
        else if (!(Array.isArray(labels) && this.pdfDocument.numPages === labels.length)) {
            this._pageLabels = null;
            console.error('PDFThumbnailViewer_setPageLabels: Invalid page labels.');
        }
        else {
            this._pageLabels = labels;
        }
        // Update all the `PDFThumbnailView` instances.
        for (let i = 0, ii = this.items.length; i < ii; i++) {
            const label = this._pageLabels && this._pageLabels[i];
            this.items[i].setPageLabel(label);
        }
    }
    forceRendering() {
        const visibleThumbs = this._getVisibleThumbs();
        const thumbView = this.renderingQueue.getHighestPriority(visibleThumbs, this.items, this.scroll.down);
        if (thumbView) {
            this._ensurePdfPageLoaded(thumbView).then(() => this.renderingQueue.renderView(thumbView));
            return true;
        }
        return false;
    }
    /** Removes the manually-added event listeners from the root element. */
    _removeRootElementListeners(element) {
        element.removeEventListener('scroll', this._scrollUpdate, passiveEventListenerOptions);
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-config.ts":
/*!*********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-viewer-config.ts ***!
  \*********************************************************/
/*! exports provided: DEFAULT_PDF_VIEW_CONFIG, MNJ_PDF_VIEW_CONFIGURATION_FACTORY, MNJ_PDF_VIEW_CONFIGURATION, MNJ_PDF_VIEW_CONFIGURATION_PROVIDER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PDF_VIEW_CONFIG", function() { return DEFAULT_PDF_VIEW_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_FACTORY", function() { return MNJ_PDF_VIEW_CONFIGURATION_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION", function() { return MNJ_PDF_VIEW_CONFIGURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_PROVIDER", function() { return MNJ_PDF_VIEW_CONFIGURATION_PROVIDER; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");


const DEFAULT_PDF_VIEW_CONFIG = {
    initialPage: 1,
    scale: 'auto',
    rotation: 0,
    searchOptions: {
        phraseSearch: true,
        caseSensitive: false,
        entireWord: false,
        highlightAll: true,
    },
    printDPI: _services__WEBPACK_IMPORTED_MODULE_1__["PrintDPI"].HIGH,
    maxPagesRendered: 10,
    rendererPagesThreshold: 2,
};
function MNJ_PDF_VIEW_CONFIGURATION_FACTORY(impl) {
    return impl || DEFAULT_PDF_VIEW_CONFIG;
}
/**
 * Injection token that can be used to configure the
 * behavior of the pdf viewer components.
 */
const MNJ_PDF_VIEW_CONFIGURATION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('PDF_VIEW_CONFIG');
const MNJ_PDF_VIEW_CONFIGURATION_PROVIDER = {
    provide: MNJ_PDF_VIEW_CONFIGURATION,
    useFactory: MNJ_PDF_VIEW_CONFIGURATION_FACTORY,
};


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-events.ts":
/*!*********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-viewer-events.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-ref.ts":
/*!******************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-viewer-ref.ts ***!
  \******************************************************/
/*! exports provided: PdfViewerRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRef", function() { return PdfViewerRef; });
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models */ "../mnj-ngx-pdfviewer/src/lib/models/index.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");




class PdfViewerRef {
    constructor(renderingQueue, linkService, downloadManager, printManager, findController) {
        this.renderingQueue = renderingQueue;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.printManager = printManager;
        this.findController = findController;
        // Events
        /** Emits when pdf has been loaded */
        this.pdfLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Emits when pdf properties has been retrieved */
        this.pdfPropertiesLoaded = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /** Emits when pdfjs is rendering the printable version */
        this.pdfPrintProgress = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.findController.linkService = this.linkService;
    }
    get currentPage() {
        return this._currentPage;
    }
    set currentPage(value) {
        if (value < 0 && value > this.pdfDocument.numPages) {
            throw new Error(`Page ${value} doesn't exist in the current pf document`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.currentPageNumber = value;
        }
        this._currentPage = value;
    }
    get currentScale() {
        return this._currentScale;
    }
    set currentScale(value) {
        if (value < _models__WEBPACK_IMPORTED_MODULE_2__["MIN_SCALE"] || value > _models__WEBPACK_IMPORTED_MODULE_2__["MAX_SCALE"]) {
            throw new Error(`Scale must be a value between ${_models__WEBPACK_IMPORTED_MODULE_2__["MIN_SCALE"]} and ${_models__WEBPACK_IMPORTED_MODULE_2__["MAX_SCALE"]}`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.currentScale = value;
        }
        this._currentScale = value;
    }
    get currentRotation() {
        return this._currentRotation;
    }
    set currentRotation(value) {
        if (!Object(_utils__WEBPACK_IMPORTED_MODULE_3__["isValidRotation"])(value)) {
            throw new Error(`${value} is not a valid rotation value must be one of 0, 90, 180, 270`);
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.pagesRotation = value;
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.pagesRotation = value;
        }
        this._currentRotation = value;
    }
    get currentSearchQuery() {
        return this._currentSearchQuery || '';
    }
    set currentSearchQuery(value) {
        this._currentSearchQuery = value;
        this.search();
    }
    get currentSearchOptions() {
        return this._currentSearchOptions;
    }
    set currentSearchOptions(value) {
        this._currentSearchOptions = value;
        this.search();
    }
    zoomIn(ticks) {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        let newScale = this.pdfPageViewer.currentScaleNumber;
        do {
            // @ts-ignore
            newScale = (newScale * _models__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCALE_DELTA"]).toFixed(2);
            newScale = Math.ceil(newScale * 10) / 10;
            newScale = Math.min(_models__WEBPACK_IMPORTED_MODULE_2__["MAX_SCALE"], newScale);
        } while (--ticks > 0 && newScale < _models__WEBPACK_IMPORTED_MODULE_2__["MAX_SCALE"]);
        this.pdfPageViewer.currentScale = newScale;
    }
    zoomOut(ticks) {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        let newScale = this.pdfPageViewer.currentScaleNumber;
        do {
            // @ts-ignore
            newScale = (newScale / _models__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCALE_DELTA"]).toFixed(2);
            newScale = Math.floor(newScale * 10) / 10;
            newScale = Math.max(_models__WEBPACK_IMPORTED_MODULE_2__["MIN_SCALE"], newScale);
        } while (--ticks > 0 && newScale > _models__WEBPACK_IMPORTED_MODULE_2__["MIN_SCALE"]);
        this.pdfPageViewer.currentScale = newScale;
    }
    zoomReset() {
        if (this.pdfPageViewer.isInPresentationMode) {
            return;
        }
        this.pdfPageViewer.currentScale = _models__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_SCALE_VALUE"];
    }
    downloadPdf(pdfSrc) {
        const fileName = this.pdfProperties.fileName || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPDFFileNameFromURL"])(pdfSrc);
        if (!this.pdfDocument) {
            if (!pdfSrc) {
                throw new Error(`There is no pdf loaded`);
            }
            this.downloadManager.downloadUrl(pdfSrc, fileName);
        }
        this.pdfDocument
            .getData()
            .then((data) => {
            const blob = new Blob([data], { type: 'application/pdf' });
            this.downloadManager.download(blob, pdfSrc, fileName);
        })
            .catch((err) => {
            console.log(err);
            this.downloadManager.downloadUrl(pdfSrc, fileName);
        }); // Error occurred, try downloading with the URL.
    }
    printPdf(printDPI) {
        if (!this.pdfDocument) {
            throw new Error('There is no pdf to print');
        }
        if (!this.pdfPageViewer.pageViewsReady) {
            throw new Error('Print is not ready, pdf loading');
        }
        const pagesOverview = this.pdfPageViewer.getPagesOverview();
        this.printManager.print(this, this.pdfDocument, pagesOverview, printDPI);
    }
    search() {
        this.findController.executeCommand('find', Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions));
    }
    findNext() {
        this.findController.executeCommand('findagain', Object.assign(Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions), { findPrevious: false }));
    }
    findPrevious() {
        this.findController.executeCommand('findagain', Object.assign(Object.assign({ query: this.currentSearchQuery }, this._currentSearchOptions), { findPrevious: true }));
    }
    getDocumentProperties() {
        return Promise.all([
            this.pdfDocument.getDownloadInfo(),
            this.pdfDocument.getMetadata(),
            this.pdfDocument.getPage(1),
        ]).then(([size, data, page]) => {
            const { info, contentDispositionFilename } = data;
            const docProperties = {
                fileName: contentDispositionFilename || Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPDFFileNameFromURL"])(this._pdfSrc || ''),
                fileSize: size.length,
                title: info.Title,
                author: info.Author,
                subject: info.Subject,
                keywords: info.Keywords,
                creationDate: pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["PDFDateString"].toDateObject(info.CreationDate),
                updateDate: pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["PDFDateString"].toDateObject(info.ModDate),
                creator: info.Creator,
                pdfProducer: info.Producer,
                pdfVersion: info.PDFFormatVersion,
                pageCount: this.pdfDocument.numPages,
                pageSize: Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getPageSizeMilliliters"])(page),
            };
            this.pdfProperties = docProperties;
            return docProperties;
        });
    }
    cleanUp() {
        if (this.pdfPageViewer) {
            this.pdfPageViewer.cleanup();
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.cleanup();
        }
        // We don't want to remove fonts used by active page SVGs.
        if (this.pdfPageViewer.renderType !== _models__WEBPACK_IMPORTED_MODULE_2__["RendererType"].SVG) {
            this.pdfDocument.cleanup();
        }
    }
    dispose() {
        if (!this.pdfDocument) {
            return; // run cleanup when document is loaded
        }
        if (this.pdfPageViewer) {
            this.pdfPageViewer.dispose();
        }
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.dispose();
        }
        // We don't want to remove fonts used by active page SVGs.
        if (this.pdfPageViewer.renderType !== _models__WEBPACK_IMPORTED_MODULE_2__["RendererType"].SVG) {
            this.pdfDocument.cleanup();
        }
    }
    syncPageAndThumbnail(pageIndex) {
        this._currentPage = pageIndex;
        if (this.pdfThumbnailViewer) {
            this.pdfThumbnailViewer.scrollThumbnailIntoView(pageIndex);
        }
    }
    get pdfSrc() {
        return this._pdfSrc;
    }
    set pdfSrc(value) {
        if (this._pdfSrc) {
            this.cleanUp();
        }
        if (value) {
            this._pdfSrc = value;
            pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["getDocument"](value)
                .promise.then((pdfDocument) => {
                this.pdfDocument = pdfDocument;
                this.pdfLoaded.next({ pdf: pdfDocument });
            })
                .then(() => {
                this.getDocumentProperties().then((pdfProperties) => this.pdfPropertiesLoaded.next({ properties: pdfProperties }));
            });
        }
    }
    get pdfDocument() {
        return this._pdfDocument;
    }
    set pdfDocument(value) {
        this._pdfDocument = value;
        this.getDocumentProperties();
        this.linkService.setDocument(this.pdfDocument);
        if (this._pdfPageViewer) {
            this._pdfPageViewer.setDocument(this.pdfDocument);
        }
        if (this._pdfThumbnailViewer) {
            this._pdfThumbnailViewer.setDocument(this.pdfDocument);
        }
        if (this.pdfOutlineViewer) {
            this.pdfOutlineViewer.setDocument(this.pdfDocument);
        }
        if (this.pdfAttachmentViewer) {
            this.pdfAttachmentViewer.setDocument(this.pdfDocument);
        }
    }
    get pdfPageViewer() {
        return this._pdfPageViewer;
    }
    set pdfPageViewer(value) {
        this._pdfPageViewer = value;
        if (this.pdfDocument) {
            this.pdfPageViewer.setDocument(this.pdfDocument);
        }
    }
    get pdfThumbnailViewer() {
        return this._pdfThumbnailViewer;
    }
    set pdfThumbnailViewer(value) {
        this._pdfThumbnailViewer = value;
        if (this.pdfDocument) {
            this.pdfThumbnailViewer.setDocument(this.pdfDocument);
        }
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-registry.ts":
/*!***********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-viewer-registry.ts ***!
  \***********************************************************/
/*! exports provided: PdfViewerRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRegistry", function() { return PdfViewerRegistry; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pdfjs-dist/build/pdf.worker.entry */ "../../node_modules/pdfjs-dist/build/pdf.worker.entry.js");
/* harmony import */ var pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_2__);




function registerWorker() {
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["GlobalWorkerOptions"].workerSrc = pdfjs_dist_build_pdf_worker_entry__WEBPACK_IMPORTED_MODULE_2__;
}
function unRegisterWorker() {
    pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["GlobalWorkerOptions"].workerSrc = null;
}
class PdfViewerRegistry {
    constructor() {
        this._pdfViewerRefInstances = {};
    }
    registerPdfViewer(viewerId, pdfViewerRef) {
        if (Object.keys(this._pdfViewerRefInstances).length === 0) {
            registerWorker();
        }
        this._pdfViewerRefInstances[viewerId] = pdfViewerRef;
    }
    removePdfViewer(viewerId) {
        this._pdfViewerRefInstances[viewerId] = null;
        if (Object.keys(this._pdfViewerRefInstances).length) {
            unRegisterWorker();
        }
    }
    getReference(viewerId) {
        const viewerRef = this._pdfViewerRefInstances[viewerId];
        if (!viewerRef) {
            throw new Error(`Viewer ${viewerId} does not exist on the page`);
        }
        return viewerRef;
    }
    ngOnDestroy() {
        Object.keys(this._pdfViewerRefInstances).forEach((instance) => this.removePdfViewer(instance));
    }
}
PdfViewerRegistry.ɵfac = function PdfViewerRegistry_Factory(t) { return new (t || PdfViewerRegistry)(); };
PdfViewerRegistry.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfViewerRegistry, factory: PdfViewerRegistry.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfViewerRegistry, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer.module.ts":
/*!*********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/pdf-viewer.module.ts ***!
  \*********************************************************/
/*! exports provided: MnjPdfViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewerModule", function() { return MnjPdfViewerModule; });
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/pdf-attachments-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer.ts");
/* harmony import */ var _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/pdf-download-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button.ts");
/* harmony import */ var _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/pdf-page-loading */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-loading.ts");
/* harmony import */ var _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/pdf-page-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer.ts");
/* harmony import */ var _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/pdf-print-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button.ts");
/* harmony import */ var _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/pdf-properties-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button.ts");
/* harmony import */ var _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/pdf-search-input */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input.ts");
/* harmony import */ var _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/pdf-thumbnail-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer.ts");
/* harmony import */ var _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./directives/pdf-toc-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer.ts");
/* harmony import */ var _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/pdf-upload-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button.ts");
/* harmony import */ var _directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./directives/pdf-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer.ts");
/* harmony import */ var _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pdf-viewer-config */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-config.ts");
















class MnjPdfViewerModule {
}
MnjPdfViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MnjPdfViewerModule });
MnjPdfViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function MnjPdfViewerModule_Factory(t) { return new (t || MnjPdfViewerModule)(); }, providers: [_pdf_viewer_config__WEBPACK_IMPORTED_MODULE_14__["MNJ_PDF_VIEW_CONFIGURATION_PROVIDER"]], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MnjPdfViewerModule, { declarations: [_directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["MnjPdfViewer"],
        _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_5__["PdfPageLoading"],
        _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_4__["PdfDownloadButton"],
        _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_7__["PdfPrintButton"],
        _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfThumbnailViewer"],
        _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfPageViewer"],
        _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_9__["PdfSearchInput"],
        _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfAttachmentsViewer"],
        _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfTocViewer"],
        _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_12__["PdfUploadButton"],
        _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_8__["PdfPropertiesButton"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]], exports: [_directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["MnjPdfViewer"],
        _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_5__["PdfPageLoading"],
        _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_4__["PdfDownloadButton"],
        _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_7__["PdfPrintButton"],
        _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfThumbnailViewer"],
        _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfPageViewer"],
        _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_9__["PdfSearchInput"],
        _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfAttachmentsViewer"],
        _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfTocViewer"],
        _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_12__["PdfUploadButton"],
        _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_8__["PdfPropertiesButton"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](MnjPdfViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_0__["ScrollingModule"]],
                declarations: [
                    _directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["MnjPdfViewer"],
                    _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_5__["PdfPageLoading"],
                    _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_4__["PdfDownloadButton"],
                    _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_7__["PdfPrintButton"],
                    _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfThumbnailViewer"],
                    _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfPageViewer"],
                    _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_9__["PdfSearchInput"],
                    _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfAttachmentsViewer"],
                    _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfTocViewer"],
                    _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_12__["PdfUploadButton"],
                    _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_8__["PdfPropertiesButton"],
                ],
                providers: [_pdf_viewer_config__WEBPACK_IMPORTED_MODULE_14__["MNJ_PDF_VIEW_CONFIGURATION_PROVIDER"]],
                exports: [
                    _directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_13__["MnjPdfViewer"],
                    _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_5__["PdfPageLoading"],
                    _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_4__["PdfDownloadButton"],
                    _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_7__["PdfPrintButton"],
                    _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_10__["PdfThumbnailViewer"],
                    _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_6__["PdfPageViewer"],
                    _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_9__["PdfSearchInput"],
                    _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfAttachmentsViewer"],
                    _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_11__["PdfTocViewer"],
                    _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_12__["PdfUploadButton"],
                    _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_8__["PdfPropertiesButton"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/public-api.ts":
/*!**************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/public-api.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./directives/pdf-attachments-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentsViewer", function() { return _directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_0__["PdfAttachmentsViewer"]; });

/* harmony import */ var _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directives/pdf-download-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadButton", function() { return _directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_1__["PdfDownloadButton"]; });

/* harmony import */ var _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./directives/pdf-page-loading */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-loading.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPageLoading", function() { return _directives_pdf_page_loading__WEBPACK_IMPORTED_MODULE_2__["PdfPageLoading"]; });

/* harmony import */ var _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/pdf-page-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewer", function() { return _directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_3__["PdfPageViewer"]; });

/* harmony import */ var _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/pdf-print-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPrintButton", function() { return _directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_4__["PdfPrintButton"]; });

/* harmony import */ var _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/pdf-properties-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPropertiesButton", function() { return _directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_5__["PdfPropertiesButton"]; });

/* harmony import */ var _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/pdf-search-input */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfSearchInput", function() { return _directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_6__["PdfSearchInput"]; });

/* harmony import */ var _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/pdf-thumbnail-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewer", function() { return _directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_7__["PdfThumbnailViewer"]; });

/* harmony import */ var _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directives/pdf-toc-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfTocViewer", function() { return _directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_8__["PdfTocViewer"]; });

/* harmony import */ var _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/pdf-upload-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfUploadButton", function() { return _directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_9__["PdfUploadButton"]; });

/* harmony import */ var _directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/pdf-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewer", function() { return _directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_10__["MnjPdfViewer"]; });

/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./models */ "../mnj-ngx-pdfviewer/src/lib/models/index.ts");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _models__WEBPACK_IMPORTED_MODULE_11__) if(["PdfAttachmentsViewer","PdfDownloadButton","PdfPageLoading","PdfPageViewer","PdfPrintButton","PdfPropertiesButton","PdfSearchInput","PdfThumbnailViewer","PdfTocViewer","PdfUploadButton","MnjPdfViewer","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _models__WEBPACK_IMPORTED_MODULE_11__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services */ "../mnj-ngx-pdfviewer/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadManager", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PdfDownloadManager"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindState", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["FindState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfFindController", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PdfFindController"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMEOUT", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["CLEANUP_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingStates", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["RenderingStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfRenderingQueue", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PdfRenderingQueue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfLinkService", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PdfLinkService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrintDPI", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PrintDPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPrintManager", function() { return _services__WEBPACK_IMPORTED_MODULE_12__["PdfPrintManager"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnotationLayerBuilder", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["AnnotationLayerBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultAnnotationLayerFactory", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["DefaultAnnotationLayerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterType", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["CharacterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCharacterType", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getCharacterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PDFPageViewBuffer", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["PDFPageViewBuffer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextLayerBuilder", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["TextLayerBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTextLayerFactory", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["DefaultTextLayerFactory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["rotateLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["rotateRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidRotation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["isValidRotation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSS_UNITS", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["CSS_UNITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["parseQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisibleElements", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getVisibleElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binarySearchFirstItem", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["binarySearchFirstItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementBottomAfterViewTop", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["isElementBottomAfterViewTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementRightAfterViewLeft", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["isElementRightAfterViewLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOutputScale", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getOutputScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "approximateFraction", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["approximateFraction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundToDivide", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["roundToDivide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchScroll", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["watchScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["scrollIntoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPortraitOrientation", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["isPortraitOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPDFFileNameFromURL", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getPDFFileNameFromURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageSizeMilliliters", function() { return _utils__WEBPACK_IMPORTED_MODULE_13__["getPageSizeMilliliters"]; });

/* harmony import */ var _pdf_attachment_viewer_ref__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pdf-attachment-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-attachment-viewer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfAttachmentViewerRef", function() { return _pdf_attachment_viewer_ref__WEBPACK_IMPORTED_MODULE_14__["PdfAttachmentViewerRef"]; });

/* harmony import */ var _pdf_container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pdf-container */ "../mnj-ngx-pdfviewer/src/lib/pdf-container.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfContainer", function() { return _pdf_container__WEBPACK_IMPORTED_MODULE_15__["PdfContainer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfContainerItem", function() { return _pdf_container__WEBPACK_IMPORTED_MODULE_15__["PdfContainerItem"]; });

/* harmony import */ var _pdf_viewer_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pdf-viewer-events */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-events.ts");
/* harmony import */ var _pdf_viewer_events__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_pdf_viewer_events__WEBPACK_IMPORTED_MODULE_16__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _pdf_viewer_events__WEBPACK_IMPORTED_MODULE_16__) if(["PdfAttachmentsViewer","PdfDownloadButton","PdfPageLoading","PdfPageViewer","PdfPrintButton","PdfPropertiesButton","PdfSearchInput","PdfThumbnailViewer","PdfTocViewer","PdfUploadButton","MnjPdfViewer","PdfDownloadManager","FindState","PdfFindController","CLEANUP_TIMEOUT","RenderingStates","PdfRenderingQueue","PdfLinkService","PrintDPI","PdfPrintManager","AnnotationLayerBuilder","DefaultAnnotationLayerFactory","CharacterType","getCharacterType","PDFPageViewBuffer","TextLayerBuilder","DefaultTextLayerFactory","rotateLeft","rotateRight","isValidRotation","CSS_UNITS","parseQueryString","getVisibleElements","binarySearchFirstItem","isElementBottomAfterViewTop","isElementRightAfterViewLeft","getOutputScale","approximateFraction","roundToDivide","watchScroll","scrollIntoView","isPortraitOrientation","getPDFFileNameFromURL","getPageSizeMilliliters","PdfAttachmentViewerRef","PdfContainer","PdfContainerItem","default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _pdf_viewer_events__WEBPACK_IMPORTED_MODULE_16__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _pdf_outline_viewer_ref__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pdf-outline-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-outline-viewer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfOutlineViewerRef", function() { return _pdf_outline_viewer_ref__WEBPACK_IMPORTED_MODULE_17__["PdfOutlineViewerRef"]; });

/* harmony import */ var _pdf_page_ref__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pdf-page-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-page-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPageRef", function() { return _pdf_page_ref__WEBPACK_IMPORTED_MODULE_18__["PdfPageRef"]; });

/* harmony import */ var _pdf_page_viewer_ref__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pdf-page-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-page-viewer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPageViewerRef", function() { return _pdf_page_viewer_ref__WEBPACK_IMPORTED_MODULE_19__["PdfPageViewerRef"]; });

/* harmony import */ var _pdf_viewer_ref__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pdf-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRef", function() { return _pdf_viewer_ref__WEBPACK_IMPORTED_MODULE_20__["PdfViewerRef"]; });

/* harmony import */ var _pdf_thumbnail_ref__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pdf-thumbnail-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailRef", function() { return _pdf_thumbnail_ref__WEBPACK_IMPORTED_MODULE_21__["PdfThumbnailRef"]; });

/* harmony import */ var _pdf_thumbnail_viewer_ref__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pdf-thumbnail-viewer-ref */ "../mnj-ngx-pdfviewer/src/lib/pdf-thumbnail-viewer-ref.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfThumbnailViewerRef", function() { return _pdf_thumbnail_viewer_ref__WEBPACK_IMPORTED_MODULE_22__["PdfThumbnailViewerRef"]; });

/* harmony import */ var _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pdf-viewer-config */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PDF_VIEW_CONFIG", function() { return _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_23__["DEFAULT_PDF_VIEW_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_FACTORY", function() { return _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_23__["MNJ_PDF_VIEW_CONFIGURATION_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION", function() { return _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_23__["MNJ_PDF_VIEW_CONFIGURATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MNJ_PDF_VIEW_CONFIGURATION_PROVIDER", function() { return _pdf_viewer_config__WEBPACK_IMPORTED_MODULE_23__["MNJ_PDF_VIEW_CONFIGURATION_PROVIDER"]; });

/* harmony import */ var _pdf_viewer_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pdf-viewer.module */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MnjPdfViewerModule", function() { return _pdf_viewer_module__WEBPACK_IMPORTED_MODULE_24__["MnjPdfViewerModule"]; });

/* harmony import */ var _pdf_viewer_registry__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pdf-viewer-registry */ "../mnj-ngx-pdfviewer/src/lib/pdf-viewer-registry.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfViewerRegistry", function() { return _pdf_viewer_registry__WEBPACK_IMPORTED_MODULE_25__["PdfViewerRegistry"]; });





























/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/index.ts":
/*!******************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/index.ts ***!
  \******************************************************/
/*! exports provided: PdfDownloadManager, FindState, PdfFindController, CLEANUP_TIMEOUT, RenderingStates, PdfRenderingQueue, PdfLinkService, PrintDPI, PdfPrintManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pdf_download_manager_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-download-manager.service */ "../mnj-ngx-pdfviewer/src/lib/services/pdf-download-manager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadManager", function() { return _pdf_download_manager_service__WEBPACK_IMPORTED_MODULE_0__["PdfDownloadManager"]; });

/* harmony import */ var _pdf_find_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf-find-controller */ "../mnj-ngx-pdfviewer/src/lib/services/pdf-find-controller.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FindState", function() { return _pdf_find_controller__WEBPACK_IMPORTED_MODULE_1__["FindState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfFindController", function() { return _pdf_find_controller__WEBPACK_IMPORTED_MODULE_1__["PdfFindController"]; });

/* harmony import */ var _pdf_rendering_queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-rendering-queue */ "../mnj-ngx-pdfviewer/src/lib/services/pdf-rendering-queue.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMEOUT", function() { return _pdf_rendering_queue__WEBPACK_IMPORTED_MODULE_2__["CLEANUP_TIMEOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RenderingStates", function() { return _pdf_rendering_queue__WEBPACK_IMPORTED_MODULE_2__["RenderingStates"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfRenderingQueue", function() { return _pdf_rendering_queue__WEBPACK_IMPORTED_MODULE_2__["PdfRenderingQueue"]; });

/* harmony import */ var _pdf_link_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pdf-link-service */ "../mnj-ngx-pdfviewer/src/lib/services/pdf-link-service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfLinkService", function() { return _pdf_link_service__WEBPACK_IMPORTED_MODULE_3__["PdfLinkService"]; });

/* harmony import */ var _pdf_print_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pdf-print-manager.service */ "../mnj-ngx-pdfviewer/src/lib/services/pdf-print-manager.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrintDPI", function() { return _pdf_print_manager_service__WEBPACK_IMPORTED_MODULE_4__["PrintDPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PdfPrintManager", function() { return _pdf_print_manager_service__WEBPACK_IMPORTED_MODULE_4__["PdfPrintManager"]; });








/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/pdf-download-manager.service.ts":
/*!*****************************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/pdf-download-manager.service.ts ***!
  \*****************************************************************************/
/*! exports provided: PdfDownloadManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfDownloadManager", function() { return PdfDownloadManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);



class PdfDownloadManager {
    constructor() { }
    downloadUrl(url, filename) {
        if (!pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createValidAbsoluteUrl"](url, 'http://example.com')) {
            return; // restricted/invalid URL
        }
        this._download(url + '#pdfjs.action=download', filename);
    }
    downloadData(data, filename, contentType) {
        const blobUrl = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createObjectURL"](data, contentType, false);
        this._download(blobUrl, filename);
    }
    download(blob, url, filename) {
        const blobUrl = URL.createObjectURL(blob);
        this._download(blobUrl, filename);
        URL.revokeObjectURL(blobUrl);
    }
    _download(blobUrl, filename) {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.target = '_parent';
        // Use a.download if available. This increases the likelihood that
        // the file is downloaded instead of opened by another PDF plugin.
        if ('download' in a) {
            a.download = filename;
        }
        // <a> must be in the document for IE and recent Firefox versions,
        // otherwise .click() is ignored.
        (document.body || document.documentElement).appendChild(a);
        a.click();
        a.remove();
    }
}
PdfDownloadManager.ɵfac = function PdfDownloadManager_Factory(t) { return new (t || PdfDownloadManager)(); };
PdfDownloadManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfDownloadManager, factory: PdfDownloadManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfDownloadManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/pdf-find-controller.ts":
/*!********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/pdf-find-controller.ts ***!
  \********************************************************************/
/*! exports provided: FindState, PdfFindController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindState", function() { return FindState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfFindController", function() { return PdfFindController; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");





var FindState;
(function (FindState) {
    FindState[FindState["FOUND"] = 0] = "FOUND";
    FindState[FindState["NOT_FOUND"] = 1] = "NOT_FOUND";
    FindState[FindState["WRAPPED"] = 2] = "WRAPPED";
    FindState[FindState["PENDING"] = 3] = "PENDING";
})(FindState || (FindState = {}));
const FIND_TIMEOUT = 250; // ms
const MATCH_SCROLL_OFFSET_TOP = -50; // px
const MATCH_SCROLL_OFFSET_LEFT = -400; // px
const CHARACTERS_TO_NORMALIZE = {
    '\u2018': "'",
    '\u2019': "'",
    '\u201A': "'",
    '\u201B': "'",
    '\u201C': '"',
    '\u201D': '"',
    '\u201E': '"',
    '\u201F': '"',
    '\u00BC': '1/4',
    '\u00BD': '1/2',
    '\u00BE': '3/4',
};
let normalizationRegex = null;
function normalize(text) {
    if (!normalizationRegex) {
        // Compile the regular expression for text normalization once.
        const replace = Object.keys(CHARACTERS_TO_NORMALIZE).join('');
        normalizationRegex = new RegExp(`[${replace}]`, 'g');
    }
    return text.replace(normalizationRegex, function (ch) {
        return CHARACTERS_TO_NORMALIZE[ch];
    });
}
class PdfFindController {
    constructor() {
        this._extractTextPromises = [];
        this._pageContents = []; // Stores the normalized text for each page.
        this._matchesCountTotal = 0;
        this._pagesToSearch = null;
        // Events
        this.searchComplete = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._reset();
        //eventBus.on("findbarclose", this._onFindBarClose.bind(this));
    }
    get highlightMatches() {
        return this._highlightMatches;
    }
    get pageMatches() {
        return this._pageMatches;
    }
    get pageMatchesLength() {
        return this._pageMatchesLength;
    }
    get selected() {
        return this._selected;
    }
    get state() {
        return this._state;
    }
    /**
     * Set a reference to the PDF document in order to search it.
     * Note that searching is not possible if this method is not called.
     *
     * @param pdfDocument - The PDF document to search.
     */
    setDocument(pdfDocument) {
        if (this._pdfDocument) {
            this._reset();
        }
        if (!pdfDocument) {
            return;
        }
        this._pdfDocument = pdfDocument;
        this._firstPageCapability.resolve();
    }
    executeCommand(cmd, state) {
        if (!state) {
            return;
        }
        const pdfDocument = this._pdfDocument;
        if (this._state === null || this._shouldDirtyMatch(cmd, state)) {
            this._dirtyMatch = true;
        }
        this._state = state;
        if (cmd !== 'findhighlightallchange') {
            this._updateUIState(FindState.PENDING);
        }
        this._firstPageCapability.promise.then(() => {
            // If the document was closed before searching began, or if the search
            // operation was relevant for a previously opened document, do nothing.
            if (!this._pdfDocument || (pdfDocument && this._pdfDocument !== pdfDocument)) {
                return;
            }
            this._extractText();
            const findbarClosed = !this._highlightMatches;
            const pendingTimeout = !!this._findTimeout;
            if (this._findTimeout) {
                clearTimeout(this._findTimeout);
                this._findTimeout = null;
            }
            if (cmd === 'find') {
                // Trigger the find action with a small delay to avoid starting the
                // search when the user is still typing (saving resources).
                this._findTimeout = setTimeout(() => {
                    this._nextMatch();
                    this._findTimeout = null;
                }, FIND_TIMEOUT);
            }
            else if (this._dirtyMatch) {
                // Immediately trigger searching for non-'find' operations, when the
                // current state needs to be reset and matches re-calculated.
                this._nextMatch();
            }
            else if (cmd === 'findagain') {
                this._nextMatch();
                // When the findbar was previously closed, and `highlightAll` is set,
                // ensure that the matches on all active pages are highlighted again.
                if (findbarClosed && this._state.highlightAll) {
                    this._updateAllPages();
                }
            }
            else if (cmd === 'findhighlightallchange') {
                // If there was a pending search operation, synchronously trigger a new
                // search *first* to ensure that the correct matches are highlighted.
                if (pendingTimeout) {
                    this._nextMatch();
                }
                else {
                    this._highlightMatches = true;
                }
                this._updateAllPages(); // Update the highlighting on all active pages.
            }
            else {
                this._nextMatch();
            }
        });
    }
    scrollMatchIntoView({ element = null, pageIndex = -1, matchIndex = -1 }) {
        if (!this._scrollMatches || !element) {
            return;
        }
        else if (matchIndex === -1 || matchIndex !== this._selected.matchIdx) {
            return;
        }
        else if (pageIndex === -1 || pageIndex !== this._selected.pageIdx) {
            return;
        }
        this._scrollMatches = false; // Ensure that scrolling only happens once.
        const spot = {
            top: MATCH_SCROLL_OFFSET_TOP,
            left: MATCH_SCROLL_OFFSET_LEFT,
        };
        Object(_utils__WEBPACK_IMPORTED_MODULE_3__["scrollIntoView"])(element, null, spot, true);
    }
    _reset() {
        this._highlightMatches = false;
        this._scrollMatches = false;
        this._pdfDocument = null;
        this._pageMatches = [];
        this._pageMatchesLength = [];
        this._state = null;
        // Currently selected match.
        this._selected = {
            pageIdx: -1,
            matchIdx: -1,
        };
        // Where the find algorithm currently is in the document.
        this._offset = {
            pageIdx: null,
            matchIdx: null,
            wrapped: false,
        };
        this._extractTextPromises = [];
        this._pageContents = []; // Stores the normalized text for each page.
        this._matchesCountTotal = 0;
        this._pagesToSearch = null;
        this._pendingFindMatches = Object.create(null);
        this._resumePageIdx = null;
        this._dirtyMatch = false;
        clearTimeout(this._findTimeout);
        this._findTimeout = null;
        this._firstPageCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createPromiseCapability"]();
    }
    /**
     * @type {string} The (current) normalized search query.
     */
    get _query() {
        if (this._state.query !== this._rawQuery) {
            this._rawQuery = this._state.query;
            this._normalizedQuery = normalize(this._state.query);
        }
        return this._normalizedQuery;
    }
    _shouldDirtyMatch(cmd, state) {
        // When the search query changes, regardless of the actual search command
        // used, always re-calculate matches to avoid errors (fixes bug 1030622).
        if (state.query !== this._state.query) {
            return true;
        }
        switch (cmd) {
            case 'findagain':
                const pageNumber = this._selected.pageIdx + 1;
                const linkService = this.linkService;
                // Only treat a 'findagain' event as a new search operation when it's
                // *absolutely* certain that the currently selected match is no longer
                // visible, e.g. as a result of the user scrolling in the document.
                //
                // NOTE: If only a simple `this._linkService.page` check was used here,
                // there's a risk that consecutive 'findagain' operations could "skip"
                // over matches at the top/bottom of pages thus making them completely
                // inaccessible when there's multiple pages visible in the viewer.
                return (pageNumber >= 1 &&
                    pageNumber <= linkService.pagesCount &&
                    pageNumber !== linkService.page &&
                    !linkService.isPageVisible(pageNumber));
            case 'findhighlightallchange':
                return false;
        }
        return true;
    }
    /**
     * Helper for multi-term search that fills the `matchesWithLength` array
     * and handles cases where one search term includes another search term (for
     * example, "tamed tame" or "this is"). It looks for intersecting terms in
     * the `matches` and keeps elements with a longer match length.
     */
    _prepareMatches(matchesWithLength, matches, matchesLength) {
        // Sort the array of `{ match: <match>, matchLength: <matchLength> }`
        // objects on increasing index first and on the length otherwise.
        matchesWithLength.sort((a, b) => (a.match === b.match ? a.matchLength - b.matchLength : a.match - b.match));
        for (let i = 0, len = matchesWithLength.length; i < len; i++) {
            if (this._isSubTerm(matchesWithLength, i)) {
                continue;
            }
            matches.push(matchesWithLength[i].match);
            matchesLength.push(matchesWithLength[i].matchLength);
        }
    }
    _isSubTerm(matchesWithLength, currentIndex) {
        const currentElem = matchesWithLength[currentIndex];
        const nextElem = matchesWithLength[currentIndex + 1];
        // Check for cases like "TAMEd TAME".
        if (currentIndex < matchesWithLength.length - 1 && currentElem.match === nextElem.match) {
            currentElem.skipped = true;
            return true;
        }
        // Check for cases like "thIS IS".
        for (let i = currentIndex - 1; i >= 0; i--) {
            const prevElem = matchesWithLength[i];
            if (prevElem.skipped) {
                continue;
            }
            if (prevElem.match + prevElem.matchLength < currentElem.match) {
                break;
            }
            if (prevElem.match + prevElem.matchLength >= currentElem.match + currentElem.matchLength) {
                currentElem.skipped = true;
                return true;
            }
        }
        return false;
    }
    /**
     * Determine if the search query constitutes a "whole word", by comparing the
     * first/last character type with the preceding/following character type.
     */
    _isEntireWord(content, startIdx, length) {
        if (startIdx > 0) {
            const first = content.charCodeAt(startIdx);
            const limit = content.charCodeAt(startIdx - 1);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCharacterType"])(first) === Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCharacterType"])(limit)) {
                return false;
            }
        }
        const endIdx = startIdx + length - 1;
        if (endIdx < content.length - 1) {
            const last = content.charCodeAt(endIdx);
            const limit = content.charCodeAt(endIdx + 1);
            if (Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCharacterType"])(last) === Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCharacterType"])(limit)) {
                return false;
            }
        }
        return true;
    }
    _calculatePhraseMatch(query, pageIndex, pageContent, entireWord) {
        const matches = [];
        const queryLen = query.length;
        let matchIdx = -queryLen;
        while (true) {
            matchIdx = pageContent.indexOf(query, matchIdx + queryLen);
            if (matchIdx === -1) {
                break;
            }
            if (entireWord && !this._isEntireWord(pageContent, matchIdx, queryLen)) {
                continue;
            }
            matches.push(matchIdx);
        }
        this._pageMatches[pageIndex] = matches;
    }
    _calculateWordMatch(query, pageIndex, pageContent, entireWord) {
        const matchesWithLength = [];
        // Divide the query into pieces and search for text in each piece.
        const queryArray = query.match(/\S+/g);
        for (let i = 0, len = queryArray.length; i < len; i++) {
            const subquery = queryArray[i];
            const subqueryLen = subquery.length;
            let matchIdx = -subqueryLen;
            while (true) {
                matchIdx = pageContent.indexOf(subquery, matchIdx + subqueryLen);
                if (matchIdx === -1) {
                    break;
                }
                if (entireWord && !this._isEntireWord(pageContent, matchIdx, subqueryLen)) {
                    continue;
                }
                // Other searches do not, so we store the length.
                matchesWithLength.push({
                    match: matchIdx,
                    matchLength: subqueryLen,
                    skipped: false,
                });
            }
        }
        // Prepare arrays for storing the matches.
        this._pageMatchesLength[pageIndex] = [];
        this._pageMatches[pageIndex] = [];
        // Sort `matchesWithLength`, remove intersecting terms and put the result
        // into the two arrays.
        this._prepareMatches(matchesWithLength, this._pageMatches[pageIndex], this._pageMatchesLength[pageIndex]);
    }
    _calculateMatch(pageIndex) {
        let pageContent = this._pageContents[pageIndex];
        let query = this._query;
        const { caseSensitive, entireWord, phraseSearch } = this._state;
        if (query.length === 0) {
            // Do nothing: the matches should be wiped out already.
            return;
        }
        if (!caseSensitive) {
            pageContent = pageContent.toLowerCase();
            query = query.toLowerCase();
        }
        if (phraseSearch) {
            this._calculatePhraseMatch(query, pageIndex, pageContent, entireWord);
        }
        else {
            this._calculateWordMatch(query, pageIndex, pageContent, entireWord);
        }
        // When `highlightAll` is set, ensure that the matches on previously
        // rendered (and still active) pages are correctly highlighted.
        if (this._state.highlightAll) {
            this._updatePage(pageIndex);
        }
        if (this._resumePageIdx === pageIndex) {
            this._resumePageIdx = null;
            this._nextPageMatch();
        }
        // Update the match count.
        const pageMatchesCount = this._pageMatches[pageIndex].length;
        if (pageMatchesCount > 0) {
            this._matchesCountTotal += pageMatchesCount;
            this._updateUIResultsCount();
        }
    }
    _extractText() {
        // Perform text extraction once if this method is called multiple times.
        if (this._extractTextPromises.length > 0) {
            return;
        }
        let promise = Promise.resolve();
        for (let i = 0, ii = this.linkService.pagesCount; i < ii; i++) {
            const extractTextCapability = pdfjs_dist__WEBPACK_IMPORTED_MODULE_1__["createPromiseCapability"]();
            this._extractTextPromises[i] = extractTextCapability.promise;
            promise = promise.then(() => {
                return this._pdfDocument
                    .getPage(i + 1)
                    .then((pdfPage) => {
                    return pdfPage.getTextContent({
                        normalizeWhitespace: true,
                    });
                })
                    .then((textContent) => {
                    const textItems = textContent.items;
                    const strBuf = [];
                    for (let j = 0, jj = textItems.length; j < jj; j++) {
                        strBuf.push(textItems[j].str);
                    }
                    // Store the normalized page content (text items) as one string.
                    this._pageContents[i] = normalize(strBuf.join(''));
                    extractTextCapability.resolve(i);
                }, (reason) => {
                    console.error(`Unable to get text content for page ${i + 1}`, reason);
                    // Page error -- assuming no text content.
                    this._pageContents[i] = '';
                    extractTextCapability.resolve(i);
                });
            });
        }
    }
    _updatePage(index) {
        if (this._scrollMatches && this._selected.pageIdx === index) {
            // If the page is selected, scroll the page into view, which triggers
            // rendering the page, which adds the text layer. Once the text layer
            // is built, it will attempt to scroll the selected match into view.
            this.linkService.page = index + 1;
        }
        this._pdfPageContainer.updateMatches(index);
    }
    _updateAllPages() {
        this._pdfPageContainer.updateMatches(-1);
    }
    _nextMatch() {
        const previous = this._state.findPrevious;
        const currentPageIndex = this.linkService.page - 1;
        const numPages = this.linkService.pagesCount;
        this._highlightMatches = true;
        if (this._dirtyMatch) {
            // Need to recalculate the matches, reset everything.
            this._dirtyMatch = false;
            this._selected.pageIdx = this._selected.matchIdx = -1;
            this._offset.pageIdx = currentPageIndex;
            this._offset.matchIdx = null;
            this._offset.wrapped = false;
            this._resumePageIdx = null;
            this._pageMatches.length = 0;
            this._pageMatchesLength.length = 0;
            this._matchesCountTotal = 0;
            this._updateAllPages(); // Wipe out any previously highlighted matches.
            for (let i = 0; i < numPages; i++) {
                // Start finding the matches as soon as the text is extracted.
                if (this._pendingFindMatches[i] === true) {
                    continue;
                }
                this._pendingFindMatches[i] = true;
                this._extractTextPromises[i].then((pageIdx) => {
                    delete this._pendingFindMatches[pageIdx];
                    this._calculateMatch(pageIdx);
                });
            }
        }
        // If there's no query there's no point in searching.
        if (this._query === '') {
            this._updateUIState(FindState.FOUND);
            return;
        }
        // If we're waiting on a page, we return since we can't do anything else.
        if (this._resumePageIdx) {
            return;
        }
        const offset = this._offset;
        // Keep track of how many pages we should maximally iterate through.
        this._pagesToSearch = numPages;
        // If there's already a `matchIdx` that means we are iterating through a
        // page's matches.
        if (offset.matchIdx !== null) {
            const numPageMatches = this._pageMatches[offset.pageIdx].length;
            if ((!previous && offset.matchIdx + 1 < numPageMatches) || (previous && offset.matchIdx > 0)) {
                // The simple case; we just have advance the matchIdx to select
                // the next match on the page.
                offset.matchIdx = previous ? offset.matchIdx - 1 : offset.matchIdx + 1;
                this._updateMatch(/* found = */ true);
                return;
            }
            // We went beyond the current page's matches, so we advance to
            // the next page.
            this._advanceOffsetPage(previous);
        }
        // Start searching through the page.
        this._nextPageMatch();
    }
    _matchesReady(matches) {
        const offset = this._offset;
        const numMatches = matches.length;
        const previous = this._state.findPrevious;
        if (numMatches) {
            // There were matches for the page, so initialize `matchIdx`.
            offset.matchIdx = previous ? numMatches - 1 : 0;
            this._updateMatch(/* found = */ true);
            return true;
        }
        // No matches, so attempt to search the next page.
        this._advanceOffsetPage(previous);
        if (offset.wrapped) {
            offset.matchIdx = null;
            if (this._pagesToSearch < 0) {
                // No point in wrapping again, there were no matches.
                this._updateMatch(/* found = */ false);
                // While matches were not found, searching for a page
                // with matches should nevertheless halt.
                return true;
            }
        }
        // Matches were not found (and searching is not done).
        return false;
    }
    _nextPageMatch() {
        if (this._resumePageIdx !== null) {
            console.error('There can only be one pending page.');
        }
        let matches = null;
        do {
            const pageIdx = this._offset.pageIdx;
            matches = this._pageMatches[pageIdx];
            if (!matches) {
                // The matches don't exist yet for processing by `_matchesReady`,
                // so set a resume point for when they do exist.
                this._resumePageIdx = pageIdx;
                break;
            }
        } while (!this._matchesReady(matches));
    }
    _advanceOffsetPage(previous) {
        const offset = this._offset;
        const numPages = this.linkService.pagesCount;
        offset.pageIdx = previous ? offset.pageIdx - 1 : offset.pageIdx + 1;
        offset.matchIdx = null;
        this._pagesToSearch--;
        if (offset.pageIdx >= numPages || offset.pageIdx < 0) {
            offset.pageIdx = previous ? numPages - 1 : 0;
            offset.wrapped = true;
        }
    }
    _updateMatch(found = false) {
        let state = FindState.NOT_FOUND;
        const wrapped = this._offset.wrapped;
        this._offset.wrapped = false;
        if (found) {
            const previousPage = this._selected.pageIdx;
            this._selected.pageIdx = this._offset.pageIdx;
            this._selected.matchIdx = this._offset.matchIdx;
            state = wrapped ? FindState.WRAPPED : FindState.FOUND;
            // Update the currently selected page to wipe out any selected matches.
            if (previousPage !== -1 && previousPage !== this._selected.pageIdx) {
                this._updatePage(previousPage);
            }
        }
        this._updateUIState(state, this._state.findPrevious);
        if (this._selected.pageIdx !== -1) {
            // Ensure that the match will be scrolled into view.
            this._scrollMatches = true;
            this._updatePage(this._selected.pageIdx);
        }
    }
    _requestMatchesCount() {
        const { pageIdx, matchIdx } = this._selected;
        let current = 0, total = this._matchesCountTotal;
        if (matchIdx !== -1) {
            for (let i = 0; i < pageIdx; i++) {
                current += (this._pageMatches[i] && this._pageMatches[i].length) || 0;
            }
            current += matchIdx + 1;
        }
        // When searching starts, this method may be called before the `pageMatches`
        // have been counted (in `_calculateMatch`). Ensure that the UI won't show
        // temporarily broken state when the active find result doesn't make sense.
        if (current < 1 || current > total) {
            current = total = 0;
        }
        return { current, total };
    }
    _updateUIResultsCount() {
        this.searchComplete.next({ matchesCount: this._requestMatchesCount() });
    }
    _updateUIState(state, previous) {
        this.searchState.next({
            state: state,
            previous: previous,
            matchesCount: this._requestMatchesCount(),
        });
    }
    get pdfPageContainer() {
        return this._pdfPageContainer;
    }
    set pdfPageContainer(value) {
        this._pdfPageContainer = value;
    }
    get linkService() {
        return this._linkService;
    }
    set linkService(value) {
        this._linkService = value;
    }
}
PdfFindController.ɵfac = function PdfFindController_Factory(t) { return new (t || PdfFindController)(); };
PdfFindController.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfFindController, factory: PdfFindController.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfFindController, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/pdf-link-service.ts":
/*!*****************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/pdf-link-service.ts ***!
  \*****************************************************************/
/*! exports provided: PdfLinkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfLinkService", function() { return PdfLinkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");



class PdfLinkService {
    constructor() {
        this.externalLinkEnabled = true;
    }
    setDocument(pdfDocument, baseUrl = null) {
        this.baseUrl = baseUrl;
        this.pdfDocument = pdfDocument;
        this._pagesRefCache = Object.create(null);
    }
    setViewer(pdfViewer) {
        this.pdfViewer = pdfViewer;
    }
    setHistory(pdfHistory) {
        this.pdfHistory = pdfHistory;
    }
    /**
     * @type {number}
     */
    get pagesCount() {
        return this.pdfDocument ? this.pdfDocument.numPages : 0;
    }
    /**
     * @type {number}
     */
    get page() {
        return this.pdfViewer.currentPageNumber;
    }
    /**
     * @param {number} value
     */
    set page(value) {
        this.pdfViewer.currentPageNumber = value;
    }
    /**
     * @type {number}
     */
    get rotation() {
        return this.pdfViewer.pagesRotation;
    }
    /**
     * @param {number} value
     */
    set rotation(value) {
        this.pdfViewer.pagesRotation = value;
    }
    /**
     * @param {string|Array} dest - The named, or explicit, PDF destination.
     */
    navigateTo(dest) {
        const goToDestination = ({ namedDest, explicitDest }) => {
            // Dest array looks like that: <page-ref> </XYZ|/FitXXX> <args..>
            const destRef = explicitDest[0];
            let pageNumber;
            if (destRef instanceof Object) {
                pageNumber = this._cachedPageNumber(destRef);
                if (pageNumber === null) {
                    // Fetch the page reference if it's not yet available. This could
                    // only occur during loading, before all pages have been resolved.
                    this.pdfDocument
                        .getPageIndex(destRef)
                        .then((pageIndex) => {
                        this.cachePageRef(pageIndex + 1, destRef);
                        goToDestination({ namedDest, explicitDest });
                    })
                        .catch(() => console.error(`PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid page reference, for dest="${dest}".`));
                    return;
                }
            }
            else if (Number.isInteger(destRef)) {
                pageNumber = destRef + 1;
            }
            else {
                console.error(`PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid destination reference, for dest="${dest}".`);
                return;
            }
            if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
                console.error(`PDFLinkService.navigateTo: "${pageNumber}" is not ` + `a valid page number, for dest="${dest}".`);
                return;
            }
            if (this.pdfHistory) {
                // Update the browser history before scrolling the new destination into
                // view, to be able to accurately capture the current document position.
                this.pdfHistory.pushCurrentPosition();
                this.pdfHistory.push({ namedDest, explicitDest, pageNumber });
            }
            this.pdfViewer.scrollPageIntoView({
                pageNumber,
                destArray: explicitDest,
            });
        };
        new Promise((resolve) => {
            if (typeof dest === 'string') {
                this.pdfDocument.getDestination(dest).then((destArray) => {
                    resolve({
                        namedDest: dest,
                        explicitDest: destArray,
                    });
                });
                return;
            }
            const data = {
                namedDest: '',
                explicitDest: dest,
            };
            resolve(data);
        }).then((data) => {
            if (!Array.isArray(data.explicitDest)) {
                console.error(`PDFLinkService.navigateTo: "${data.explicitDest}" is` + ` not a valid destination array, for dest="${dest}".`);
                return;
            }
            goToDestination(data);
        });
    }
    /**
     * @param {string|Array} dest - The PDF destination object.
     * @returns {string} The hyperlink to the PDF object.
     */
    getDestinationHash(dest) {
        if (typeof dest === 'string') {
            return this.getAnchorUrl('#' + escape(dest));
        }
        if (Array.isArray(dest)) {
            const str = JSON.stringify(dest);
            return this.getAnchorUrl('#' + escape(str));
        }
        return this.getAnchorUrl('');
    }
    /**
     * Prefix the full url on anchor links to make sure that links are resolved
     * relative to the current URL instead of the one defined in <base href>.
     * @param {string} anchor The anchor hash, including the #.
     * @returns {string} The hyperlink to the PDF object.
     */
    getAnchorUrl(anchor) {
        return (this.baseUrl || '') + anchor;
    }
    /**
     * @param {string} hash
     */
    setHash(hash) {
        let pageNumber, dest;
        if (hash.includes('=')) {
            const params = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["parseQueryString"])(hash);
            // borrowing syntax from "Parameters for Opening PDF Files"
            if ('nameddest' in params) {
                this.navigateTo(params.nameddest);
                return;
            }
            if ('page' in params) {
                pageNumber = params.page | 0 || 1;
            }
            if ('zoom' in params) {
                // Build the destination array.
                const zoomArgs = params.zoom.split(','); // scale,left,top
                const zoomArg = zoomArgs[0];
                const zoomArgNumber = parseFloat(zoomArg);
                if (!zoomArg.includes('Fit')) {
                    // If the zoomArg is a number, it has to get divided by 100. If it's
                    // a string, it should stay as it is.
                    dest = [
                        null,
                        { name: 'XYZ' },
                        zoomArgs.length > 1 ? zoomArgs[1] | 0 : null,
                        zoomArgs.length > 2 ? zoomArgs[2] | 0 : null,
                        zoomArgNumber ? zoomArgNumber / 100 : zoomArg,
                    ];
                }
                else {
                    if (zoomArg === 'Fit' || zoomArg === 'FitB') {
                        dest = [null, { name: zoomArg }];
                    }
                    else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
                        dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
                    }
                    else if (zoomArg === 'FitR') {
                        if (zoomArgs.length !== 5) {
                            console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
                        }
                        else {
                            dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
                        }
                    }
                    else {
                        console.error(`PDFLinkService.setHash: "${zoomArg}" is not ` + 'a valid zoom value.');
                    }
                }
            }
            if (dest) {
                this.pdfViewer.scrollPageIntoView({
                    pageNumber: pageNumber || this.page,
                    destArray: dest,
                    allowNegativeOffset: true,
                });
            }
            else if (pageNumber) {
                this.page = pageNumber; // simple page
            }
            // Named (or explicit) destination.
            dest = unescape(hash);
            try {
                dest = JSON.parse(dest);
                if (!Array.isArray(dest)) {
                    // Avoid incorrectly rejecting a valid named destination, such as
                    // e.g. "4.3" or "true", because `JSON.parse` converted its type.
                    dest = dest.toString();
                }
            }
            catch (ex) { }
            if (typeof dest === 'string' || this.isValidExplicitDestination(dest)) {
                this.navigateTo(dest);
                return;
            }
            console.error(`PDFLinkService.setHash: "${unescape(hash)}" is not ` + 'a valid destination.');
        }
    }
    /**
     * @param {string} action
     */
    executeNamedAction(action) {
        // See PDF reference, table 8.45 - Named action
        switch (action) {
            case 'GoBack':
                if (this.pdfHistory) {
                    this.pdfHistory.back();
                }
                break;
            case 'GoForward':
                if (this.pdfHistory) {
                    this.pdfHistory.forward();
                }
                break;
            case 'NextPage':
                if (this.page < this.pagesCount) {
                    this.page++;
                }
                break;
            case 'PrevPage':
                if (this.page > 1) {
                    this.page--;
                }
                break;
            case 'LastPage':
                this.page = this.pagesCount;
                break;
            case 'FirstPage':
                this.page = 1;
                break;
            default:
                break; // No action according to spec
        }
    }
    isValidExplicitDestination(dest) {
        if (!Array.isArray(dest)) {
            return false;
        }
        const destLength = dest.length;
        if (destLength < 2) {
            return false;
        }
        const page = dest[0];
        if (!(typeof page === 'object' && Number.isInteger(page.num) && Number.isInteger(page.gen)) &&
            !(Number.isInteger(page) && page >= 0)) {
            return false;
        }
        const zoom = dest[1];
        if (!(typeof zoom === 'object' && typeof zoom.name === 'string')) {
            return false;
        }
        let allowNull = true;
        switch (zoom.name) {
            case 'XYZ':
                if (destLength !== 5) {
                    return false;
                }
                break;
            case 'Fit':
            case 'FitB':
                return destLength === 2;
            case 'FitH':
            case 'FitBH':
            case 'FitV':
            case 'FitBV':
                if (destLength !== 3) {
                    return false;
                }
                break;
            case 'FitR':
                if (destLength !== 6) {
                    return false;
                }
                allowNull = false;
                break;
            default:
                return false;
        }
        for (let i = 2; i < destLength; i++) {
            const param = dest[i];
            if (!(typeof param === 'number' || (allowNull && param === null))) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {number} pageNum - page number.
     * @param {Object} pageRef - reference to the page.
     */
    cachePageRef(pageNum, pageRef) {
        if (!pageRef) {
            return;
        }
        const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
        this._pagesRefCache[refStr] = pageNum;
    }
    _cachedPageNumber(pageRef) {
        const refStr = pageRef.gen === 0 ? `${pageRef.num}R` : `${pageRef.num}R${pageRef.gen}`;
        return (this._pagesRefCache && this._pagesRefCache[refStr]) || null;
    }
    /**
     * @param {number} pageNumber
     */
    isPageVisible(pageNumber) {
        return this.pdfViewer.isPageVisible(pageNumber);
    }
}
PdfLinkService.ɵfac = function PdfLinkService_Factory(t) { return new (t || PdfLinkService)(); };
PdfLinkService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfLinkService, factory: PdfLinkService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfLinkService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/pdf-print-manager.service.ts":
/*!**************************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/pdf-print-manager.service.ts ***!
  \**************************************************************************/
/*! exports provided: PrintDPI, PdfPrintManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintDPI", function() { return PrintDPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfPrintManager", function() { return PdfPrintManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts");



var PrintDPI;
(function (PrintDPI) {
    PrintDPI[PrintDPI["LOW"] = 150] = "LOW";
    PrintDPI[PrintDPI["MEDIUM"] = 300] = "MEDIUM";
    PrintDPI[PrintDPI["HIGH"] = 600] = "HIGH";
    PrintDPI[PrintDPI["ULTRA"] = 1200] = "ULTRA";
})(PrintDPI || (PrintDPI = {}));
class PdfPrintManager {
    constructor() { }
    print(pdfViewer, pdfDocument, pagesOverview, printDpi) {
        if (this.activeService) {
            console.warn('Ignored window.print() because of a pending print job.');
            return;
        }
        this._pdfViewer = pdfViewer;
        this.ensureOverlay();
        try {
            this._dispatchEvent('beforeprint');
        }
        finally {
            if (!this.activeService) {
                console.error('Expected print service to be initialized.');
                this.ensureOverlay();
            }
            else {
                this.layout(pagesOverview)
                    .then(() => this.renderPages(pdfDocument, pagesOverview, printDpi).then(() => this.performPrint()))
                    .then(() => {
                    // aborts acts on the "active" print request, so we need to check
                    // whether the print request (activeServiceOnEntry) is still active.
                    // Without the check, an unrelated print request (created after aborting
                    // this print request while the pages were being generated) would be
                    // aborted.
                    if (this.active) {
                        this._abort();
                    }
                });
            }
        }
    }
    layout(pagesOverview) {
        return new Promise((resolve) => {
            this.throwIfInactive();
            const body = document.querySelector('body');
            this.printContainer = document.createElement('div');
            this.printContainer.classList.add('docu-printable');
            this.printContainer.style.display = 'none';
            body.appendChild(this.printContainer);
            body.setAttribute('data-pdf-printing', `${true}`);
            const hasEqualPageSizes = pagesOverview.every((size) => size.width === pagesOverview[0].width && size.height === pagesOverview[0].height);
            if (!hasEqualPageSizes) {
                console.warn('Not all pages have the same size. The printed result may be incorrect!');
            }
            const pageSize = pagesOverview[0];
            // Insert a @page + size rule to make sure that the page size is correctly
            // set. Note that we assume that all pages have the same size, because
            // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
            this.pageStyleSheet = document.createElement('style');
            this.pageStyleSheet.textContent = this._addStylesForPrinting(pageSize.width, pageSize.height);
            body.appendChild(this.pageStyleSheet);
            resolve();
        });
    }
    renderProgress(index, total) {
        const progress = Math.round((index / total) * 100);
        this._pdfViewer.pdfPrintProgress.next({ progress });
    }
    renderPages(pdfDocument, pagesOverview, printDpi) {
        let currentPage = -1;
        const pageCount = pagesOverview.length;
        const renderNextPage = (resolve, reject) => {
            this.throwIfInactive();
            if (++currentPage >= pageCount) {
                this.renderProgress(pageCount, pageCount);
                resolve();
                return;
            }
            const index = currentPage;
            this.renderProgress(index, pageCount);
            this.renderPage(pdfDocument, index + 1, pagesOverview[index], printDpi)
                .then((page) => this.useRenderedPage(page))
                .then(() => renderNextPage(resolve, reject), reject);
        };
        return new Promise(renderNextPage);
    }
    destroy() {
        if (this.activeService !== this) {
            // |activeService| cannot be replaced without calling destroy() first,
            // so if it differs then an external consumer has a stale reference to
            // us.
            return;
        }
        const body = document.querySelector('body');
        body.removeAttribute('data-pdfprinting');
        this.printContainer.remove();
        this.printContainer = null;
        if (this.pageStyleSheet) {
            this.pageStyleSheet.remove();
            this.pageStyleSheet = null;
        }
        this.scratchCanvas.width = this.scratchCanvas.height = 0;
        this.scratchCanvas = null;
        this.activeService = null;
    }
    renderPage(pdfDocument, pageNumber, size, printDpi) {
        const scratchCanvas = this.activeService.scratchCanvas;
        // The size of the canvas in pixels for printing.
        const PRINT_UNITS = printDpi / 72.0;
        scratchCanvas.width = Math.floor(size.width * PRINT_UNITS);
        scratchCanvas.height = Math.floor(size.height * PRINT_UNITS);
        // The physical size of the img as specified by the PDF document.
        const width = Math.floor(size.width * _utils__WEBPACK_IMPORTED_MODULE_1__["CSS_UNITS"]) + 'px';
        const height = Math.floor(size.height * _utils__WEBPACK_IMPORTED_MODULE_1__["CSS_UNITS"]) + 'px';
        const ctx = scratchCanvas.getContext('2d');
        ctx.save();
        ctx.fillStyle = 'rgb(255, 255, 255)';
        ctx.fillRect(0, 0, scratchCanvas.width, scratchCanvas.height);
        ctx.restore();
        return pdfDocument
            .getPage(pageNumber)
            .then((pdfPage) => {
            const renderContext = {
                canvasContext: ctx,
                transform: [PRINT_UNITS, 0, 0, PRINT_UNITS, 0, 0],
                viewport: pdfPage.getViewport({ scale: 1, rotation: size.rotation }),
                intent: 'print',
            };
            return pdfPage.render(renderContext).promise;
        })
            .then(() => ({ width, height }));
    }
    useRenderedPage(printItem) {
        this.throwIfInactive();
        const img = document.createElement('img');
        img.style.width = printItem.width;
        img.style.height = printItem.height;
        const scratchCanvas = this.scratchCanvas;
        if ('toBlob' in scratchCanvas) {
            scratchCanvas.toBlob((blob) => (img.src = URL.createObjectURL(blob)));
        }
        else {
            // @ts-ignore
            img.src = scratchCanvas.toDataURL();
        }
        const wrapper = document.createElement('div');
        wrapper.appendChild(img);
        this.printContainer.appendChild(wrapper);
        return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = reject;
        });
    }
    performPrint() {
        this.throwIfInactive();
        return new Promise((resolve) => {
            setTimeout(() => {
                if (!this.active) {
                    resolve();
                    return;
                }
                this.printContainer.style.display = 'block';
                print.call(window);
                // Delay promise resolution in case print() was not synchronous.
                setTimeout(resolve, 20); // Tidy-up.
            }, 0);
        });
    }
    ensureOverlay() {
        if (!this.overlayPromise) {
            this.overlayPromise = new Promise((resolve) => resolve());
        }
        this.scratchCanvas = document.createElement('canvas');
        this.activeService = this;
        return this.overlayPromise;
    }
    throwIfInactive() {
        if (!this.active) {
            throw new Error('This print request was cancelled or completed.');
        }
    }
    _dispatchEvent(eventType) {
        const event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventType, false, false, 'custom');
        window.dispatchEvent(event);
    }
    _abort() {
        if (this.activeService) {
            this.destroy();
        }
    }
    _addStylesForPrinting(width, height) {
        // Insert a @page + size rule to make sure that the page size is correctly
        // set. Note that we assume that all pages have the same size, because
        // variable-size pages are not supported yet (e.g. in Chrome & Firefox).
        // "size:<width> <height>" is what we need. But also add "A4" because
        // Firefox incorrectly reports support for the other value.
        const pageStyle = '@supports ((size:A4) and (size:1pt 1pt)) {' +
            '@page { size: ' +
            width +
            'pt ' +
            height +
            'pt;' +
            ' margin: 0; }' +
            '}';
        // Print styles for the whole document to avoid getting non related pdf elements from the DOM
        const documentStyles = '@media print {' +
            '* { margin: 0; padding: 0; }' +
            'body > *:not(.mnj-printable) { display: none; }' +
            '.mnj-printable { height: 100%; }' +
            '.mnj-printable > div { ' +
            'position: relative; top: 0; left: 0; width: 1px; height: 1px; overflow: visible; ' +
            'page-break-after: always; page-break-inside: avoid;' +
            '}' +
            '.mnj-printable canvas, .mnj-printable img { display: block; }';
        return pageStyle + documentStyles;
    }
    get active() {
        return this === this.activeService;
    }
}
PdfPrintManager.ɵfac = function PdfPrintManager_Factory(t) { return new (t || PdfPrintManager)(); };
PdfPrintManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfPrintManager, factory: PdfPrintManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfPrintManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/services/pdf-rendering-queue.ts":
/*!********************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/services/pdf-rendering-queue.ts ***!
  \********************************************************************/
/*! exports provided: CLEANUP_TIMEOUT, RenderingStates, PdfRenderingQueue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEANUP_TIMEOUT", function() { return CLEANUP_TIMEOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderingStates", function() { return RenderingStates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfRenderingQueue", function() { return PdfRenderingQueue; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const CLEANUP_TIMEOUT = 30000;
var RenderingStates;
(function (RenderingStates) {
    RenderingStates[RenderingStates["INITIAL"] = 0] = "INITIAL";
    RenderingStates[RenderingStates["RUNNING"] = 1] = "RUNNING";
    RenderingStates[RenderingStates["PAUSED"] = 2] = "PAUSED";
    RenderingStates[RenderingStates["FINISHED"] = 3] = "FINISHED";
})(RenderingStates || (RenderingStates = {}));
/**
 * Controls rendering of the views for pages and thumbnails.
 */
class PdfRenderingQueue {
    constructor() {
        this.printing = false;
        this.isThumbnailViewEnabled = false;
        this.pdfViewer = null;
        this.pdfThumbnailViewer = null;
        this.onIdle = null;
        this.highestPriorityPage = null;
        this.idleTimeout = null;
        this.printing = false;
        this.isThumbnailViewEnabled = false;
    }
    setViewer(pdfViewer) {
        this.pdfViewer = pdfViewer;
    }
    setThumbnailViewer(pdfThumbnailViewer) {
        this.pdfThumbnailViewer = pdfThumbnailViewer;
    }
    /**
     * @param {PdfContainerItem} view
     * @returns {boolean}
     */
    isHighestPriority(view) {
        return this.highestPriorityPage === view.renderingId;
    }
    /**
     * @param {Object} currentlyVisiblePages
     */
    renderHighestPriority(currentlyVisiblePages) {
        if (this.idleTimeout) {
            clearTimeout(this.idleTimeout);
            this.idleTimeout = null;
        }
        // Pages have a higher priority than thumbnails, so check them first.
        if (this.pdfViewer && this.pdfViewer.forceRendering(currentlyVisiblePages)) {
            return;
        }
        // No pages needed rendering, so check thumbnails.
        if (this.pdfThumbnailViewer && this.pdfThumbnailViewer.forceRendering()) {
            return;
        }
        if (this.printing) {
            // If printing is currently ongoing do not reschedule cleanup.
            return;
        }
        if (this.onIdle) {
            this.idleTimeout = setTimeout(this.onIdle, CLEANUP_TIMEOUT);
        }
    }
    /**
     * @param {Object} visible
     * @param {Array} views
     * @param {boolean} scrolledDown
     */
    getHighestPriority(visible, views, scrolledDown) {
        /**
         * The state has changed. Figure out which page has the highest priority to
         * render next (if any).
         *
         * Priority:
         * 1. visible pages
         * 2. if last scrolled down, the page after the visible pages, or
         *    if last scrolled up, the page before the visible pages
         */
        const visibleViews = visible.views;
        const numVisible = visibleViews.length;
        if (numVisible === 0) {
            return null;
        }
        for (let i = 0; i < numVisible; ++i) {
            const view = visibleViews[i].view;
            if (!this.isViewFinished(view)) {
                return view;
            }
        }
        // All the visible views have rendered; try to render next/previous pages.
        if (scrolledDown) {
            const nextPageIndex = visible.last.id;
            // IDs start at 1, so no need to add 1.
            if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
                return views[nextPageIndex];
            }
        }
        else {
            const previousPageIndex = visible.first.id - 2;
            if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
                return views[previousPageIndex];
            }
        }
        // Everything that needs to be rendered has been.
        return null;
    }
    /**
     * @param {PdfContainerItem} view
     * @returns {boolean}
     */
    isViewFinished(view) {
        return view.renderingState === RenderingStates.FINISHED;
    }
    /**
     * Render a page or thumbnail view. This calls the appropriate function
     * based on the views state. If the view is already rendered it will return
     * `false`.
     *
     * @param {PdfContainerItem} view
     */
    renderView(view) {
        switch (view.renderingState) {
            case RenderingStates.FINISHED:
                return false;
            case RenderingStates.PAUSED:
                this.highestPriorityPage = view.renderingId;
                view.resume();
                break;
            case RenderingStates.RUNNING:
                this.highestPriorityPage = view.renderingId;
                break;
            case RenderingStates.INITIAL:
                this.highestPriorityPage = view.renderingId;
                view.draw().finally(() => this.renderHighestPriority());
                break;
        }
        return true;
    }
}
PdfRenderingQueue.ɵfac = function PdfRenderingQueue_Factory(t) { return new (t || PdfRenderingQueue)(); };
PdfRenderingQueue.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PdfRenderingQueue, factory: PdfRenderingQueue.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfRenderingQueue, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/anotation-layer.ts":
/*!*************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/anotation-layer.ts ***!
  \*************************************************************/
/*! exports provided: AnnotationLayerBuilder, DefaultAnnotationLayerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnotationLayerBuilder", function() { return AnnotationLayerBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultAnnotationLayerFactory", function() { return DefaultAnnotationLayerFactory; });
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);

class AnnotationLayerBuilder {
    constructor(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath = '', renderInteractiveForms = false) {
        this.pageDiv = pageDiv;
        this.pdfPage = pdfPage;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.imageResourcesPath = imageResourcesPath;
        this.renderInteractiveForms = renderInteractiveForms;
        this.pageDiv = pageDiv;
        this.pdfPage = pdfPage;
        this.linkService = linkService;
        this.downloadManager = downloadManager;
        this.imageResourcesPath = imageResourcesPath;
        this.renderInteractiveForms = renderInteractiveForms;
        this.div = null;
        this._cancelled = false;
    }
    /**
     * @param viewport
     * @param {string} intent (default value is 'display')
     */
    render(viewport, intent = 'display') {
        this.pdfPage.getAnnotations({ intent }).then((annotations) => {
            if (this._cancelled) {
                return;
            }
            const parameters = {
                viewport: viewport.clone({ dontFlip: true }),
                div: this.div,
                annotations,
                page: this.pdfPage,
                imageResourcesPath: this.imageResourcesPath,
                renderInteractiveForms: this.renderInteractiveForms,
                linkService: this.linkService,
                downloadManager: this.downloadManager,
            };
            if (this.div) {
                // If an annotationLayer already exists, refresh its children's
                // transformation matrices.
                pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["AnnotationLayer"].update(parameters);
            }
            else {
                // Create an annotation layer div and render the annotations
                // if there is at least one annotation.
                if (annotations.length === 0) {
                    return;
                }
                this.div = document.createElement('div');
                this.div.className = 'annotationLayer';
                this.pageDiv.appendChild(this.div);
                parameters.div = this.div;
                pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["AnnotationLayer"].render(parameters);
            }
        });
    }
    cancel() {
        this._cancelled = true;
    }
    hide() {
        if (!this.div) {
            return;
        }
        this.div.setAttribute('hidden', 'true');
    }
}
class DefaultAnnotationLayerFactory {
    static createAnnotationLayerBuilder(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath = 'assets/images/', renderInteractiveForms = false) {
        return new AnnotationLayerBuilder(pageDiv, pdfPage, linkService, downloadManager, imageResourcesPath, renderInteractiveForms);
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/find-utils.ts":
/*!********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/find-utils.ts ***!
  \********************************************************/
/*! exports provided: CharacterType, getCharacterType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterType", function() { return CharacterType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterType", function() { return getCharacterType; });
var CharacterType;
(function (CharacterType) {
    CharacterType[CharacterType["SPACE"] = 0] = "SPACE";
    CharacterType[CharacterType["ALPHA_LETTER"] = 1] = "ALPHA_LETTER";
    CharacterType[CharacterType["PUNCT"] = 2] = "PUNCT";
    CharacterType[CharacterType["HAN_LETTER"] = 3] = "HAN_LETTER";
    CharacterType[CharacterType["KATAKANA_LETTER"] = 4] = "KATAKANA_LETTER";
    CharacterType[CharacterType["HIRAGANA_LETTER"] = 5] = "HIRAGANA_LETTER";
    CharacterType[CharacterType["HALFWIDTH_KATAKANA_LETTER"] = 6] = "HALFWIDTH_KATAKANA_LETTER";
    CharacterType[CharacterType["THAI_LETTER"] = 7] = "THAI_LETTER";
})(CharacterType || (CharacterType = {}));
function isAlphabeticalScript(charCode) {
    return charCode < 0x2e80;
}
function isAscii(charCode) {
    return (charCode && 0xff80) === 0;
}
function isAsciiAlpha(charCode) {
    return ((charCode >= /* a = */ 0x61 && charCode <= /* z = */ 0x7a) ||
        (charCode >= /* A = */ 0x41 && charCode <= /* Z = */ 0x5a));
}
function isAsciiDigit(charCode) {
    return charCode >= /* 0 = */ 0x30 && charCode <= /* 9 = */ 0x39;
}
function isAsciiSpace(charCode) {
    return (charCode === /* SPACE = */ 0x20 ||
        charCode === /* TAB = */ 0x09 ||
        charCode === /* CR = */ 0x0d ||
        charCode === /* LF = */ 0x0a);
}
function isHan(charCode) {
    return (charCode >= 0x3400 && charCode <= 0x9fff) || (charCode >= 0xf900 && charCode <= 0xfaff);
}
function isKatakana(charCode) {
    return charCode >= 0x30a0 && charCode <= 0x30ff;
}
function isHiragana(charCode) {
    return charCode >= 0x3040 && charCode <= 0x309f;
}
function isHalfwidthKatakana(charCode) {
    return charCode >= 0xff60 && charCode <= 0xff9f;
}
function isThai(charCode) {
    // tslint:disable-next-line:no-bitwise
    return (charCode & 0xff80) === 0x0e00;
}
function getCharacterType(charCode) {
    if (isAlphabeticalScript(charCode)) {
        if (isAscii(charCode)) {
            if (isAsciiSpace(charCode)) {
                return CharacterType.SPACE;
            }
            else if (isAsciiAlpha(charCode) || isAsciiDigit(charCode) || charCode === /* UNDERSCORE = */ 0x5f) {
                return CharacterType.ALPHA_LETTER;
            }
            return CharacterType.PUNCT;
        }
        else if (isThai(charCode)) {
            return CharacterType.THAI_LETTER;
        }
        else if (charCode === /* NBSP = */ 0xa0) {
            return CharacterType.SPACE;
        }
        return CharacterType.ALPHA_LETTER;
    }
    if (isHan(charCode)) {
        return CharacterType.HAN_LETTER;
    }
    else if (isKatakana(charCode)) {
        return CharacterType.KATAKANA_LETTER;
    }
    else if (isHiragana(charCode)) {
        return CharacterType.HIRAGANA_LETTER;
    }
    else if (isHalfwidthKatakana(charCode)) {
        return CharacterType.HALFWIDTH_KATAKANA_LETTER;
    }
    return CharacterType.ALPHA_LETTER;
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/index.ts":
/*!***************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/index.ts ***!
  \***************************************************/
/*! exports provided: AnnotationLayerBuilder, DefaultAnnotationLayerFactory, CharacterType, getCharacterType, PDFPageViewBuffer, TextLayerBuilder, DefaultTextLayerFactory, rotateLeft, rotateRight, isValidRotation, CSS_UNITS, parseQueryString, getVisibleElements, binarySearchFirstItem, isElementBottomAfterViewTop, isElementRightAfterViewLeft, getOutputScale, approximateFraction, roundToDivide, watchScroll, scrollIntoView, isPortraitOrientation, getPDFFileNameFromURL, getPageSizeMilliliters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _anotation_layer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anotation-layer */ "../mnj-ngx-pdfviewer/src/lib/utils/anotation-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AnnotationLayerBuilder", function() { return _anotation_layer__WEBPACK_IMPORTED_MODULE_0__["AnnotationLayerBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultAnnotationLayerFactory", function() { return _anotation_layer__WEBPACK_IMPORTED_MODULE_0__["DefaultAnnotationLayerFactory"]; });

/* harmony import */ var _find_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-utils */ "../mnj-ngx-pdfviewer/src/lib/utils/find-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CharacterType", function() { return _find_utils__WEBPACK_IMPORTED_MODULE_1__["CharacterType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCharacterType", function() { return _find_utils__WEBPACK_IMPORTED_MODULE_1__["getCharacterType"]; });

/* harmony import */ var _page_view_buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-view-buffer */ "../mnj-ngx-pdfviewer/src/lib/utils/page-view-buffer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PDFPageViewBuffer", function() { return _page_view_buffer__WEBPACK_IMPORTED_MODULE_2__["PDFPageViewBuffer"]; });

/* harmony import */ var _text_layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text-layer */ "../mnj-ngx-pdfviewer/src/lib/utils/text-layer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextLayerBuilder", function() { return _text_layer__WEBPACK_IMPORTED_MODULE_3__["TextLayerBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultTextLayerFactory", function() { return _text_layer__WEBPACK_IMPORTED_MODULE_3__["DefaultTextLayerFactory"]; });

/* harmony import */ var _rotation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rotation */ "../mnj-ngx-pdfviewer/src/lib/utils/rotation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return _rotation__WEBPACK_IMPORTED_MODULE_4__["rotateLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return _rotation__WEBPACK_IMPORTED_MODULE_4__["rotateRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isValidRotation", function() { return _rotation__WEBPACK_IMPORTED_MODULE_4__["isValidRotation"]; });

/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-utils */ "../mnj-ngx-pdfviewer/src/lib/utils/ui-utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSS_UNITS", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["CSS_UNITS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["parseQueryString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getVisibleElements", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["getVisibleElements"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "binarySearchFirstItem", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["binarySearchFirstItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementBottomAfterViewTop", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["isElementBottomAfterViewTop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isElementRightAfterViewLeft", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["isElementRightAfterViewLeft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOutputScale", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["getOutputScale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "approximateFraction", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["approximateFraction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundToDivide", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["roundToDivide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchScroll", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["watchScroll"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["scrollIntoView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isPortraitOrientation", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["isPortraitOrientation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPDFFileNameFromURL", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["getPDFFileNameFromURL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPageSizeMilliliters", function() { return _ui_utils__WEBPACK_IMPORTED_MODULE_5__["getPageSizeMilliliters"]; });









/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/page-view-buffer.ts":
/*!**************************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/page-view-buffer.ts ***!
  \**************************************************************/
/*! exports provided: PDFPageViewBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PDFPageViewBuffer", function() { return PDFPageViewBuffer; });
class PDFPageViewBuffer {
    constructor(size) {
        this.size = size;
        this.data = [];
    }
    push(view) {
        const i = this.data.findIndex((v) => v.id === view.id);
        if (i >= 0) {
            this.data.splice(i, 1);
        }
        this.data.push(view);
        if (this.data.length > this.size) {
            this.data.shift().destroy();
        }
    }
    /**
     * After calling resize, the size of the buffer will be newSize. The optional
     * parameter pagesToKeep is, if present, an array of pages to push to the back
     * of the buffer, delaying their destruction. The size of pagesToKeep has no
     * impact on the final size of the buffer; if pagesToKeep has length larger
     * than newSize, some of those pages will be destroyed anyway.
     */
    resize(newSize, pagesToKeep) {
        this.size = newSize;
        if (pagesToKeep) {
            const pageIdsToKeep = new Set();
            for (let i = 0, iMax = pagesToKeep.length; i < iMax; ++i) {
                pageIdsToKeep.add(pagesToKeep[i].id);
            }
            moveToEndOfArray(this.data, function (page) {
                return pageIdsToKeep.has(page.id);
            });
        }
        while (this.data.length > this.size) {
            this.data.shift().destroy();
        }
    }
}
/**
 * Moves all elements of an array that satisfy condition to the end of the
 * array, preserving the order of the rest.
 */
function moveToEndOfArray(arr, condition) {
    const moved = [], len = arr.length;
    let write = 0;
    for (let read = 0; read < len; ++read) {
        if (condition(arr[read])) {
            moved.push(arr[read]);
        }
        else {
            arr[write] = arr[read];
            ++write;
        }
    }
    for (let read = 0; write < len; ++read, ++write) {
        arr[write] = moved[read];
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/rotation.ts":
/*!******************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/rotation.ts ***!
  \******************************************************/
/*! exports provided: rotateLeft, rotateRight, isValidRotation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateLeft", function() { return rotateLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rotateRight", function() { return rotateRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidRotation", function() { return isValidRotation; });
function rotateLeft(actualRotation) {
    return _rotate(actualRotation, -90);
}
function rotateRight(actualRotation) {
    return _rotate(actualRotation, 90);
}
function isValidRotation(angle) {
    return Number.isInteger(angle) && angle % 90 === 0;
}
function _rotate(actualRotation, degrees) {
    return (actualRotation + 360 + degrees) % 360;
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/text-layer.ts":
/*!********************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/text-layer.ts ***!
  \********************************************************/
/*! exports provided: TextLayerBuilder, DefaultTextLayerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextLayerBuilder", function() { return TextLayerBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultTextLayerFactory", function() { return DefaultTextLayerFactory; });
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist */ "../../node_modules/pdfjs-dist/build/pdf.js");
/* harmony import */ var pdfjs_dist__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__);

/**
 * The text layer builder provides text selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF's text. These divs
 * contain text that matches the PDF text they are overlaying. This object
 * also provides a way to highlight text that is being searched for.
 */
class TextLayerBuilder {
    constructor(textLayerDiv, pageIndex, viewport, findController = null, enhanceTextSelection = false) {
        this.textLayerDiv = textLayerDiv;
        this.pageIndex = pageIndex;
        this.viewport = viewport;
        this.findController = findController;
        this.enhanceTextSelection = enhanceTextSelection;
        this.renderingDone = false;
        this.textContent = null;
        this.textContentItemsStr = [];
        this.textContentStream = null;
        this.textDivs = [];
        this.textLayerDiv = textLayerDiv;
        this.textContent = null;
        this.textContentItemsStr = [];
        this.textContentStream = null;
        this.renderingDone = false;
        this.pageIdx = pageIndex;
        this.pageNumber = this.pageIdx + 1;
        this.matches = [];
        this.viewport = viewport;
        this.textDivs = [];
        this.findController = findController;
        this.textLayerRenderTask = null;
        this.enhanceTextSelection = enhanceTextSelection;
        this._bindMouse();
    }
    /**
     * @private
     */
    _finishRendering() {
        this.renderingDone = true;
        if (!this.enhanceTextSelection) {
            const endOfContent = document.createElement('div');
            endOfContent.className = 'endOfContent';
            this.textLayerDiv.appendChild(endOfContent);
        }
    }
    /**
     * Renders the text layer.
     *
     * @param {number} [timeout] - Wait for a specified amount of milliseconds
     *                             before rendering.
     */
    render(timeout = 0) {
        if (!(this.textContent || this.textContentStream) || this.renderingDone) {
            return;
        }
        this.cancel();
        this.textDivs = [];
        const textLayerFrag = document.createDocumentFragment();
        this.textLayerRenderTask = pdfjs_dist__WEBPACK_IMPORTED_MODULE_0__["renderTextLayer"]({
            textContent: this.textContent,
            textContentStream: this.textContentStream,
            container: textLayerFrag,
            viewport: this.viewport,
            textDivs: this.textDivs,
            textContentItemsStr: this.textContentItemsStr,
            timeout,
            enhanceTextSelection: this.enhanceTextSelection,
        });
        this.textLayerRenderTask.promise.then(() => {
            this.textLayerDiv.appendChild(textLayerFrag);
            this._finishRendering();
            this._updateMatches();
        });
    }
    /**
     * Cancel rendering of the text layer.
     */
    cancel() {
        if (this.textLayerRenderTask) {
            this.textLayerRenderTask.cancel();
            this.textLayerRenderTask = null;
        }
    }
    setTextContentStream(readableStream) {
        this.cancel();
        this.textContentStream = readableStream;
    }
    setTextContent(textContent) {
        this.cancel();
        this.textContent = textContent;
    }
    _convertMatches(matches, matchesLength) {
        // Early exit if there is nothing to convert.
        if (!matches) {
            return [];
        }
        const { findController, textContentItemsStr } = this;
        let i = 0;
        let iIndex = 0;
        const end = textContentItemsStr.length - 1;
        const queryLen = findController.state.query.length;
        const result = [];
        for (let m = 0, mm = matches.length; m < mm; m++) {
            // Calculate the start position.
            let matchIdx = matches[m];
            // Loop over the divIdxs.
            while (i !== end && matchIdx >= iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }
            if (i === textContentItemsStr.length) {
                console.error('Could not find a matching mapping');
            }
            const match = {
                begin: {
                    divIdx: i,
                    offset: matchIdx - iIndex,
                },
            };
            // Calculate the end position.
            if (matchesLength) {
                // Multiterm search.
                matchIdx += matchesLength[m];
            }
            else {
                // Phrase search.
                matchIdx += queryLen;
            }
            // Somewhat the same array as above, but use > instead of >= to get
            // the end position right.
            while (i !== end && matchIdx > iIndex + textContentItemsStr[i].length) {
                iIndex += textContentItemsStr[i].length;
                i++;
            }
            match.end = {
                divIdx: i,
                offset: matchIdx - iIndex,
            };
            result.push(match);
        }
        return result;
    }
    _renderMatches(matches) {
        // Early exit if there is nothing to render.
        if (matches.length === 0) {
            return;
        }
        const { findController, pageIdx, textContentItemsStr, textDivs } = this;
        const isSelectedPage = pageIdx === findController.selected.pageIdx;
        const selectedMatchIdx = findController.selected.matchIdx;
        const highlightAll = findController.state.highlightAll;
        let prevEnd = null;
        const infinity = {
            divIdx: -1,
            offset: undefined,
        };
        function beginText(begin, className) {
            const divIdx = begin.divIdx;
            textDivs[divIdx].textContent = '';
            appendTextToDiv(divIdx, 0, begin.offset, className);
        }
        function appendTextToDiv(divIdx, fromOffset, toOffset, className) {
            const div = textDivs[divIdx];
            const content = textContentItemsStr[divIdx].substring(fromOffset, toOffset);
            const node = document.createTextNode(content);
            if (className) {
                const span = document.createElement('span');
                span.className = className;
                span.appendChild(node);
                div.appendChild(span);
                return;
            }
            div.appendChild(node);
        }
        let i0 = selectedMatchIdx, i1 = i0 + 1;
        if (highlightAll) {
            i0 = 0;
            i1 = matches.length;
        }
        else if (!isSelectedPage) {
            // Not highlighting all and this isn't the selected page, so do nothing.
            return;
        }
        for (let i = i0; i < i1; i++) {
            const match = matches[i];
            const begin = match.begin;
            const end = match.end;
            const isSelected = isSelectedPage && i === selectedMatchIdx;
            const highlightSuffix = isSelected ? ' selected' : '';
            if (isSelected) {
                // Attempt to scroll the selected match into view.
                findController.scrollMatchIntoView({
                    element: textDivs[begin.divIdx],
                    pageIndex: pageIdx,
                    matchIndex: selectedMatchIdx,
                });
            }
            // Match inside new div.
            if (!prevEnd || begin.divIdx !== prevEnd.divIdx) {
                // If there was a previous div, then add the text at the end.
                if (prevEnd !== null) {
                    appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
                }
                // Clear the divs and set the content until the starting point.
                beginText(begin);
            }
            else {
                appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
            }
            if (begin.divIdx === end.divIdx) {
                appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
            }
            else {
                appendTextToDiv(begin.divIdx, begin.offset, infinity.offset, 'highlight begin' + highlightSuffix);
                for (let n0 = begin.divIdx + 1, n1 = end.divIdx; n0 < n1; n0++) {
                    textDivs[n0].className = 'highlight middle' + highlightSuffix;
                }
                beginText(end, 'highlight end' + highlightSuffix);
            }
            prevEnd = end;
        }
        if (prevEnd) {
            appendTextToDiv(prevEnd.divIdx, prevEnd.offset, infinity.offset);
        }
    }
    _updateMatches() {
        // Only show matches when all rendering is done.
        if (!this.renderingDone) {
            return;
        }
        const { findController, matches, pageIdx, textContentItemsStr, textDivs } = this;
        let clearedUntilDivIdx = -1;
        // Clear all current matches.
        for (let i = 0, ii = matches.length; i < ii; i++) {
            const match = matches[i];
            const begin = Math.max(clearedUntilDivIdx, match.begin.divIdx);
            for (let n = begin, end = match.end.divIdx; n <= end; n++) {
                const div = textDivs[n];
                div.textContent = textContentItemsStr[n];
                div.className = '';
            }
            clearedUntilDivIdx = match.end.divIdx + 1;
        }
        if (!findController || !findController.highlightMatches) {
            return;
        }
        // Convert the matches on the `findController` into the match format
        // used for the textLayer.
        const pageMatches = findController.pageMatches[pageIdx] || null;
        const pageMatchesLength = findController.pageMatchesLength[pageIdx] || null;
        this.matches = this._convertMatches(pageMatches, pageMatchesLength);
        this._renderMatches(this.matches);
    }
    /**
     * Improves text selection by adding an additional div where the mouse was
     * clicked. This reduces flickering of the content if the mouse is slowly
     * moved up or down.
     *
     * @private
     */
    _bindMouse() {
        const div = this.textLayerDiv;
        div.addEventListener('mousedown', () => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
                this.textLayerRenderTask.expandTextDivs(true);
                return;
            }
            const end = div.querySelector('.endOfContent');
            if (!end) {
                return;
            }
            end.classList.add('active');
        });
        div.addEventListener('mouseup', () => {
            if (this.enhanceTextSelection && this.textLayerRenderTask) {
                this.textLayerRenderTask.expandTextDivs(false);
                return;
            }
            const end = div.querySelector('.endOfContent');
            if (!end) {
                return;
            }
            end.classList.remove('active');
        });
    }
}
class DefaultTextLayerFactory {
    /**
     * @param {HTMLDivElement} textLayerDiv
     * @param {number} pageIndex
     * @param viewport
     * @param {PdfFindController} findController
     * @param {boolean} enhanceTextSelection
     * @returns {TextLayerBuilder}
     */
    static createTextLayerBuilder(textLayerDiv, pageIndex, viewport, findController, enhanceTextSelection = true) {
        return new TextLayerBuilder(textLayerDiv, pageIndex, viewport, findController, enhanceTextSelection);
    }
}


/***/ }),

/***/ "../mnj-ngx-pdfviewer/src/lib/utils/ui-utils.ts":
/*!******************************************************!*\
  !*** ../mnj-ngx-pdfviewer/src/lib/utils/ui-utils.ts ***!
  \******************************************************/
/*! exports provided: CSS_UNITS, parseQueryString, getVisibleElements, binarySearchFirstItem, isElementBottomAfterViewTop, isElementRightAfterViewLeft, getOutputScale, approximateFraction, roundToDivide, watchScroll, scrollIntoView, isPortraitOrientation, getPDFFileNameFromURL, getPageSizeMilliliters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSS_UNITS", function() { return CSS_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseQueryString", function() { return parseQueryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVisibleElements", function() { return getVisibleElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binarySearchFirstItem", function() { return binarySearchFirstItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementBottomAfterViewTop", function() { return isElementBottomAfterViewTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementRightAfterViewLeft", function() { return isElementRightAfterViewLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOutputScale", function() { return getOutputScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approximateFraction", function() { return approximateFraction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundToDivide", function() { return roundToDivide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchScroll", function() { return watchScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollIntoView", function() { return scrollIntoView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPortraitOrientation", function() { return isPortraitOrientation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPDFFileNameFromURL", function() { return getPDFFileNameFromURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPageSizeMilliliters", function() { return getPageSizeMilliliters; });
const CSS_UNITS = 96.0 / 72.0;
function parseQueryString(query) {
    const parts = query.split('&');
    const params = Object.create(null);
    for (let i = 0, ii = parts.length; i < ii; ++i) {
        const param = parts[i].split('=');
        const key = param[0].toLowerCase();
        const value = param.length > 1 ? param[1] : null;
        params[decodeURIComponent(key)] = decodeURIComponent(value);
    }
    return params;
}
function getVisibleElements(container, views, sortByVisibility = false, horizontal = false) {
    const top = container.scrollTop;
    const bottom = top + container.clientHeight;
    const left = container.scrollLeft;
    const right = left + container.clientWidth;
    const visible = [];
    const numViews = views.length;
    let firstVisibleElementInd;
    if (numViews === 0) {
        firstVisibleElementInd = 0;
    }
    else {
        firstVisibleElementInd = binarySearchFirstItem(views, (view) => horizontal
            ? isElementRightAfterViewLeft(container, view.container)
            : isElementBottomAfterViewTop(container, view.container));
    }
    // Please note the return value of the `binarySearchFirstItem` function when
    // no valid element is found (hence the `firstVisibleElementInd` check below).
    if (firstVisibleElementInd > 0 && firstVisibleElementInd < numViews && !horizontal) {
        // In wrapped scrolling (or vertical scrolling with spreads), with some page
        // sizes, isElementBottomAfterViewTop doesn't satisfy the binary search
        // condition: there can be pages with bottoms above the view top between
        // pages with bottoms below. This function detects and corrects that error;
        // see it for more comments.
        firstVisibleElementInd = backtrackBeforeAllVisibleElements(firstVisibleElementInd, views.map((v) => v.container), top);
    }
    // lastEdge acts as a cutoff for us to stop looping, because we know all
    // subsequent pages will be hidden.
    //
    // When using wrapped scrolling or vertical scrolling with spreads, we can't
    // simply stop the first time we reach a page below the bottom of the view;
    // the tops of subsequent pages on the same row could still be visible. In
    // horizontal scrolling, we don't have that issue, so we can stop as soon as
    // we pass `right`, without needing the code below that handles the -1 case.
    let lastEdge = horizontal ? right : -1;
    for (let i = firstVisibleElementInd; i < numViews; i++) {
        const view = views[i];
        const pageContainer = view.container;
        const currentWidth = pageContainer.offsetLeft + pageContainer.clientLeft;
        const currentHeight = pageContainer.offsetTop + pageContainer.clientTop;
        const viewWidth = pageContainer.clientWidth;
        const viewHeight = pageContainer.clientHeight;
        const viewRight = currentWidth + viewWidth;
        const viewBottom = currentHeight + viewHeight;
        if (lastEdge === -1) {
            // As commented above, this is only needed in non-horizontal cases.
            // Setting lastEdge to the bottom of the first page that is partially
            // visible ensures that the next page fully below lastEdge is on the
            // next row, which has to be fully hidden along with all subsequent rows.
            if (viewBottom >= bottom) {
                lastEdge = viewBottom;
            }
        }
        else if ((horizontal ? currentWidth : currentHeight) > lastEdge) {
            break;
        }
        if (viewBottom <= top || currentHeight >= bottom || viewRight <= left || currentWidth >= right) {
            continue;
        }
        const hiddenHeight = Math.max(0, top - currentHeight) + Math.max(0, viewBottom - bottom);
        const hiddenWidth = Math.max(0, left - currentWidth) + Math.max(0, viewRight - right);
        // tslint:disable-next-line:no-bitwise
        const percent = (((viewHeight - hiddenHeight) * (viewWidth - hiddenWidth) * 100) / viewHeight / viewWidth) | 0;
        visible.push({
            id: view.id,
            x: currentWidth,
            y: currentHeight,
            view,
            percent,
        });
    }
    const first = visible[0];
    const last = visible[visible.length - 1];
    if (sortByVisibility) {
        visible.sort(function (a, b) {
            const pc = a.percent - b.percent;
            if (Math.abs(pc) > 0.001) {
                return -pc;
            }
            return a.id - b.id; // ensure stability
        });
    }
    return { first: first, last: last, views: visible };
}
function binarySearchFirstItem(items, condition) {
    let minIndex = 0;
    let maxIndex = items.length - 1;
    if (items.length === 0 || !condition(items[maxIndex])) {
        return items.length;
    }
    if (condition(items[minIndex])) {
        return minIndex;
    }
    while (minIndex < maxIndex) {
        // tslint:disable-next-line:no-bitwise
        const currentIndex = (minIndex + maxIndex) >> 1;
        const currentItem = items[currentIndex];
        if (condition(currentItem)) {
            maxIndex = currentIndex;
        }
        else {
            minIndex = currentIndex + 1;
        }
    }
    return minIndex; /* === maxIndex */
}
function isElementBottomAfterViewTop(element, view) {
    const viewBottom = view.offsetTop + view.clientTop + view.clientHeight;
    return viewBottom > element.scrollTop;
}
function isElementRightAfterViewLeft(element, view) {
    const viewRight = view.offsetLeft + view.clientLeft + view.clientWidth;
    return viewRight > element.scrollLeft;
}
/**
 * Helper function for getVisibleElements.
 *
 * @param {number} index - initial guess at the first visible element
 * @param {Array} views - array of pages, into which `index` is an index
 * @param {number} top - the top of the scroll pane
 * @returns {number} less than or equal to `index` that is definitely at or
 *   before the first visible element in `views`, but not by too much. (Usually,
 *   this will be the first element in the first partially visible row in
 *   `views`, although sometimes it goes back one row further.)
 */
function backtrackBeforeAllVisibleElements(index, views, top) {
    // binarySearchFirstItem's assumption is that the input is ordered, with only
    // one index where the conditions flips from false to true: [false ...,
    // true...]. With vertical scrolling and spreads, it is possible to have
    // [false ..., true, false, true ...]. With wrapped scrolling we can have a
    // similar sequence, with many more mixed true and false in the middle.
    //
    // So there is no guarantee that the binary search yields the index of the
    // first visible element. It could have been any of the other visible elements
    // that were preceded by a hidden element.
    // Of course, if either this element or the previous (hidden) element is also
    // the first element, there's nothing to worry about.
    if (index < 2) {
        return index;
    }
    // That aside, the possible cases are represented below.
    //
    //     ****  = fully hidden
    //     A*B*  = mix of partially visible and/or hidden pages
    //     CDEF  = fully visible
    //
    // (1) Binary search could have returned A, in which case we can stop.
    // (2) Binary search could also have returned B, in which case we need to
    // check the whole row.
    // (3) Binary search could also have returned C, in which case we need to
    // check the whole previous row.
    //
    // There's one other possibility:
    //
    //     ****  = fully hidden
    //     ABCD  = mix of fully and/or partially visible pages
    //
    // (4) Binary search could only have returned A.
    // Initially assume that we need to find the beginning of the current row
    // (case 1, 2, or 4), which means finding a page that is above the current
    // page's top. If the found page is partially visible, we're definitely not in
    // case 3, and this assumption is correct.
    let elt = views[index];
    let pageTop = elt.offsetTop + elt.clientTop;
    if (pageTop >= top) {
        // The found page is fully visible, so we're actually either in case 3 or 4,
        // and unfortunately we can't tell the difference between them without
        // scanning the entire previous row, so we just conservatively assume that
        // we do need to backtrack to that row. In both cases, the previous page is
        // in the previous row, so use its top instead.
        elt = views[index - 1];
        pageTop = elt.offsetTop + elt.clientTop;
    }
    // Now we backtrack to the first page that still has its bottom below
    // `pageTop`, which is the top of a page in the first visible row (unless
    // we're in case 4, in which case it's the row before that).
    // `index` is found by binary search, so the page at `index - 1` is
    // invisible and we can start looking for potentially visible pages from
    // `index - 2`. (However, if this loop terminates on its first iteration,
    // which is the case when pages are stacked vertically, `index` should remain
    // unchanged, so we use a distinct loop variable.)
    for (let i = index - 2; i >= 0; --i) {
        elt = views[i];
        if (elt.offsetTop + elt.clientTop + elt.clientHeight <= pageTop) {
            // We have reached the previous row, so stop now.
            // This loop is expected to terminate relatively quickly because the
            // number of pages per row is expected to be small.
            break;
        }
        index = i;
    }
    return index;
}
/**
 * Returns scale factor for the canvas. It makes sense for the HiDPI displays.
 * @returns {Object} The object with horizontal (sx) and vertical (sy)
 *                   scales. The scaled property is set to false if scaling is
 *                   not required, true otherwise.
 */
function getOutputScale(ctx) {
    const devicePixelRatio = window.devicePixelRatio || 1;
    const backingStoreRatio = ctx.webkitBackingStorePixelRatio ||
        ctx.mozBackingStorePixelRatio ||
        ctx.msBackingStorePixelRatio ||
        ctx.oBackingStorePixelRatio ||
        ctx.backingStorePixelRatio ||
        1;
    const pixelRatio = devicePixelRatio / backingStoreRatio;
    return {
        sx: pixelRatio,
        sy: pixelRatio,
        scaled: pixelRatio !== 1,
    };
}
/**
 *  Approximates float number as a fraction using Farey sequence (max order
 *  of 8).
 *  @param {number} x - Positive float number.
 *  @returns {Array} Estimated fraction: the first array item is a numerator,
 *                   the second one is a denominator.
 */
function approximateFraction(x) {
    // Fast paths for int numbers or their inversions.
    if (Math.floor(x) === x) {
        return [x, 1];
    }
    const xinv = 1 / x;
    const limit = 8;
    if (xinv > limit) {
        return [1, limit];
    }
    else if (Math.floor(xinv) === xinv) {
        return [1, xinv];
    }
    const x_ = x > 1 ? xinv : x;
    // a/b and c/d are neighbours in Farey sequence.
    let a = 0, b = 1, c = 1, d = 1;
    // Limiting search to order 8.
    while (true) {
        // Generating next term in sequence (order of q).
        const p = a + c, q = b + d;
        if (q > limit) {
            break;
        }
        if (x_ <= p / q) {
            c = p;
            d = q;
        }
        else {
            a = p;
            b = q;
        }
    }
    let result;
    // Select closest of the neighbours to x.
    if (x_ - a / b < c / d - x_) {
        result = x_ === x ? [a, b] : [b, a];
    }
    else {
        result = x_ === x ? [c, d] : [d, c];
    }
    return result;
}
function roundToDivide(elem, div) {
    const r = elem % div;
    return r === 0 ? elem : Math.round(elem - r + div);
}
/**
 * Helper function to start monitoring the scroll event and converting them into
 * PDF.js friendly one: with scroll debounce and scroll direction.
 */
function watchScroll(viewAreaElement, callback) {
    const debounceScroll = () => {
        if (rAF) {
            return;
        }
        // schedule an invocation of scroll for next animation frame.
        rAF = window.requestAnimationFrame(function viewAreaElementScrolled() {
            rAF = null;
            const currentX = viewAreaElement.scrollLeft;
            const lastX = state.lastX;
            if (currentX !== lastX) {
                state.right = currentX > lastX;
            }
            state.lastX = currentX;
            const currentY = viewAreaElement.scrollTop;
            const lastY = state.lastY;
            if (currentY !== lastY) {
                state.down = currentY > lastY;
            }
            state.lastY = currentY;
            callback(state);
        });
    };
    const state = {
        right: true,
        down: true,
        lastX: viewAreaElement.scrollLeft,
        lastY: viewAreaElement.scrollTop,
        _eventHandler: debounceScroll,
    };
    let rAF = null;
    viewAreaElement.addEventListener('scroll', debounceScroll, true);
    return state;
}
/**
 * Scrolls specified element into view of its parent.
 * @param {Object} element - The element to be visible.
 * @param parent - The element containing the item we want to make visible
 * @param {Object} spot - An object with optional top and left properties,
 *   specifying the offset from the top left edge.
 * @param {boolean} skipOverflowHiddenElements - Ignore elements that have
 *   the CSS rule `overflow: hidden;` set. The default is false.
 */
function scrollIntoView(element, parent, spot, skipOverflowHiddenElements = false) {
    // Assuming offsetParent is available (it's not available when viewer is in
    // hidden iframe or object). We have to scroll: if the offsetParent is not set
    // producing the error. See also animationStarted.
    parent = parent || element.offsetParent;
    if (!parent) {
        console.error('offsetParent is not set -- cannot scroll');
        return;
    }
    let offsetY = element.offsetTop + element.clientTop - parent.offsetTop;
    let offsetX = element.offsetLeft + element.clientLeft - parent.offsetLeft;
    while ((parent.clientHeight === parent.scrollHeight && parent.clientWidth === parent.scrollWidth) ||
        (skipOverflowHiddenElements && getComputedStyle(parent).overflow === 'hidden')) {
        if (parent.dataset._scaleY) {
            offsetY /= parent.dataset._scaleY;
            offsetX /= parent.dataset._scaleX;
        }
        offsetY += parent.offsetTop;
        offsetX += parent.offsetLeft;
        parent = parent.offsetParent;
        if (!parent) {
            return; // no need to scroll
        }
    }
    if (spot) {
        if (spot.top !== undefined) {
            offsetY += spot.top;
        }
        if (spot.left !== undefined) {
            offsetX += spot.left;
            parent.scrollLeft = offsetX;
        }
    }
    parent.scrollTop = offsetY;
}
function isPortraitOrientation(size) {
    return size.width <= size.height;
}
/**
 * Returns the filename or guessed filename from the url (see issue 3455).
 * @param {string} url - The original PDF location.
 * @param {string} defaultFilename - The value returned if the filename is
 *   unknown, or the protocol is unsupported.
 * @returns {string} Guessed PDF filename.
 */
function getPDFFileNameFromURL(url, defaultFilename = 'document.pdf') {
    if (typeof url !== 'string') {
        return defaultFilename;
    }
    if (isDataSchema(url)) {
        console.warn('getPDFFileNameFromURL: ' + 'ignoring "data:" URL for performance reasons.');
        return defaultFilename;
    }
    const reURI = /^(?:(?:[^:]+:)?\/\/[^\/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/;
    //            SCHEME        HOST         1.PATH  2.QUERY   3.REF
    // Pattern to get last matching NAME.pdf
    const reFilename = /[^\/?#=]+\.pdf\b(?!.*\.pdf\b)/i;
    const splitURI = reURI.exec(url);
    let suggestedFilename = reFilename.exec(splitURI[1]) || reFilename.exec(splitURI[2]) || reFilename.exec(splitURI[3]);
    if (suggestedFilename) {
        suggestedFilename = suggestedFilename[0];
        if (suggestedFilename.includes('%')) {
            // URL-encoded %2Fpath%2Fto%2Ffile.pdf should be file.pdf
            try {
                suggestedFilename = reFilename.exec(decodeURIComponent(suggestedFilename))[0];
            }
            catch (ex) {
                // Possible (extremely rare) errors:
                // URIError "Malformed URI", e.g. for "%AA.pdf"
                // TypeError "null has no properties", e.g. for "%2F.pdf"
            }
        }
    }
    return suggestedFilename || defaultFilename;
}
function isDataSchema(url) {
    let i = 0;
    const ii = url.length;
    while (i < ii && url[i].trim() === '') {
        i++;
    }
    return url.substring(i, i + 5).toLowerCase() === 'data:';
}
/**
 * Gets the size of the specified page, converted from PDF units to inches.
 * @param {Object} An Object containing the properties: {Array} `view`,
 *   {number} `userUnit`, and {number} `rotate`.
 * @returns {Object} An Object containing the properties: {number} `width`
 *   and {number} `height`, given in inches.
 */
function getPageSizeMilliliters({ view, userUnit, rotate }) {
    const [x1, y1, x2, y2] = view;
    // We need to take the page rotation into account as well.
    const changeOrientation = rotate % 180 !== 0;
    const width = ((x2 - x1) / 72) * userUnit;
    const height = ((y2 - y1) / 72) * userUnit;
    // 1in == 25.4mm; no need to round to 2 decimals for millimeters.
    const sizeMillimeters = {
        width: Math.round(width * 25.4 * 10) / 10,
        height: Math.round(height * 25.4 * 10) / 10,
    };
    return {
        width: changeOrientation ? sizeMillimeters.height : sizeMillimeters.width,
        height: changeOrientation ? sizeMillimeters.width : sizeMillimeters.height,
    };
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "../../node_modules/@angular/cdk/fesm2015/coercion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var mnj_ngx_pdfviewer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mnj-ngx-pdfviewer */ "../../dist/mnj-ngx-pdfviewer/fesm2015/mnj-ngx-pdfviewer.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/flex-layout/flex */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-upload-button.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-download-button.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-print-button.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-properties-button.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-viewer.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-thumbnail-viewer.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-toc-viewer.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-attachments-viewer.ts");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-page-viewer.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib_directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input */ "../mnj-ngx-pdfviewer/src/lib/directives/pdf-search-input.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");





































const _c0 = ["controlsContainer"];
const _c1 = ["pdfPropertiesDialog"];
const _c2 = ["viewer"];
function AppComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeInOut", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1._loadingProgress, "%");
} }
function AppComponent_ng_container_68_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_68_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](90); return _r10.findPrevious(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_68_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24); _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](90); return _r10.findNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx_r7.matchesFound.current, " of ", ctx_r7.matchesFound.total, "");
} }
function AppComponent_button_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "expand_more");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](123);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r16);
} }
function AppComponent_ng_template_96_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "collections");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "thumbnails");
} }
function AppComponent_ng_template_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "toc");
} }
function AppComponent_ng_template_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "attach_file");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matTooltip", "attachments");
} }
function AppComponent_ng_container_125_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_125_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r26.previousPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "navigate_before");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Previous Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_125_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r28.nextPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "navigate_next");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Next Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_126_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_126_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r29.zoomOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "zoom_out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Zoom out");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_126_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r31.zoomIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "zoom_in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Zoom in");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_127_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_127_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r32.rotateLeft(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "rotate_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Rotate Left");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_ng_container_127_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r34.rotateRight(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "rotate_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Rotate Right");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_128_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "cloud_download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Download");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("fileLoaded", function AppComponent_ng_container_128_Template_button_fileLoaded_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r35.onPdfUploaded($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "cloud_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "print");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Print");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pdfProperties", function AppComponent_ng_container_128_Template_button_pdfProperties_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r37.showProperties($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Pdf Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](90);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10)("disabled", !ctx_r20.pdfSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10)("disabled", !ctx_r20.pdfSrc);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10)("disabled", !ctx_r20.pdfSrc);
} }
function AppComponent_ng_template_129_mat_list_item_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "File name");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r38.pdfProps.fileName);
} }
function AppComponent_ng_template_129_mat_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "File size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r39.pdfProps.fileSize, " bytes");
} }
function AppComponent_ng_template_129_mat_list_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r40.pdfProps.title);
} }
function AppComponent_ng_template_129_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Author");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r41.pdfProps.author);
} }
function AppComponent_ng_template_129_mat_list_item_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Subject");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r42.pdfProps.subject);
} }
function AppComponent_ng_template_129_mat_list_item_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Keywords");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r43.pdfProps.keywords);
} }
function AppComponent_ng_template_129_mat_list_item_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Created on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 1, ctx_r44.pdfProps.creationDate, "short"));
} }
function AppComponent_ng_template_129_mat_list_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Modified on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](5, 1, ctx_r45.pdfProps.updateDate, "short"));
} }
function AppComponent_ng_template_129_mat_list_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Created by");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r46.pdfProps.creator);
} }
function AppComponent_ng_template_129_mat_list_item_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Pdf producer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r47.pdfProps.pdfProducer);
} }
function AppComponent_ng_template_129_mat_list_item_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Pdf version");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r48.pdfProps.pdfVersion);
} }
function AppComponent_ng_template_129_mat_list_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Page count");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r49.pdfProps.pageCount, " pages");
} }
function AppComponent_ng_template_129_mat_list_item_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-list-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Page size");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r50.pdfProps.pageSize.width, "px - ", ctx_r50.pdfProps.pageSize.height, "px");
} }
function AppComponent_ng_template_129_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h4", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "PDF Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AppComponent_ng_template_129_mat_list_item_4_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_ng_template_129_mat_list_item_5_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AppComponent_ng_template_129_mat_list_item_6_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppComponent_ng_template_129_mat_list_item_7_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AppComponent_ng_template_129_mat_list_item_8_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AppComponent_ng_template_129_mat_list_item_9_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AppComponent_ng_template_129_mat_list_item_10_Template, 6, 4, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AppComponent_ng_template_129_mat_list_item_11_Template, 6, 4, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, AppComponent_ng_template_129_mat_list_item_12_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, AppComponent_ng_template_129_mat_list_item_13_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, AppComponent_ng_template_129_mat_list_item_14_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AppComponent_ng_template_129_mat_list_item_15_Template, 5, 1, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, AppComponent_ng_template_129_mat_list_item_16_Template, 5, 2, "mat-list-item", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-dialog-actions", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.fileSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.keywords);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.creationDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.updateDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.creator);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.pdfProducer);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.pdfVersion);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.pageCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r22.pdfProps.pageSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx_r22.color);
} }
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
class AppComponent {
    constructor(document, _elementRef, dialog, _changeDetectorRef, _overlayContainer) {
        this.document = document;
        this.dialog = dialog;
        this._changeDetectorRef = _changeDetectorRef;
        this._overlayContainer = _overlayContainer;
        this.pdfSrc = window[PDF_SRC_DATA] || 'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
        this.outlines = 0;
        this.attachments = 0;
        this.selectedScaleNumber = 1;
        this.zoomOptions = ZoomOptions;
        this.matchesFound = { total: 0, current: 0 };
        this._showLoader = false;
        this._loadingProgress = 0;
        this.searchForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            caseSensitive: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            entireWord: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
            highlightAll: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](true),
            phraseSearch: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](false),
        });
        this.pageControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1);
        this.scaleControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1);
        this.rotationControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](0);
        this.viewerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            pageControl: this.pageControl,
            scaleControl: this.scaleControl,
            rotationControl: this.rotationControl,
            searchControl: this.searchForm,
        });
        this.hiddenNodes = [];
        this.color = 'accent';
    }
    set theme(value) {
        if (value !== this._theme) {
            this._applyTheme(value);
            this._theme = value;
        }
    }
    ngAfterViewInit() {
        this.theme = 'light-theme';
        setTimeout((_) => this._updateControlVisibility());
    }
    _updateControlVisibility() {
        this.hiddenNodes = [];
        const container = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(this.controlsContainer.nativeElement);
        const children = container.children;
        let actualWidth = container.clientWidth;
        let index = 0;
        while (actualWidth && index < children.length) {
            const child = children[index];
            const style = getComputedStyle(child);
            const childWidth = child.offsetWidth +
                parseFloat(style.borderLeftWidth) +
                parseFloat(style.borderRightWidth) +
                parseFloat(style.marginLeft) +
                parseFloat(style.marginRight);
            child.style.visibility = 'visible';
            if (childWidth < actualWidth) {
                actualWidth -= childWidth;
            }
            else {
                break;
            }
            index++;
        }
        // Left items must be hidden
        for (index; index < children.length; index++) {
            const child = children[index];
            const node = child.cloneNode(true);
            child.style.visibility = 'hidden';
            this.hiddenNodes.push(node);
        }
        this._changeDetectorRef.detectChanges();
    }
    onPdfLoaded(pdf) {
        this.pdf = pdf.pdf;
        this.pdf.getOutline().then((r) => (this.outlines = (r && r.lenght) || 0));
        this.pdf.getAttachments().then((r) => (this.attachments = (r && Object.keys(r).length) || 0));
    }
    onPdfProperties(pdfProps) {
        this.pdfProps = pdfProps.properties;
    }
    showProperties(pdfProps) {
        this.pdfProps = pdfProps;
        this.dialog.open(this.propertiesDialog);
    }
    previousPage() {
        this.pageControl.setValue(Math.max(1, this.pageControl.value - 1));
        this.selectPage();
    }
    selectPage() {
        this.pdfViewer.page = this.pageControl.value;
    }
    nextPage() {
        this.pageControl.patchValue(Math.min(this.pdf.numPages, this.pageControl.value + 1));
        this.selectPage();
    }
    zoomOut() {
        this.scaleControl.setValue(Math.max(0.4, this.selectedScaleNumber - ZoomStep));
    }
    zoomIn() {
        this.scaleControl.setValue(Math.min(4, this.selectedScaleNumber + ZoomStep));
    }
    getScale() {
        return this.scaleControl.value;
    }
    updateScale(event) {
        this.scaleControl.setValue(event.actualScale);
        this.selectedScaleNumber = event.actualScaleNumber;
    }
    getScaleOptionValue(value) {
        const parsedValue = Number.parseFloat(value);
        return isNaN(parsedValue) ? value : parsedValue;
    }
    rotateLeft() {
        this.rotationControl.setValue(Object(mnj_ngx_pdfviewer__WEBPACK_IMPORTED_MODULE_5__["rotateLeft"])(this.rotationControl.value));
    }
    rotateRight() {
        this.rotationControl.setValue(Object(mnj_ngx_pdfviewer__WEBPACK_IMPORTED_MODULE_5__["rotateRight"])(this.rotationControl.value));
    }
    onSearchComplete(event) {
        this.matchesFound = event.matchesCount;
    }
    onSearchState(event) {
        this.matchesFound = event.matchesCount;
    }
    showNewTab() {
        const externalViewer = window.open(location.origin, '_blank');
        externalViewer[PDF_SRC_DATA] = this.pdfViewer.pdfSrc;
    }
    onPdfUploaded(pdf) {
        this.pdfViewer.pdfSrc = pdf;
    }
    onPdfDropped(event) {
        event.preventDefault();
        event.stopPropagation();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            for (const file of files) {
                if (file.type === 'application/pdf') {
                    const fileReader = new FileReader();
                    fileReader.onload = (evt) => {
                        // @ts-ignore
                        const buffer = evt.target.result;
                        this.pdfViewer.pdfSrc = new Uint8Array(buffer);
                    };
                    fileReader.readAsArrayBuffer(file);
                }
            }
        }
    }
    onPrintProgress(event) {
        const { progress } = event;
        if (progress === 0 || progress === 100) {
            this._showLoader = false;
            this._loadingProgress = 0;
            return;
        }
        this._showLoader = true;
        this._loadingProgress = progress;
    }
    _applyTheme(theme) {
        this.document.body.classList.remove(this._theme);
        this._overlayContainer.getContainerElement().classList.remove(this._theme);
        this.document.body.classList.add(theme);
        this._overlayContainer.getContainerElement().classList.add(theme);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.controlsContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.propertiesDialog = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.pdfViewer = _t.first);
    } }, inputs: { pdfSrc: "pdfSrc" }, decls: 131, vars: 32, consts: [["color", "primary", 1, "header", "mat-elevation-z6"], ["mat-toolbar-row", "", 1, "header__nav"], [1, "header__nav--title"], [1, "header__nav--spacer"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["xmlns", "http://www.w3.org/2000/svg", "height", "24", "viewBox", "0 0 24 24", "width", "24"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"], ["themeMenu", "matMenu"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", "href", "https://github.com/Davidmnj91/mnj-ngx-pdfviewer", 1, "header__nav--github-button"], ["height", "32", "viewBox", "0 0 16 16", "version", "1.1", "width", "32", "aria-hidden", "true"], ["fill-rule", "evenodd", "d", "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"], ["class", "spinner", 4, "ngIf"], [1, "main"], [1, "container", "b-w-0", 3, "drop"], ["fxLayoutGap", "15px", "fxLayoutAlign", "start center"], ["fxLayoutAlign", "center center"], ["mat-icon-button", "", 3, "click"], ["vertical", ""], ["fxFlex", "1 0 0%", "fxLayout", "row nowrap", "fxLayoutGap", "15px", "fxLayoutAlign", "start center", 2, "overflow", "hidden", 3, "formGroup"], ["controlsContainer", ""], ["fxLayoutAlign", "start center", "fxLayoutGap", "10px"], ["pageControls", ""], ["fxFlex", "1 0 auto"], ["scaleControls", ""], ["rotationControls", ""], ["fxLayout", "", "fxLayoutAlign", "start center", "fxLayoutGap", "10px"], ["searchControls", ""], [4, "ngIf"], ["miscControls", ""], ["mat-icon-button", "", "mnjPdfUpload", "", 3, "for"], ["mat-icon-button", "", "mnjPdfDownload", "", 3, "for"], ["mat-icon-button", "", "mnjPdfPrint", "", 3, "for"], ["mat-icon-button", "", "mnjPdfProperties", "", 3, "for", "pdfProperties"], ["mat-icon-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], [1, "pdf-container", "overflow-y-hidden"], [3, "pdfSrc", "scale", "rotation", "searchOptions", "pdfLoaded", "pdfProperties", "pageViewerPageChanging", "pageViewerRotationChanging", "pageViewerScaleChanging", "pdfSearchComplete", "pdfSearchProgress", "pdfPrintProgress"], ["viewer", "mnjPdfViewer"], ["autosize", "", 3, "backdropClick"], ["mode", "side"], ["sidenav", ""], ["mat-tab-label", ""], [1, "tab-body-viewer"], [3, "for"], ["searchOptions", "matMenu"], ["mat-menu-item", "", "fxLayoutAlign", "start center", "fxLayoutGap", "10px", 2, "padding", "10px", "height", "70px", 3, "formGroup", "click"], ["matInput", "", "mnjPdfSearchInput", "", "placeholder", "Search", 3, "for"], ["formControlName", "highlightAll", 3, "color"], ["formControlName", "caseSensitive", 3, "color"], ["formControlName", "entireWord", 3, "color"], ["formControlName", "phraseSearch", 3, "color"], ["controlsMenu", "matMenu"], ["fxLayout", "column"], ["pdfPropertiesDialog", ""], [1, "spinner"], [1, "mat-h3", "spinner--progress"], [3, "matTooltip"], ["mat-menu-item", "", "color", "primary", 3, "click"], ["mat-menu-item", "", "color", "primary", "mnjPdfDownload", "", 3, "for", "disabled"], ["mat-menu-item", "", "color", "primary", "mnjPdfUpload", "", 3, "for", "fileLoaded"], ["mat-menu-item", "", "color", "primary", "mnjPdfPrint", "", 3, "for", "disabled"], ["mat-menu-item", "", "color", "primary", "mnjPdfProperties", "", 3, "for", "disabled", "pdfProperties"], ["matDialogTitle", ""], ["align", "end"], ["mat-stroked-button", "", "color", "primary", "matDialogClose", "", "autoFocus", "", 3, "color"], ["mat-line", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "MNJ NG PDF Viewer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-menu", null, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener() { return ctx.theme = "light-theme"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Light Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_13_listener() { return ctx.theme = "dark-theme"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Dark Theme");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Github ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AppComponent_div_19_Template, 4, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "mat-card", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("drop", function AppComponent_Template_div_drop_21_listener($event) { return ctx.onPdfDropped($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](93); return _r11.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() { return ctx.previousPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "navigate_before");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_37_listener() { return ctx.nextPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "navigate_next");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 22, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_43_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "zoom_out");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_48_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "zoom_in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 22, 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_54_listener() { return ctx.rotateLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "rotate_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_59_listener() { return ctx.rotateRight(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "rotate_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](68, AppComponent_ng_container_68_Template, 9, 2, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 22, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "cloud_upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](75, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "cloud_download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "print");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](83, "mat-divider", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pdfProperties", function AppComponent_Template_button_pdfProperties_84_listener($event) { return ctx.showProperties($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "info");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, AppComponent_button_87_Template, 3, 1, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "mnj-pdf-viewer", 37, 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pdfLoaded", function AppComponent_Template_mnj_pdf_viewer_pdfLoaded_89_listener($event) { return ctx.onPdfLoaded($event); })("pdfProperties", function AppComponent_Template_mnj_pdf_viewer_pdfProperties_89_listener($event) { return ctx.onPdfProperties($event); })("pageViewerPageChanging", function AppComponent_Template_mnj_pdf_viewer_pageViewerPageChanging_89_listener($event) { return ctx.pageControl.setValue($event.actualPageIndex); })("pageViewerRotationChanging", function AppComponent_Template_mnj_pdf_viewer_pageViewerRotationChanging_89_listener($event) { return ctx.rotationControl.setValue($event.actualRotation); })("pageViewerScaleChanging", function AppComponent_Template_mnj_pdf_viewer_pageViewerScaleChanging_89_listener($event) { return ctx.updateScale($event); })("pdfSearchComplete", function AppComponent_Template_mnj_pdf_viewer_pdfSearchComplete_89_listener($event) { return ctx.onSearchComplete($event); })("pdfSearchProgress", function AppComponent_Template_mnj_pdf_viewer_pdfSearchProgress_89_listener($event) { return ctx.onSearchState($event); })("pdfPrintProgress", function AppComponent_Template_mnj_pdf_viewer_pdfPrintProgress_89_listener($event) { return ctx.onPrintProgress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "mat-sidenav-container", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("backdropClick", function AppComponent_Template_mat_sidenav_container_backdropClick_91_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](93); return _r11.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "mat-sidenav", 40, 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](96, AppComponent_ng_template_96_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](98, "mnj-pdf-thumbnail-viewer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, AppComponent_ng_template_100_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "mnj-pdf-toc-viewer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](104, AppComponent_ng_template_104_Template, 2, 1, "ng-template", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "mnj-pdf-attachments-viewer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "mat-sidenav-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](108, "mnj-pdf-page-viewer", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "mat-menu", null, 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "form", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_form_click_111_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "mat-checkbox", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "HighlightAll");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "mat-checkbox", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117, "Match Case");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "mat-checkbox", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "Whole Words");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "mat-checkbox", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Search Phrase");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "mat-menu", null, 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](125, AppComponent_ng_container_125_Template, 11, 0, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](126, AppComponent_ng_container_126_Template, 11, 0, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](127, AppComponent_ng_container_127_Template, 11, 0, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](128, AppComponent_ng_container_128_Template, 21, 7, "ng-container", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](129, AppComponent_ng_template_129_Template, 21, 14, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](10);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](42);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](53);
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](71);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](90);
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx._showLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.viewerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.pageControl.value, " of ", ctx.pdf == null ? null : ctx.pdf.numPages, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.scaleControl.value * 100, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.rotationControl.value, "\u00BA");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matMenuTriggerFor", _r15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.matchesFound && ctx.matchesFound.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.hiddenNodes.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pdfSrc", ctx.pdfSrc)("scale", ctx.scaleControl.value)("rotation", ctx.rotationControl.value)("searchOptions", ctx.searchForm.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r3.style.visibility === "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r4.style.visibility === "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r5.style.visibility === "hidden");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _r8.style.visibility === "hidden");
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuItem"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_14__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_12__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_upload_button__WEBPACK_IMPORTED_MODULE_15__["PdfUploadButton"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_download_button__WEBPACK_IMPORTED_MODULE_16__["PdfDownloadButton"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_print_button__WEBPACK_IMPORTED_MODULE_17__["PdfPrintButton"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_properties_button__WEBPACK_IMPORTED_MODULE_18__["PdfPropertiesButton"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_viewer__WEBPACK_IMPORTED_MODULE_19__["MnjPdfViewer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__["MatTabLabel"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_thumbnail_viewer__WEBPACK_IMPORTED_MODULE_22__["PdfThumbnailViewer"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_toc_viewer__WEBPACK_IMPORTED_MODULE_23__["PdfTocViewer"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_attachments_viewer__WEBPACK_IMPORTED_MODULE_24__["PdfAttachmentsViewer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavContent"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_page_viewer__WEBPACK_IMPORTED_MODULE_25__["PdfPageViewer"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_26__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInput"], _mnj_ngx_pdfviewer_src_lib_directives_pdf_search_input__WEBPACK_IMPORTED_MODULE_28__["PdfSearchInput"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatSpinner"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_31__["MatTooltip"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogContent"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatList"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogClose"], _angular_material_list__WEBPACK_IMPORTED_MODULE_32__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_33__["MatLine"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 64px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}\n\n.header__nav[_ngcontent-%COMP%] {\n  align-items: center;\n  display: flex;\n  flex-flow: row wrap;\n  flex: 1 0 100%;\n}\n\n.header__nav--title[_ngcontent-%COMP%] {\n  font-size: 400 16px/28px;\n}\n\n.header__nav--spacer[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n}\n\n.header__nav--github-button[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n\n.main[_ngcontent-%COMP%] {\n  border-radius: 0px;\n  height: 100%;\n  overflow: hidden;\n  padding: 0;\n}\n\n.container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  height: calc(100% - 40px);\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   .mat-input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   .mat-select[_ngcontent-%COMP%] {\n  height: 32px;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   span.mat-body[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   mat-sidenav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%]    > .mnj-page-viewer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.container[_ngcontent-%COMP%]   .pdf-container[_ngcontent-%COMP%]   .mnj-thumbnail-viewer[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n\n.mat-tab-group[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.mat-tab-group[_ngcontent-%COMP%]   .tab-body-viewer[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.mat-divider[_ngcontent-%COMP%] {\n  height: 25px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #d3d3d379;\n}\n\n.spinner--progress[_ngcontent-%COMP%] {\n  position: absolute;\n  margin: 0;\n  line-height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL2FwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNFLHdCQUFBO0FBQ047O0FBRUk7RUFDRSxjQUFBO0FBQU47O0FBSU07RUFDRSxpQkFBQTtBQUZSOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBSkY7O0FBTUU7RUFDRSx5Q0FBQTtFQUNBLHlCQUFBO0FBSko7O0FBTUk7O0VBRUUsWUFBQTtBQUpOOztBQU9JO0VBQ0UsbUJBQUE7QUFMTjs7QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBTk47O0FBU0k7RUFDRSxhQUFBO0FBUE47O0FBU007RUFDRSxXQUFBO0FBUFI7O0FBVUk7RUFDRSxrQkFBQTtBQVJOOztBQWFBO0VBQ0UsWUFBQTtBQVZGOztBQVlFO0VBQ0UsMkJBQUE7QUFWSjs7QUFjQTtFQUNFLFlBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFYRjs7QUFhRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FBWEoiLCJmaWxlIjoicHJvamVjdHMvYXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjRweDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcblxuICAmX19uYXYge1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xuICAgIGZsZXg6IDEgMCAxMDAlO1xuXG4gICAgJi0tdGl0bGUge1xuICAgICAgZm9udC1zaXplOiA0MDAgMTZweC8yOHB4O1xuICAgIH1cblxuICAgICYtLXNwYWNlciB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICB9XG5cbiAgICAmLS1naXRodWItYnV0dG9uIHtcbiAgICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLm1haW4ge1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLnBkZi1jb250YWluZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjEyKTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQwcHgpO1xuXG4gICAgLm1hdC1pbnB1dCxcbiAgICAubWF0LXNlbGVjdCB7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgfVxuXG4gICAgc3Bhbi5tYXQtYm9keSB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIG1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAubWF0LXNpZGVuYXYtY29udGVudCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICA+IC5tbmotcGFnZS12aWV3ZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gICAgLm1uai10aHVtYm5haWwtdmlld2VyIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICB9XG4gIH1cbn1cblxuLm1hdC10YWItZ3JvdXAge1xuICBoZWlnaHQ6IDEwMCU7XG5cbiAgLnRhYi1ib2R5LXZpZXdlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5tYXQtZGl2aWRlciB7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLnNwaW5uZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkM2QzZDM3OTtcblxuICAmLS1wcm9ncmVzcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgfVxufVxuIl19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(-80px)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(0)', opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(-80px)', opacity: 0 })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(-80px)', opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(0)', opacity: 1 })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(0)', opacity: 1 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateZ(-80px)', opacity: 0 })),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_7__["OverlayContainer"] }]; }, { controlsContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['controlsContainer']
        }], propertiesDialog: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['pdfPropertiesDialog']
        }], pdfViewer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['viewer']
        }], pdfSrc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _mnj_ngx_pdfviewer_src_lib__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../mnj-ngx-pdfviewer/src/lib */ "../mnj-ngx-pdfviewer/src/lib/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
            _mnj_ngx_pdfviewer_src_lib__WEBPACK_IMPORTED_MODULE_20__["MnjPdfViewerModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
        _mnj_ngx_pdfviewer_src_lib__WEBPACK_IMPORTED_MODULE_20__["MnjPdfViewerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                    _mnj_ngx_pdfviewer_src_lib__WEBPACK_IMPORTED_MODULE_20__["MnjPdfViewerModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_21__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/mnj-ngx-pdfviewer/mnj-ngx-pdfviewer/projects/app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map