import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective implements OnChanges {

  @Input('appUnless') unless: boolean;

  private hasView: boolean = false

  private context = new UnlessContext()

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['unless']) {
      this.context.$implicit = this.context.appUnless = this.unless
      this.context.attr = 'abcd'
      if (this.unless) {
        if (this.hasView) {
          this.viewContainer.clear()
          this.hasView = false
        }
      }
    } else {
      if (!this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef)
        this.hasView = true
      }
    }
  }

}

export class UnlessContext<T = unknown> {
  $implicit: T = null
  appUnless : T = null
  attr: T = null
}
