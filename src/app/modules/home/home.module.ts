import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import {HeroModule} from '../hero/hero.module';


@NgModule({
  declarations: [HomeHeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeroModule
  ]
})
export class HomeModule { }
