import { Injectable } from '@angular/core';
import {AbstractControl, AsyncValidator, ValidationErrors} from '@angular/forms';
import {iif, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HasMobileValidationService implements AsyncValidator{

  constructor() { }

  /**
   * 异步验证器
   * @param control
   */
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    const value = control.value
    const random = Math.random()
    console.log(value, random)
    return iif(() => random > 0.5, of({exist: '该手机号已存在'}), of(null))
  }
}
