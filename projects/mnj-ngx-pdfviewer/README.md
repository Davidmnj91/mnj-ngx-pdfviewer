# MnjNgxPdfViewer

Flexible pdf viewer based on PDF.js core & display layers, ready to use with angular material.

## Quick Links

[Demo](https://davidmnj91.github.io/mnj-ngx-pdfviewer/) | [Stackblitz](https://stackblitz.com/github/davidmnj91/mnj-ngx-pdfviewer)

## Building the library

```bash
npm install
npm run build
```

## Running the demo

```bash
npm install
npm run start
```

## Usage

#### Import into your module

```javascript
import { MnjPdfViewerModule } from 'mnj-ngx-pdfviewer';

@NgModule({
  ...
  imports: [
    ...
    MnjPdfViewerModule
  ]
})
```

#### Add to your custom theme

```scss
@import '~@angular/material/theming';
@import '~mnj-ngx-pdfviewer/pdf-viewer-theme.scss';

@include mat-core();

$candy-app-primary: mat-palette($mat-indigo);
$candy-app-accent: mat-palette($mat-pink, A200, A100, A400);

$candy-app-warn: mat-palette($mat-red);

$candy-app-theme: mat-light-theme(
  (
    color: (
      primary: $candy-app-primary,
      accent: $candy-app-accent,
      warn: $candy-app-warn,
    ),
  )
);

@include angular-material-theme($candy-app-theme);
@include mnj-pdf-viewer-theme($candy-app-theme);
```

[See more about angular material theming](https://material.angular.io/guide/theming)

#### Use it in your HTML template

```html
<mnj-pdf-viewer [pdfSrc]="pdfSrc"></mnj-pdf-viewer>
```

##### Available inputs for pdf viewer

```javascript
pdfSrc: string | Uint8Array | ArrayBuffer; // Source pdf file or link to an accesible pdf document over internet
page: number; // The page number you want to display in the viewport
scale: Scale; // Size of the page whitin the viewport
rotation: number; // Direction in which pages should be shown in the viewer. Must be a multiple of 90º
searchOptions: SearchOptions; // How pdf should identify a match (case sensitive, entire word...)
disabled: boolean; // Whether the pdf viewer should be accesible by user or not
```

##### Available methods for pdfviewer

```javascript
retrievePdfProperties(); // Returns the PdfProperties of the displayed document like title, author, PDF Version...
downloadPdf(); // Creates a downloadable file in the browser
printPdf(); // Will print the pdf through the browser print interface
search((phrase: string)); // Search a text along the displayed PDF
findNext(); // Find the next occurence of the current search phrase in the PDF
findPrevious(); // Backs to the previous occurence of the current search phrase in the PDF
```

##### Available events from pdfviewer

```javascript
pdfLoaded(
  // Notify when the source PDF has been successfully loaded
  pdfProperties
)(
  // Emits with the current PDF properties when loaded
  pdfSearchProgress
)(
  // Emits after any modification of the search parameters or after any calls to findNext(), findPrevious() methods
  pdfSearchComplete
)(
  // Emits after a search is performed with the total amount of occuresences found in the PDF
  pdfPrintProgress
); // Emits with the render percetange of the current PDF file to be ready for browser print
```

#### Configure the provider

If you want to configure default values for the pdfviewer you can do via provider configuration:

```javascript
import { MnjPdfViewerModule, MNJ_PDF_VIEWER_CONFIGURATION_PROVIDER, PrintDPI } from 'mnj-ngx-pdfviewer';

@NgModule({
  ...
  imports: [
    ...
    MnjPdfViewerModule
  ],
  providers: [
      {provide: MNJ_PDF_VIEWER_CONFIGURATION_PROVIDER, useValue: {
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
        rendererPagesThreshold: 2
      }}
  ]
})
```

##### Available configuration properties are

```javascript
initialPage: number; // The initial page to be rendered (default is 1)
scale: Scale; // Default display size to be displayed (default is auto)
rotation: number; // Default rotation of the pages in deg (default is 0)
searchOptions: SearchOptions; // Default options to find a match from a given search query (default is {phraseSearch: true, caseSensitive: false, entireWord: false, highlightAll: true})
printDPI: PrintDPI; // Print quality of the pdf by the browser. Note the more quality the longer it takes to render (default is 600)
maxPagesRendered: number; // Number of pages to keep rendered in the DOM at the same time (default is 10)
rendererPagesThreshold: number; // Number of pages away from the current page to be call for render
```

### PDF Page Viewer

Component to display the pages of the associated <mnj-pdf-viewer></mnj-pdf-viewer> element

```html
<mnj-pdf-page-viewer [for]="viewer"></mnj-pdf-page-viewer>
```

##### Available inputs for pdf page viewer

```javascript
for: MnjPdfViewer // The core Pdf viewer to display its pages
```

### PDF Thumbnail Viewer

Component to display the thumbnails of the associated <mnj-pdf-viewer></mnj-pdf-viewer> element

```html
<mnj-pdf-thumbnail-viewer [for]="viewer"></mnj-pdf-thumbnail-viewer>
```

##### Available inputs for pdf thumbnail viewer

```javascript
for: MnjPdfViewer // The core Pdf viewer to display its thumbnails
```

### PDF Table of Contents Viewer

Component to display the table of contents of the associated <mnj-pdf-viewer></mnj-pdf-viewer> element

```html
<mnj-pdf-toc-viewer [for]="viewer"></mnj-pdf-toc-viewer>
```

##### Available inputs for pdf table of contents viewer

```javascript
for: MnjPdfViewer // The core Pdf viewer to display its table of contents
```

### PDF Attachments Viewer

Component to display the attachments of the associated <mnj-pdf-viewer></mnj-pdf-viewer> element

```html
<mnj-pdf-attachments-viewer [for]="viewer"></mnj-pdf-attachments-viewer>
```

##### Available inputs for pdf attachments viewer

```javascript
for: MnjPdfViewer // The core Pdf viewer to display its attachments
```
