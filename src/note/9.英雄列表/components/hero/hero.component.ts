import { Component, OnInit } from '@angular/core';
import heroes, {Hero, HeroArg} from '../../config/type';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  heroes: Hero[]

  searchCondition: HeroArg;

  constructor() {
    this.heroes = heroes
    this.searchCondition = {
      name: '',
      job: '',
      sort: 'asc'
    };
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('init')
  }

  search(): void {
    console.log(this.searchCondition)
  }

  trackBy(hero: Hero) {
    return hero.id
  }
}
