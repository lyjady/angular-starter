import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Hero} from '../type/hero';
import {EMPTY, Observable, of} from 'rxjs';
import {HeroService} from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class HeroResolveService implements Resolve<Hero>{

  constructor(private heroService: HeroService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Hero | never> {
    // resolve在进入指定的路由之前指定的逻辑
    const id = route.paramMap.get('id')
    const hero = this.heroService.getHero(id)
    if (hero && hero.id) {
      return of(hero)
    } else {
      // 找不到指令的英雄则不进入该路由
      return EMPTY
    }
  }
}
