import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeHeaderComponent} from './home-header/home-header.component';
import {HeroListComponent} from '../hero/hero-list/hero-list.component';
import {AddHeroComponent} from '../hero/add-hero/add-hero.component';
import {UpdateHeroComponent} from '../hero/update-hero/update-hero.component';
import {LeaveAddHeroGuard} from '../hero/add-hero/service/leave-add-hero.guard';
import {HeroGuard} from '../../guard/hero.guard';
import {UserCenterComponent} from '../user/components/user-center/user-center.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeHeaderComponent,
    children: [
      {
        path: 'hero/list',
        component: HeroListComponent,
        data: {
          title: '英雄列表',
          breadcrumb: ['首页', '英雄列表']
        }
      },
      {
        path: 'hero/add',
        component: AddHeroComponent,
        canDeactivate: [LeaveAddHeroGuard],
        canActivate: [HeroGuard],
        data: {
          title: '添加英雄',
          breadcrumb: ['首页', '添加英雄'],
          auths: ['admin']
        }
      },
      {
        path: 'hero/update/:id',
        component: UpdateHeroComponent,
        canDeactivate: [LeaveAddHeroGuard],
        canActivate: [HeroGuard],
        data: {
          title: '更新英雄',
          breadcrumb: ['首页', '更新英雄'],
          auths: ['admin']
        }
      },
      {
        path: 'user-center',
        component: UserCenterComponent,
        canActivate: [HeroGuard],
        data: {
          title: '英雄中心',
          breadcrumb: ['首页', '英雄中心'],
          auths: ['user', 'admin']
        }
      },
      {
        path: '',
        redirectTo: 'hero/list',
        pathMatch: 'full'
      }
    ],
    data: {
      title: '首页'
    }
  },
  {
    path: '**',
    redirectTo: 'home/hero/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
