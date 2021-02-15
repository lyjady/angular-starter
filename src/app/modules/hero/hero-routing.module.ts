import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from './components/list/hero-list.component';
import {HeroDetailComponent} from './components/detail/hero-detail.component';

// 声明路由路径与组件之间的映射关系
const routes: Routes = [
  {
    path: 'hero/list',
    component: HeroListComponent
  },
  {
    // 路由传参
    path: 'hero/detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  // 除了app-module之外的模块内使用路由都只能是RouterModule.forChild(routes), app-module是forRoot
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
