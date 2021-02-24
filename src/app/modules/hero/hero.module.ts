import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import {FormsModule} from '@angular/forms';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';


@NgModule({
  declarations: [HeroListComponent, AddHeroComponent, UpdateHeroComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule
  ],
  exports: [HeroListComponent]
})
export class HeroModule { }
