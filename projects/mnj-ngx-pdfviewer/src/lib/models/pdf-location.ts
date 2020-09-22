import { Scale } from './scale';

export interface PdfLocation {
  pageNumber: number;
  scale: Scale;
  top: number;
  left: number;
  rotation: number;
  pdfOpenParams: string;
}
