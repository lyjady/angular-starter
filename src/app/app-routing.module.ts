import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NotFoundComponent} from './views/not-found/not-found.component';
import {ComposeMessageComponent} from './modules/crisis/components/compose-message/compose-message.component';


const routes: Routes = [
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
    // 打印路由事件日志
    // enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
