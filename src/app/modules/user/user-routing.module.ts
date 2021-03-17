import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserCenterComponent} from './components/user-center/user-center.component';


const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
