import {AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {PanelComponent} from '../panel/panel.component';
import {log} from 'util';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit, AfterViewInit {

  // ViewChild装饰器能够获取到模板总的标签、组件等元素
  @ViewChild('pTag', {static: true})
  private pElement: ElementRef;

  // 另一种获取组件的方式
  @ViewChild(PanelComponent)
  private panelComponent: PanelComponent;

  // 获取组件
  @ViewChild('component')
  private panelComponent2: PanelComponent;

  // 批量获取元素, 获得模板内全部PanelComponent的组件
  @ViewChildren(PanelComponent)
  private panelComponents: QueryList<PanelComponent>

  // 获取全部模板内引用名是component的组件
  @ViewChildren('component')
  private panelComponents2: QueryList<PanelComponent>

  isShow = true

  constructor() {
    console.log('p-element', this.pElement)
  }

  ngOnInit(): void {
    console.log('p-element', this.pElement)
  }

  ngAfterViewInit() {
    // 只有在页面挂载之后才能获取到元素, 构造方法与ngOnInit方法都在页面挂载之前执行无法获取, ngAfterViewInit方法是在页面挂载之后执行的可以获取到
    // @ViewChild()第二个参数接受一个对象, 如果想要早点获取, 可以把@ViewChild的第二个参数的对象里面的static属性设置为true
    // 这样就可以在ngOnInit方法内获取到ElementRef但是在构造方法内还是无法获取到元素
    console.log('p-element', this.pElement)
    // ElementRef的nativeElement是所获取元素的原生的html标签
    console.log(this.pElement.nativeElement)
    console.log(this.panelComponent)
    console.log(this.panelComponent.name);
    console.log(this.panelComponent2.name);
    console.log(this.panelComponents);
    console.log(this.panelComponents2);
    // 为QueryList添加变化监听函数, 一旦获取到的模板内的元素发生了变化那么就会调用这个监听函数
    this.panelComponents.changes.subscribe(change => console.log(change))
  }

}
