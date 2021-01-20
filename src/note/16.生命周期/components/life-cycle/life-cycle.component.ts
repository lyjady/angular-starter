import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit, SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input()
  title = 'def';

  @Input()
  show: boolean

  /**
   * 构造方法的调用早于一切生命周期函数
   * 在构造方法中无法拿到输入属性的输入值
   */
  constructor() {
    console.log('constructor', this.title);
  }

  /**
   * 组件初始化生命周期函数
   */
  ngOnInit(): void {
    console.log('ngOnInit', this.title);
  }

  /**
   * 输入属性变化时执行
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', this.title);
  }

  /**
   * 发生变更监测之后执行
   */
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  /**
   * 发生变更监测之后执行
   */
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  /**
   * 模板已经挂载完成, 可以在这个生命周期函数中获取Dom元素
   */
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  /**
   * 发生变更监测之后执行
   */
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  /**
   * 组件销毁时执行生命周期函数
   */
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
