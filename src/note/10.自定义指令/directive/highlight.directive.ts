import {Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges{

  @Input('appHighlight') color: string = 'red'

  targetElement: ElementRef;

  constructor(private element: ElementRef) {
    this.targetElement = element
    // 获取该指令所在的宿主元素, Angular不推荐使用该方式, 因为该方式直接操作Dom
    element.nativeElement.style.backgroundColor = this.color
  }

  ngOnChanges(changes: SimpleChanges) {
    this.highlight(this.color)
  }

  // 监听宿主元素的事件, @HostListener('事件', [参数])
  // 该方式在组件卸载的时候自动取消事件注册, 并且无需直接和Dom API打交道
  @HostListener('mouseenter', ['$event']) onMouseEnter(e) {
    console.log(e);
    this.highlight(this.color)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('')
  }

  private highlight(color: string) {
    this.targetElement.nativeElement.style.backgroundColor = color
  }
}
