import {
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  EmbeddedViewRef,
  Injector,
  ViewChild
} from '@angular/core';
import {AlertComponent} from './components/alert/alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private alertComponent: AlertComponent;

  private alertComponentRef: ComponentRef<AlertComponent>;

  @ViewChild('container')
  private container: ElementRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private inject: Injector,
              private applicationRef: ApplicationRef) {
  }


  showAlert() {
    if (!this.alertComponent) {
      this.instanceComponent();
    }
    this.alertComponent.setOption({content: '文章，经国之大业，不朽之盛事', theme: 'warning'});
  }

  // 动态组件, 使用代码生成组件
  private instanceComponent() {
    // 创建指定类型的组件工厂
    const factory = this.componentFactoryResolver.resolveComponentFactory<AlertComponent>(AlertComponent);
    // 根据注入的对象创建指定实例
    this.alertComponentRef = factory.create(this.inject);
    // 将组件添加到树中, 激活变更检测
    this.applicationRef.attachView(this.alertComponentRef.hostView);
    // 将组件添加到模板中
    document.body.appendChild((this.alertComponentRef.hostView as EmbeddedViewRef<{}>).rootNodes[0]);
    // this.container.nativeElement.insertAdjacentHTML('afterbegin', (this.alertComponentRef.hostView as EmbeddedViewRef<{}>).rootNodes[0].innerHTML)
    // 监听销毁事件
    this.alertComponentRef.onDestroy(() => console.log('destroy'));
    // 获取组件实例
    const {instance} = this.alertComponentRef;
    // 监听Output事件
    instance.close.subscribe(() => {
      this.alertComponentRef.destroy();
      this.alertComponent = null;
    });
    this.alertComponent = instance;
  }
}
