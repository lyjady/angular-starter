import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './hero-list/hero-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { UpdateHeroComponent } from './update-hero/update-hero.component';
import {HttpClientModule} from '@angular/common/http';
import {PagesModule} from '../pages/pages.module';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [HeroListComponent, AddHeroComponent, UpdateHeroComponent, LoadingComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [HeroListComponent]
})
export class HeroModule { }
