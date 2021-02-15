import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './components/center/crisis-center.component';


@NgModule({
  declarations: [CrisisCenterComponent],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
