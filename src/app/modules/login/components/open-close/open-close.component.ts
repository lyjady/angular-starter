import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    // 触发器名称
    trigger('openClose', [
      // 定义状态名称与样式
      state('open', style({
        backgroundColor: 'blue',
        height: '200px'
      })),
      state('close', style({
        backgroundColor: 'skyblue',
        // 自适应内容高度
        height: '*'
      })),
      // 定义有open状态变换到close转台的过场动画
      transition('open => close', [
        // 配置过渡的中间样式, 不过不配置animate只配置style的话那么没有过渡效果
        animate('1000ms', style({
          backgroundColor: 'red',
          height: '500px'
        })),
        animate('1000ms')
      ]),
      transition('close => open', [animate('2000ms')])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {

  isOpen = false

  constructor() { }

  ngOnInit(): void {
  }

  animationEventStart(event: AnimationEvent) {
    console.log('start', event)
  }

  animationEventEnd(event: AnimationEvent) {
    console.log('end', event)
  }
}
