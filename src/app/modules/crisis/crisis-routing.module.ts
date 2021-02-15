import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisCenterComponent} from './components/center/crisis-center.component';


const routes: Routes = [
  {
    path: 'crisis/center',
    component: CrisisCenterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
