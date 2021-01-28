import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BigOneComponent} from '../../components/big-one/big-one.component';
import {BigTwoComponent} from '../../components/big-two/big-two.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    BigOneComponent,
    BigTwoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    BigOneComponent,
    BigTwoComponent
  ]
})
export class BigModule { }
