import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PdfAttachmentsViewer } from './directives/pdf-attachments-viewer';
import { PdfDownloadButton } from './directives/pdf-download-button';
import { PdfPageLoading } from './directives/pdf-page-loading';
import { PdfPageViewer } from './directives/pdf-page-viewer';
import { PdfPrintButton } from './directives/pdf-print-button';
import { PdfPropertiesButton } from './directives/pdf-properties-button';
import { PdfSearchInput } from './directives/pdf-search-input';
import { PdfThumbnailViewer } from './directives/pdf-thumbnail-viewer';
import { PdfTocViewer } from './directives/pdf-toc-viewer';
import { PdfUploadButton } from './directives/pdf-upload-button';
import { MnjPdfViewer } from './directives/pdf-viewer';
import { MNJ_PDF_VIEW_CONFIGURATION_PROVIDER } from './pdf-viewer-config';

@NgModule({
  imports: [CommonModule, ScrollingModule],
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
})
export class MnjPdfViewerModule {}
