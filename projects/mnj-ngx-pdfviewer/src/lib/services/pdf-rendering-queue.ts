import { Injectable } from '@angular/core';
import { PdfContainerItem } from '../pdf-container';
import { PdfPageViewerRef } from '../pdf-page-viewer-ref';
import { PdfThumbnailViewerRef } from '../pdf-thumbnail-viewer-ref';

export const CLEANUP_TIMEOUT = 30000;

export enum RenderingStates {
  INITIAL,
  RUNNING,
  PAUSED,
  FINISHED,
}

/**
 * Controls rendering of the views for pages and thumbnails.
 */
@Injectable()
export class PdfRenderingQueue {
  private pdfViewer: PdfPageViewerRef;
  private pdfThumbnailViewer: PdfThumbnailViewerRef;
  private onIdle;
  private highestPriorityPage: string;
  private idleTimeout;
  private printing = false;
  private isThumbnailViewEnabled = false;

  constructor() {
    this.pdfViewer = null;
    this.pdfThumbnailViewer = null;
    this.onIdle = null;
    this.highestPriorityPage = null;
    this.idleTimeout = null;
    this.printing = false;
    this.isThumbnailViewEnabled = false;
  }

  setViewer(pdfViewer) {
    this.pdfViewer = pdfViewer;
  }

  setThumbnailViewer(pdfThumbnailViewer) {
    this.pdfThumbnailViewer = pdfThumbnailViewer;
  }

  /**
   * @param {PdfContainerItem} view
   * @returns {boolean}
   */
  isHighestPriority(view: PdfContainerItem) {
    return this.highestPriorityPage === view.renderingId;
  }

  /**
   * @param {Object} currentlyVisiblePages
   */
  renderHighestPriority(currentlyVisiblePages?) {
    if (this.idleTimeout) {
      clearTimeout(this.idleTimeout);
      this.idleTimeout = null;
    }

    // Pages have a higher priority than thumbnails, so check them first.
    if (this.pdfViewer && this.pdfViewer.forceRendering(currentlyVisiblePages)) {
      return;
    }
    // No pages needed rendering, so check thumbnails.
    if (this.pdfThumbnailViewer && this.pdfThumbnailViewer.forceRendering()) {
      return;
    }

    if (this.printing) {
      // If printing is currently ongoing do not reschedule cleanup.
      return;
    }

    if (this.onIdle) {
      this.idleTimeout = setTimeout(this.onIdle, CLEANUP_TIMEOUT);
    }
  }

  /**
   * @param {Object} visible
   * @param {Array} views
   * @param {boolean} scrolledDown
   */
  getHighestPriority(visible, views, scrolledDown) {
    /**
     * The state has changed. Figure out which page has the highest priority to
     * render next (if any).
     *
     * Priority:
     * 1. visible pages
     * 2. if last scrolled down, the page after the visible pages, or
     *    if last scrolled up, the page before the visible pages
     */
    const visibleViews = visible.views;

    const numVisible = visibleViews.length;
    if (numVisible === 0) {
      return null;
    }
    for (let i = 0; i < numVisible; ++i) {
      const view = visibleViews[i].view;
      if (!this.isViewFinished(view)) {
        return view;
      }
    }

    // All the visible views have rendered; try to render next/previous pages.
    if (scrolledDown) {
      const nextPageIndex = visible.last.id;
      // IDs start at 1, so no need to add 1.
      if (views[nextPageIndex] && !this.isViewFinished(views[nextPageIndex])) {
        return views[nextPageIndex];
      }
    } else {
      const previousPageIndex = visible.first.id - 2;
      if (views[previousPageIndex] && !this.isViewFinished(views[previousPageIndex])) {
        return views[previousPageIndex];
      }
    }
    // Everything that needs to be rendered has been.
    return null;
  }

  /**
   * @param {PdfContainerItem} view
   * @returns {boolean}
   */
  isViewFinished(view) {
    return view.renderingState === RenderingStates.FINISHED;
  }

  /**
   * Render a page or thumbnail view. This calls the appropriate function
   * based on the views state. If the view is already rendered it will return
   * `false`.
   *
   * @param {PdfContainerItem} view
   */
  renderView(view: PdfContainerItem) {
    switch (view.renderingState) {
      case RenderingStates.FINISHED:
        return false;
      case RenderingStates.PAUSED:
        this.highestPriorityPage = view.renderingId;
        view.resume();
        break;
      case RenderingStates.RUNNING:
        this.highestPriorityPage = view.renderingId;
        break;
      case RenderingStates.INITIAL:
        this.highestPriorityPage = view.renderingId;
        view.draw().finally(() => this.renderHighestPriority());
        break;
    }
    return true;
  }
}
