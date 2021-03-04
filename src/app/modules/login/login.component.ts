import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginArg} from '../../type/type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  formValues: LoginArg = {name: '', password: ''}

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm) {
    console.log(loginForm.value)
    if (loginForm.valid) {

    }
  }
}
