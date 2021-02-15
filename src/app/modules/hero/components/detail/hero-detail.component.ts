import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../../type/hero';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  constructor(private activatedRoute: ActivatedRoute, private heroService: HeroService) {
    activatedRoute.params.subscribe(value => this.hero = heroService.getHero(value.id))
  }

  ngOnInit(): void {
  }

}
