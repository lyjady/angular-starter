import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InjectComponent } from './components/inject/inject.component';
import { AnimalInjectComponent } from './components/animal-inject/animal-inject.component';
import {OtherModule} from './modules/other/other.module';

@NgModule({
  declarations: [
    AppComponent,
    InjectComponent,
    AnimalInjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // OtherModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
