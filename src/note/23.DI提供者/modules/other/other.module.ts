import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PhoneInjectComponent} from '../../components/phone-inject/phone-inject.component';
import {PhoneService} from '../../services/phone.service';

@NgModule({
  declarations: [PhoneInjectComponent],
  imports: [
    CommonModule
  ],
  exports: [PhoneInjectComponent],
  // 该服务只为当前模块提供
  providers: [PhoneService]
})
export class OtherModule { }
