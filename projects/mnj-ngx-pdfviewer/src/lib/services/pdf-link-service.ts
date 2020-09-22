import { Injectable } from '@angular/core';
import { parseQueryString } from '../utils';

@Injectable()
export class PdfLinkService {
  private baseUrl;
  private pdfDocument;
  private pdfViewer;
  private pdfHistory;
  private _pagesRefCache;

  public externalLinkRel;
  public externalLinkEnabled = true;
  public externalLinkTarget;

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
            .catch(() =>
              console.error(
                `PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid page reference, for dest="${dest}".`
              )
            );
          return;
        }
      } else if (Number.isInteger(destRef)) {
        pageNumber = destRef + 1;
      } else {
        console.error(
          `PDFLinkService.navigateTo: "${destRef}" is not ` + `a valid destination reference, for dest="${dest}".`
        );
        return;
      }
      if (!pageNumber || pageNumber < 1 || pageNumber > this.pagesCount) {
        console.error(
          `PDFLinkService.navigateTo: "${pageNumber}" is not ` + `a valid page number, for dest="${dest}".`
        );
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

    new Promise<{ namedDest: string; explicitDest: string }>((resolve) => {
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
        console.error(
          `PDFLinkService.navigateTo: "${data.explicitDest}" is` + ` not a valid destination array, for dest="${dest}".`
        );
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
        } else {
          if (zoomArg === 'Fit' || zoomArg === 'FitB') {
            dest = [null, { name: zoomArg }];
          } else if (zoomArg === 'FitH' || zoomArg === 'FitBH' || zoomArg === 'FitV' || zoomArg === 'FitBV') {
            dest = [null, { name: zoomArg }, zoomArgs.length > 1 ? zoomArgs[1] | 0 : null];
          } else if (zoomArg === 'FitR') {
            if (zoomArgs.length !== 5) {
              console.error('PDFLinkService.setHash: Not enough parameters for "FitR".');
            } else {
              dest = [null, { name: zoomArg }, zoomArgs[1] | 0, zoomArgs[2] | 0, zoomArgs[3] | 0, zoomArgs[4] | 0];
            }
          } else {
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
      } else if (pageNumber) {
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
      } catch (ex) {}

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

  private isValidExplicitDestination(dest) {
    if (!Array.isArray(dest)) {
      return false;
    }
    const destLength = dest.length;
    if (destLength < 2) {
      return false;
    }
    const page = dest[0];
    if (
      !(typeof page === 'object' && Number.isInteger(page.num) && Number.isInteger(page.gen)) &&
      !(Number.isInteger(page) && page >= 0)
    ) {
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
