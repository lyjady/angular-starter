import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroDetailComponent } from './components/detail/hero-detail.component';
import { HeroListComponent } from './components/list/hero-list.component';


@NgModule({
  declarations: [HeroDetailComponent, HeroListComponent],
  exports: [
    HeroListComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule { }
