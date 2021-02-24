import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComposeMessageComponent implements OnInit {

  content: string

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  send() {
    // 取消多重路由(不显示多重路由的视图)
    setTimeout(() => this.router.navigate([{outlets: {popup: null}}]).then(), 1000)
  }

  cancel() {
    this.router.navigate([{outlets: {popup: null}}]).then()
  }
}
