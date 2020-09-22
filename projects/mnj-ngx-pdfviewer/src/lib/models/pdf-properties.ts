export interface PdfProperties {
  fileName: string;
  fileSize: number;
  title: string;
  author: string;
  subject: string;
  keywords: string[];
  creationDate: Date;
  updateDate: Date;
  creator: string;
  pdfProducer: string;
  pdfVersion: string;
  pageCount: number;
  pageSize: { width: number; height: number };
}
