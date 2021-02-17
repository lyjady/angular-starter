import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';
import { CrisisCenterComponent } from './components/center/crisis-center.component';
import { CrisisListComponent } from './components/crisis-list/crisis-list.component';
import { CrisisCenterHomeComponent } from './components/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './components/crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [CrisisCenterComponent, CrisisListComponent, CrisisCenterHomeComponent, CrisisDetailComponent],
  imports: [
    CommonModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
