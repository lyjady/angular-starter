import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from './service/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    // 判断是否能进入某个路由, 当返回true时才能访问
    if (this.loginService.isLogin) {
      return true;
    }
    this.loginService.redirectUrl = state.url
    // navigate跳转
    // this.router.navigate(['/login'], {
    //   queryParams: {name: 'Jack', age: 14},
    //   fragment: 'QueryParam'
    // }).then()
    // console.log('canActive');
    // return false
    // 返回UrlTree跳转
    // 设置跳转时的查询参数与片段
    return this.router.createUrlTree(['/login'], {
      queryParams: {
        name: 'Jack',
        age: 13
      },
      fragment: 'Fragment'
    })
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActiveChild');
    // 判断是否能够进入某个子路由
    return true;
  }
}
