import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Base, LoginArg, LoginType} from '../type/type';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private prefixUrl = environment.baseUrl + '/hero'

  constructor(private httpClient: HttpClient) { }

  login(arg: LoginArg): Observable<LoginType> {
    return this.httpClient.post(this.prefixUrl + '/login', arg)
      .pipe(map((response: Base<any>) => response.data))
  }
}
