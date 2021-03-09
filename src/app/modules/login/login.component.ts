import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginArg} from '../../type/type';
import {AccountService} from '../../services/acount.service';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  formValues: LoginArg = {name: '', password: ''}

  constructor(private accountService: AccountService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    if (loginForm.valid) {
      this.accountService.login(loginForm.value).subscribe(value => {
        const { token, user } = value
        localStorage.setItem('h-auth', token)
        this.userService.setUser(user)
        this.router.navigate(['/home/hero/list']).then()
      })
    }
  }
}
