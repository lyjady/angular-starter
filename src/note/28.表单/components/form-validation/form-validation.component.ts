import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {HasMobileValidationService} from '../../service/has-mobile-validation.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormValidationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private hasMobileValidationService: HasMobileValidationService) { }

  formGroup: FormGroup

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      // 定义表单验证, 数组的第一个参数为表单项的默认值, 第二个为同步验证器(多个用数组表示), 第三个为异步验证器(多个用数组表示)
      firstname: ['', [
        // 必填验证(默认验证器)
        Validators.required,
        // 长度验证(默认验证器)
        Validators.minLength(4),
        // 自定义验证器
        this.validationName(/bob/i)
      ]],
      lastname: '',
      // 异步验证器的触发时机是在全部的同步验证器通过之后触发
      mobile: ['', [Validators.pattern(/[\d]{11}/)], [this.hasMobileValidationService.validate]],
      // 改写法等价于上面的写法, 并且制定了触发验证的时机, 将改变就触发验证修改为失去焦点触发验证, 提高了异步验证器的执行效率
      // mobile: ['', {
      //   validators: [Validators.pattern(/[\d]{11}/)],
      //   asyncValidators: [this.hasMobileValidationService.validate],
      //   updateOn: 'blur'
      // }],
      passwordGroup: this.formBuilder.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
        // 指定交叉验证器(一个字段的验证依赖于另一个字段)
      }, {validators: this.passwordEqualValidation})
    })
  }

  validationName(reg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value
      return reg.test(value) ? {nameError: '名字含有非法内容'} : null
    }
  }

  passwordEqualValidation(group: FormGroup): ValidationErrors | null {
    const password = group.get('password').value
    const confirmPassword = group.get('confirmPassword').value
    return password === confirmPassword ? null : {equal: '两次密码输入的不一样'}
  }

  get firstname() {
    return this.formGroup.get('firstname')
  }

  get lastname() {
    return this.formGroup.get('lastname')
  }

  get password() {
    return this.formGroup.get('passwordGroup')?.get('password')
  }

  get confirmPassword() {
    return this.formGroup.get('passwordGroup')?.get('confirmPassword')
  }

  get passwordGroup() {
    return this.formGroup.get('passwordGroup')
  }

  get mobile() {
    return this.formGroup.get('mobile')
  }

  submit() {
    console.log(this.formGroup)
  }
}
