import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadingStrategy, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(module => module.LoginModule)
  },
  {
    path: '',
    redirectTo: 'home/hero/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
