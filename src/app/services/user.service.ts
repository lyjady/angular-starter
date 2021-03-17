import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Base, Hero} from '../type/type';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private prefixUrl = environment.baseUrl + '/hero'

  private sub = new BehaviorSubject<Hero>(null)

  readonly user$ = this.sub.asObservable()

  redirectUrl: string

  constructor(private httpClient: HttpClient) { }

  setUser(user: Hero) {
    this.sub.next(user)
  }

  clear() {
    this.sub.next(null)
  }

  logout(): Observable<Base<any>> {
    return this.httpClient.get<Base<any>>(`${this.prefixUrl}/logout`)
  }
}
