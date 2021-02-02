import { Component, OnInit } from '@angular/core';
import {CatComponent} from '../cat/cat.component';

@Component({
  selector: 'app-mini-cat',
  templateUrl: './mini-cat.component.html',
  styleUrls: ['./mini-cat.component.scss']
})
export class MiniCatComponent implements OnInit {

  // 如果父组件继承了一个抽象类, 如果将父组件一抽象类的方式注入是会注入失败的
  // 只能声明为非抽象类的方式
  constructor(private catComponent: CatComponent) {
    console.log(catComponent.name);
  }

  ngOnInit(): void {
  }

}
