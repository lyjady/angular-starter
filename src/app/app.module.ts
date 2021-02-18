import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NotFoundComponent } from './views/not-found/not-found.component';
import {HeroModule} from './modules/hero/hero.module';
import {CrisisModule} from './modules/crisis/crisis.module';
import {AdminModule} from './modules/admin/admin.module';
import {AuthModule} from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HeroModule,
    CrisisModule,
    AdminModule,
    AuthModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
