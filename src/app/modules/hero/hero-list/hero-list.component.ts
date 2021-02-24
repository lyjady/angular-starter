import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import heroes, {Hero, HeroArg} from '../../../config/type';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {

  heroes: Hero[]

  searchCondition: HeroArg;

  constructor() {
    this.heroes = heroes
    this.searchCondition = {
      name: '',
      job: '',
      sort: 'asc'
    };
  }

  ngOnInit(): void {
  }

  search(): void {
    console.log(this.searchCondition)
  }

  trackBy(hero: Hero) {
    return hero.id
  }

}
