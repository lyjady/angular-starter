import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route, RouterPreloader} from '@angular/router';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomRoutePreloadService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    // 自定义路由预加载策略
    const data = route.data
    if (data.isPreload) {
      // 如果路由信息中的data有isPreload并且为true则预加载
      return fn()
    } else {
      return of(null)
    }
  }
}
