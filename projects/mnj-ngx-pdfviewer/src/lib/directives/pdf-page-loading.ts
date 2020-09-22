import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Element that will be used as a template for the loader
 * of a pdfPage when it is loading.
 */
@Directive({ selector: 'ng-template[mnjPdfLoading]' })
export class PdfPageLoading {
  @Input()
  get matchSize(): boolean {
    return this._matchSize;
  }

  set matchSize(value: boolean) {
    this._matchSize = coerceBooleanProperty(value);
  }

  private _matchSize = false;

  constructor(public templateRef: TemplateRef<any>) {}
}
