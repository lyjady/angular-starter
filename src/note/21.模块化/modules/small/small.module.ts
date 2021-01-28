import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SmallOneComponent} from '../../components/small-one/small-one.component';
import {SmallTwoComponent} from '../../components/small-two/small-two.component';

@NgModule({
  declarations: [
    SmallOneComponent,
    SmallTwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SmallOneComponent,
    SmallTwoComponent
  ]
})
export class SmallModule { }
