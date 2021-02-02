import { Component, OnInit } from '@angular/core';
import {MacService} from '../../services/mac.service';

@Component({
  selector: 'app-mac',
  templateUrl: './mac.component.html',
  styleUrls: ['./mac.component.scss'],
  // 如果是普通的providers那么投影组件能获取到父组件内的服务
  providers: [MacService]
  // 如果viewProviders那么投影组件是无法获取父组件内提供的服务
  // viewProviders: [MacService]
})
export class MacComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
