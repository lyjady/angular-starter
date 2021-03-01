import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {NgForm} from '@angular/forms';

/**
 * 模板表单对象
 */
export class Profile {
  public firstname: string;
  public lastname: string;
  public mobile: string;
  public password: string;
  public confirmPassword: string;


  constructor(firstname: string, lastname: string, mobile: string, password: string, confirmPassword: string) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.mobile = mobile;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplateFormComponent implements OnInit {

  profile = new Profile('', '', '', '', '')

  constructor() { }

  ngOnInit(): void {
  }

  submit(profileForm: NgForm) {
    console.log(profileForm)
    console.log(profileForm.value)
    console.log(profileForm.form)
  }

  // 不仅重置表单数据, 还重置表单的状态
  reset(profileForm: NgForm) {
    profileForm.reset({
      firstname: 'aaa',
      lastname: 'bbb',
      mobile: 'ccc'
    })
  }
}
