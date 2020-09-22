import * as PDFJS from 'pdfjs-dist';

export class AnnotationLayerBuilder {
  public div: HTMLDivElement;
  private _cancelled: boolean;

  constructor(
    private pageDiv,
    private pdfPage,
    private linkService,
    private downloadManager,
    private imageResourcesPath = '',
    private renderInteractiveForms = false
  ) {
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
  render(viewport: PDFJS.PageViewport, intent = 'display') {
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
        PDFJS.AnnotationLayer.update(parameters);
      } else {
        // Create an annotation layer div and render the annotations
        // if there is at least one annotation.
        if (annotations.length === 0) {
          return;
        }
        this.div = document.createElement('div');
        this.div.className = 'annotationLayer';
        this.pageDiv.appendChild(this.div);
        parameters.div = this.div;

        PDFJS.AnnotationLayer.render(parameters);
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

export class DefaultAnnotationLayerFactory {
  static createAnnotationLayerBuilder(
    pageDiv,
    pdfPage,
    linkService,
    downloadManager,
    imageResourcesPath = 'assets/images/',
    renderInteractiveForms = false
  ) {
    return new AnnotationLayerBuilder(
      pageDiv,
      pdfPage,
      linkService,
      downloadManager,
      imageResourcesPath,
      renderInteractiveForms
    );
  }
}
