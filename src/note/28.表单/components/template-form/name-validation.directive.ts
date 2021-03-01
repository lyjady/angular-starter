import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators} from '@angular/forms';

// 自定义模板校验器
@Directive({
  selector: '[appNameValidation]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidationDirective, multi: true}]
})
export class NameValidationDirective implements Validator{

  @Input('appNameValidation')
  private appNameValidation: string

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value
    return new RegExp(this.appNameValidation).test(value) ? {validation: '名字内含有非法字符'} : null
  }
}
