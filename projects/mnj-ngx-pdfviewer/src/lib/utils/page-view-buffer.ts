import { PdfPageRef } from '../pdf-page-ref';

export class PDFPageViewBuffer {
  private data: PdfPageRef[] = [];

  constructor(private size: number) {}

  push(view: PdfPageRef) {
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
  resize(newSize, pagesToKeep: PdfPageRef[]) {
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
  const moved = [],
    len = arr.length;
  let write = 0;
  for (let read = 0; read < len; ++read) {
    if (condition(arr[read])) {
      moved.push(arr[read]);
    } else {
      arr[write] = arr[read];
      ++write;
    }
  }
  for (let read = 0; write < len; ++read, ++write) {
    arr[write] = moved[read];
  }
}
