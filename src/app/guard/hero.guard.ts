import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../services/user.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.userService.redirectUrl = state.url
    const auths: string[] = next.data.auths
    return this.userService.user$.pipe(
      switchMap(user => {
        if (!user) {
          this.router.navigate(['/login']).then(() => alert('您还未登录请先登录'))
          return of(false)
        } else {
          if (auths.includes(user.role)) {
            return of(true)
          } else {
            this.router.navigate(['/home/hero/list']).then(() => alert('您没有操作权限，请联系管理员'))
            return of(false)
          }
        }
      })
    )
  }
}
