import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AnimalService} from '../../services/animal.service';
import {PhoneService} from '../../services/phone.service';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.scss']
})
export class InjectComponent implements OnInit {

  // 将UserService服务注入到当前组件, 前提是该服务需要先提供出来
  // 因为animalService只给animal-inject组件使用所以当前组件无法注入
  // 因为phoneService只给了other-module模块提供, app-module没有引入other-module时无法注入phoneService
  constructor(readonly userService: UserService){
    console.log(userService.users)
  }

  ngOnInit(): void {
  }

}
