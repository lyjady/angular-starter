import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PowPipe } from './pipeline/pow.pipe';
import { ContainerComponent } from './components/container/container.component';
import { CanFlyPipe } from './pipeline/can-fly.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PowPipe,
    ContainerComponent,
    CanFlyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
