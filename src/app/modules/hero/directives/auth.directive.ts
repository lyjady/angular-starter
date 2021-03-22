import {Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {UserService} from '../../../services/user.service';

@Directive({
  selector: '[appAuth]'
})
export class AuthDirective implements OnChanges{

  @Input('appAuth')
  private auth: string[]

  private hasView = false

  constructor(private userService: UserService, private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (this.auth.length) {
      this.userService.user$.subscribe(value => {
        if (this.auth.includes(value?.role)) {
          this.createView()
        } else {
          if (this.hasView) {
            this.viewContainerRef.clear()
            this.hasView = false
          }
        }
      })
    } else {
      this.createView()
    }
  }

  private createView() {
    this.viewContainerRef.createEmbeddedView(this.templateRef)
    this.hasView = true
  }
}
