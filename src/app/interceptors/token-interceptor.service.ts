import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TOKEN} from '../config/constant';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem(TOKEN)
    if (token) {
      const clone = req.clone({
        headers: req.headers.set(TOKEN, token)
      })
      return next.handle(clone)
    }
    return next.handle(req)
  }
}
