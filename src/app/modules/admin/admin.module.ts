import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHeroComponent } from './components/admin-hero/admin-hero.component';
import { AdminCrisisComponent } from './components/admin-crisis/admin-crisis.component';


@NgModule({
  declarations: [AdminComponent, AdminDashboardComponent, AdminHeroComponent, AdminCrisisComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
