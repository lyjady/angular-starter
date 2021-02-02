import {Component, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {MobileService} from '../../../../services/mobile.service';

@Component({
  selector: 'app-mobile-item',
  templateUrl: './mobile-item.component.html',
  styleUrls: ['./mobile-item.component.scss'],
})
export class MobileItemComponent implements OnInit {

  // Angular的依赖查找策略, 会先从组件树中查找, 如果组件树中没有指定的依赖那么再去模块数中查找
  // 查找顺序是一冒泡的方式向上查找
  // @Optional: 当依赖注入的服务为null时不抛出异常
  // @SkipSelf: 依赖注入的时候不检测当前组件是否提供服务, 直接从父组件开始向上检测
  // @Self: 依赖注入时只检测当前组件
  constructor(private mobileService: MobileService) {
    mobileService.method()
  }

  ngOnInit(): void {
  }

}
