import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {AdminDashboardComponent} from './components/admin-dashboard/admin-dashboard.component';
import {AdminHeroComponent} from './components/admin-hero/admin-hero.component';
import {AdminCrisisComponent} from './components/admin-crisis/admin-crisis.component';
import {AuthGuard} from '../auth/auth.guard';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    // 设置路由守卫, 只有在canActivate属性里面全部的对象的canActivate()返回true时才会允许进入该路由
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            component: AdminDashboardComponent
          },
          {
            path: 'hero',
            component: AdminHeroComponent
          },
          {
            path: 'crisis',
            component: AdminCrisisComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
