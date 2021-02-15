import { Injectable } from '@angular/core';
import {HEROES} from '../type/mock-hero';
import {Hero} from '../type/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES
  }

  getHero(id: number | string) {
    return this.getHeroes().find(item => item.id == id)
  }
}
