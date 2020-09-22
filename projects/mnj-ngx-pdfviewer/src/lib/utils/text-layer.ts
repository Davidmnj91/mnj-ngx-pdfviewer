import * as PDFJS from 'pdfjs-dist';
import { PdfFindController } from '../services';

/**
 * The text layer builder provides text selection functionality for the PDF.
 * It does this by creating overlay divs over the PDF's text. These divs
 * contain text that matches the PDF text they are overlaying. This object
 * also provides a way to highlight text that is being searched for.
 */
export class TextLayerBuilder {
  private renderingDone = false;

  private textContent = null;
  private textContentItemsStr = [];
  private textContentStream = null;
  private textDivs = [];

  private pageNumber;
  private pageIdx;
  private matches;

  private textLayerRenderTask;

  constructor(
    private textLayerDiv,
    private pageIndex,
    private viewport,
    private findController = null,
    private enhanceTextSelection = false
  ) {
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
    this.textLayerRenderTask = PDFJS.renderTextLayer({
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

      const match: {
        begin?: {
          divIdx: number;
          offset: number;
        };
        end?: {
          divIdx: number;
          offset: number;
        };
      } = {
        begin: {
          divIdx: i,
          offset: matchIdx - iIndex,
        },
      };

      // Calculate the end position.
      if (matchesLength) {
        // Multiterm search.
        matchIdx += matchesLength[m];
      } else {
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

    function beginText(begin, className?) {
      const divIdx = begin.divIdx;
      textDivs[divIdx].textContent = '';
      appendTextToDiv(divIdx, 0, begin.offset, className);
    }

    function appendTextToDiv(divIdx, fromOffset, toOffset, className?) {
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

    let i0 = selectedMatchIdx,
      i1 = i0 + 1;
    if (highlightAll) {
      i0 = 0;
      i1 = matches.length;
    } else if (!isSelectedPage) {
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
      } else {
        appendTextToDiv(prevEnd.divIdx, prevEnd.offset, begin.offset);
      }

      if (begin.divIdx === end.divIdx) {
        appendTextToDiv(begin.divIdx, begin.offset, end.offset, 'highlight' + highlightSuffix);
      } else {
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

export class DefaultTextLayerFactory {
  /**
   * @param {HTMLDivElement} textLayerDiv
   * @param {number} pageIndex
   * @param viewport
   * @param {PdfFindController} findController
   * @param {boolean} enhanceTextSelection
   * @returns {TextLayerBuilder}
   */
  static createTextLayerBuilder(
    textLayerDiv,
    pageIndex,
    viewport: PDFJS.PageViewport,
    findController: PdfFindController,
    enhanceTextSelection = true
  ) {
    return new TextLayerBuilder(textLayerDiv, pageIndex, viewport, findController, enhanceTextSelection);
  }
}
