import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  isLogin: boolean

  name: string

  age: number

  fragment: string

  constructor(private loginService: LoginService, private router: Router) {
    this.name = loginService.name
    this.age = loginService.age
    this.fragment = loginService.fragment
    this.isLogin = this.loginService.isLogin
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login().subscribe(() => {
      console.log('login...' + this.loginService.redirectUrl)
      // 路由跳转时保留查询参数与片段
      this.router.navigate([this.loginService.redirectUrl], {
        queryParamsHandling: 'preserve',
        preserveFragment: true
      }).then()
    })
  }
}
