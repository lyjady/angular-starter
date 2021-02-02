import {Component, Inject, Injectable, OnInit} from '@angular/core';
import {Phone} from '../phone';

@Component({
  selector: 'app-mini-phone',
  templateUrl: './mini-phone.component.html',
  styleUrls: ['./mini-phone.component.scss']
})
export class MiniPhoneComponent implements OnInit {

  // 如果父组件的声明类型为接口类型不做任何其他的修改的话也是无法注入的
  // 需要在父组件上加上providers: [{provide: Phone, useExisting: forwardRef(() => PhoneComponent)}]
  constructor(@Inject('phone') private phoneComponent: Phone) {
    phoneComponent.run()
  }

  ngOnInit(): void {
  }

}
