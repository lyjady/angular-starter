import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl: string

  isLogin = false

  name: string

  age: number

  fragment: string

  constructor(route: ActivatedRoute) {
    // 获取查询参数与片段
    route.queryParamMap.subscribe(value => {
      this.name = value.get('name')
      this.age = +value.get('age')
    })
    route.fragment.subscribe(value => {
      this.fragment = value
    })
  }

  login(): Observable<boolean> {
    return of(true).pipe(delay(1000), tap(() => this.isLogin = true))
  }

  logout() {
    this.isLogin = false
  }
}
