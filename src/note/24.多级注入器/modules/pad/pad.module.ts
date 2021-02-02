import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PadComponent} from '../../components/pad/pad.component';



@NgModule({
  declarations: [
    PadComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PadComponent
  ]
})
export class PadModule { }
