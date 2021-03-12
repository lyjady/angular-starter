import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Hero} from '../type/type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private sub = new BehaviorSubject<Hero>(null)

  readonly user$ = this.sub.asObservable()

  redirectUrl: string

  constructor() { }

  setUser(user: Hero) {
    this.sub.next(user)
  }

  clear() {
    this.sub.next(null)
  }
}
