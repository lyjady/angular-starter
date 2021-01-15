import {AfterViewInit, Component, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-tpl',
  templateUrl: './tpl.component.html',
  styleUrls: ['./tpl.component.scss']
})
export class TplComponent implements OnInit, AfterViewInit {

  @ViewChild('firstTemplate', {read: TemplateRef})
  readonly firstTemplate: TemplateRef<any>;

  @ViewChild('uniqueTemplate', {read: TemplateRef})
  readonly uniqueTemplate: TemplateRef<any>;

  @ViewChild('container', {read: ViewContainerRef})
  readonly viewContainer: ViewContainerRef;

  uniqueView: EmbeddedViewRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * 模板挂载之后执行
   */
  ngAfterViewInit(): void {
    // 该方法会生成ng-template内的视图对象
    let embeddedViewRef = this.firstTemplate.createEmbeddedView(null);
    console.log(embeddedViewRef);
    // 将生成的视图对象插入到ng-container中
    this.viewContainer.insert(embeddedViewRef)
    this.uniqueView = this.uniqueTemplate.createEmbeddedView(null)
  }


  insert(secondTemplate: TemplateRef<any>) {
    // 除了调用TemplateRef的createEmbeddedView()方法创建视图对象再插入ng-container之外
    // 还可以直接调用ViewContainerRef的createEmbeddedView()传入TemplateRef对象创建视图并插入
    // 第二参数是上下文对象, 可传可不传, 传入的话可以在ng-template中取到context的值
    // 第三个参数是插入的索引, 不传默认是最后
    this.viewContainer.createEmbeddedView(secondTemplate, {attr: 'a', $implicit: 'default'})
  }

  insertUnique() {
    // 之前的insert如果调用多次那么会多次插入视图
    // 这是因为每次调用都会生成不同实例的ViewRef, 所以才会插入多次
    // 如果每次插入的ViewRef是一个实例那么只会插入一次
    this.viewContainer.insert(this.uniqueView)
  }

  getOne() {
    // 根据索引获取指定的ng-container里面的视图
    console.log(this.viewContainer.get(0));
  }

  detach() {
    let viewRef = this.viewContainer.detach(1);
    console.log(viewRef);
  }

  length() {
    // 返回ng-container的长度
    console.log(this.viewContainer.length);
  }
}
