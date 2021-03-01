import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

// 交叉验证器
@Directive({
  selector: '[appPwdEqualValidation]',
  providers:[{provide: NG_VALIDATORS, useExisting: PwdEqualValidationDirective, multi: true}]
})
export class PwdEqualValidationDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value.password
    const confirmPassword = control.value.confirmPassword
    return password === confirmPassword ? null : {equal: '两次密码输入的不一样'}
  }
}
