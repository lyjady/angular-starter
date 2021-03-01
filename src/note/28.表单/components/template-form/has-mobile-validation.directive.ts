import { Directive } from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {iif, Observable, of} from 'rxjs';
import {HasMobileValidationService} from '../../service/has-mobile-validation.service';

@Directive({
  selector: '[appHasMobileValidation]',
  providers:[{provide: NG_ASYNC_VALIDATORS, useExisting: HasMobileValidationDirective, multi: true}]
})
export class HasMobileValidationDirective implements AsyncValidator {

  constructor(private hasMobileValidationService: HasMobileValidationService) { }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.hasMobileValidationService.validate(control)
  }

}
