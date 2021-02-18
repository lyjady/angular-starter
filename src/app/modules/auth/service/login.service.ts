import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl: string

  isLogin = false

  constructor() { }

  login(): Observable<boolean> {
    return of(true).pipe(delay(1000), tap(() => this.isLogin = true))
  }

  logout() {
    this.isLogin = false
  }
}
