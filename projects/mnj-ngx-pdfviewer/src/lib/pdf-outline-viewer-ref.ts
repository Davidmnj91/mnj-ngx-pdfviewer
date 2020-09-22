import { coerceElement } from '@angular/cdk/coercion';
import { ElementRef, Renderer2 } from '@angular/core';
import * as PDFJS from 'pdfjs-dist';
import { Subject } from 'rxjs';
import { Disposable } from './pdf-container';
import { PdfLinkService } from './services';

const DEFAULT_TITLE = '\u2013';

export class PdfOutlineViewerRef implements Disposable {
  private pdfDocument: PDFJS.PDFDocumentProxy;
  private renderer: Renderer2;
  private _container: HTMLElement;
  private outline;
  private lastToggleIsShow;

  //Events
  public outlineLoaded = new Subject<{ count: number }>();

  constructor(private linkService: PdfLinkService) {}

  withRenderer(renderer: Renderer2) {
    this.renderer = renderer;
    return this;
  }

  withRootElement(rootElement: ElementRef<HTMLElement> | HTMLElement): this {
    const element = coerceElement(rootElement);
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

  setDocument(pdfDocument: PDFJS.PDFDocumentProxy) {
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

  private _bindLink(element, { url, newWindow, dest }) {
    const { linkService } = this;

    if (url) {
      PDFJS.addLinkAttributes(element, {
        url,
        target: newWindow ? PDFJS.LinkTarget.BLANK : linkService.externalLinkTarget,
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

  private _setStyles(element, { bold, italic }) {
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
  private _addToggleButton(div, { count, items }) {
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
  private _toggleOutlineItem(root, show = false) {
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
    const queue: { parent: Node; items: any[] }[] = [{ parent: fragment, items: this.outline }];
    let hasAnyNesting = false;
    while (queue.length > 0) {
      const levelData = queue.shift();
      for (const item of levelData.items) {
        const div = document.createElement('div');
        div.className = 'outlineItem';

        const element = document.createElement('a');
        this._bindLink(element, item);
        this._setStyles(element, item);
        element.textContent = PDFJS.removeNullCharacters(item.title) || DEFAULT_TITLE;

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
  private _dispatchEvent(outlineCount) {
    this.outlineLoaded.next({ count: outlineCount });
  }

  get container(): HTMLElement {
    return this._container;
  }
}
