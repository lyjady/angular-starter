import {Component} from '@angular/core';
import {PadService} from './services/pad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Angular-Starter'

  // AppModule引入了PadModule, 所以就能使用里面提供的providedIn为PadModule的服务
  // 如果两个组件的锁注入的服务从一个提供者那里拿的那么就是单例, 从不同的提供者拿的就是多例
  constructor(private padService: PadService) {
    padService.method()
  }
}
