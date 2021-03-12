import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {UserService} from '../services/user.service';
import {switchMap} from 'rxjs/operators';
import {ContextService} from '../services/context.service';

@Injectable({
  providedIn: 'root'
})
export class HeroGuard implements CanActivate {

  constructor(private userService: UserService, private contextService: ContextService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const auths: string[] = next.data.auths
    return this.contextService.setContext().pipe(
      switchMap(value => {
        if (value) {
          if (auths.includes(value.role)) {
            return of(true)
          } else {
            this.router.navigate(['/home/hero/list']).then(() => alert('您没有操作权限，请联系管理员'))
            return of(false)
          }
        }
        this.userService.redirectUrl = state.url
        this.router.navigate(['/login']).then(() => alert('您还未登录请先登录'))
        return of(false)
      })
    )
  }
}
