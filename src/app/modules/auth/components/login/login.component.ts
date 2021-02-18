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

  constructor(private loginService: LoginService, private router: Router) {
    this.isLogin = this.loginService.isLogin
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login().subscribe(() => {
      console.log('login...')
      this.router.navigate([this.loginService.redirectUrl]).then()
    })
  }
}
