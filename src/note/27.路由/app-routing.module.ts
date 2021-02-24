import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ComposeMessageComponent} from './modules/crisis/components/compose-message/compose-message.component';
import {CanLoadGuard} from './modules/auth/can-load.guard';
import {CustomRoutePreloadService} from './modules/custom-route-preload.service';


const routes: Routes = [
  {
    path: 'admin',
    // 路由懒加载
    loadChildren: () => import('./modules/admin/admin.module').then(module => module.AdminModule),
    // 配置CanLoad路由守卫, 如果配置了路由守卫那么该路由将不会被预加载
    canLoad: [CanLoadGuard],
    data: {
      isPreload: false
    }
  },
  {
    // 配置路由预加载
    path: 'crisis',
    loadChildren: () => import('./modules/crisis/crisis.module').then(module => module.CrisisModule),
    data: {
      isPreload: true
    }
  },
  {
    // 如果没有一个路径能够匹配到路由则显示默认页面
    path: '**',
    component: NotFoundComponent
  },
  {
    path: 'message',
    component: ComposeMessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // 如果点击的URL与当前页面相同如何处理默认ignore忽略, reload表示会重新加载一遍路由事件
    onSameUrlNavigation: 'ignore',
    // 配置预加载策略
    // preloadingStrategy: PreloadAllModules
    // 使用自定义的预加载策略
    preloadingStrategy: CustomRoutePreloadService
    // 打印路由事件日志
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
