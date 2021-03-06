import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CrisisCenterComponent} from './components/center/crisis-center.component';
import {CrisisListComponent} from './components/crisis-list/crisis-list.component';
import {CrisisCenterHomeComponent} from './components/crisis-center-home/crisis-center-home.component';
import {CrisisDetailComponent} from './components/crisis-detail/crisis-detail.component';
import {ComposeMessageComponent} from './components/compose-message/compose-message.component';
import {CrisisGuard} from '../auth/crisis.guard';


const routes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: 'list',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent,
            // 注册该守卫
            canDeactivate: [CrisisGuard]
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
