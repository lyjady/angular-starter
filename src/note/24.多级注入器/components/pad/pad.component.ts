import { Component, OnInit } from '@angular/core';
import {PadService} from '../../services/pad.service';

@Component({
  selector: 'app-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.scss']
})
export class PadComponent implements OnInit {

  // 因为这个服务是在PadModule里面提供的并且providedIn为AppModule, PadComponent是AppModule里面声明的组件
  // 所以PadComponent不能使用PadService, 只能在引入了这个PadModule的module里面的组件使用
  // constructor(private padService: PadService) {
  //   padService.method()
  // }

  constructor() {
  }

  ngOnInit(): void {
  }

}
