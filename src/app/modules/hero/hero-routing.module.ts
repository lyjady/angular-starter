import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListComponent} from './hero-list/hero-list.component';
import {AddHeroComponent} from './add-hero/add-hero.component';
import {UpdateHeroComponent} from './update-hero/update-hero.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
