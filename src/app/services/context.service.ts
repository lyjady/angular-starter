import { Injectable } from '@angular/core';
import {observable, Observable, of} from 'rxjs';
import {Hero} from '../type/type';
import {TOKEN} from '../config/constant';
import {UserService} from './user.service';
import {switchMap} from 'rxjs/operators';
import {AccountService} from './acount.service';

@Injectable({
  providedIn: 'root'
})
export class ContextService {

  constructor(private userService: UserService, private accountService: AccountService) { }

  setContext(): Observable<Hero | false> {
    const token = localStorage.getItem(TOKEN)
    return new Observable(observable => {
      if (token) {
        this.userService.user$.pipe(
          switchMap(user => {
            if (user) {
              return of(user)
            } else {
              return this.accountService.account()
            }
          })
        ).subscribe(value => {
          let user: Hero;
          if ('token' in value) {
            localStorage.setItem(TOKEN, value.token);
            this.userService.setUser(value.user);
            user = value.user;
          } else {
            user = value;
          }
          observable.next(user);
        })
      } else {
        observable.next(false)
      }
      observable.complete()
    })
  }
}
