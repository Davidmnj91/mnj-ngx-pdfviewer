import { InjectionToken } from '@angular/core';
import { Scale, SearchOptions } from './models';
import { PrintDPI } from './services';

export interface PdfViewerConfig {
  initialPage: number;
  scale: Scale;
  rotation: number;
  searchOptions: SearchOptions;
  printDPI: PrintDPI;
  maxPagesRendered: number;
  rendererPagesThreshold: number;
}

export const DEFAULT_PDF_VIEWER_CONFIG: PdfViewerConfig = {
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

export function MNJ_PDF_VIEWER_CONFIGURATION_FACTORY(impl: PdfViewerConfig): PdfViewerConfig {
  return impl || DEFAULT_PDF_VIEWER_CONFIG;
}

/**
 * Injection token that can be used to configure the
 * behavior of the pdf viewer components.
 */
export const MNJ_PDF_VIEWER_CONFIGURATION = new InjectionToken<PdfViewerConfig>('PDF_VIEW_CONFIG');

export const MNJ_PDF_VIEWER_CONFIGURATION_PROVIDER = {
  provide: MNJ_PDF_VIEWER_CONFIGURATION,
  useFactory: MNJ_PDF_VIEWER_CONFIGURATION_FACTORY,
};
