import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { AnimalComponent } from './components/common/animal/animal.component';
import { DogComponent } from './components/common/dog/dog.component';
import { CatComponent } from './components/abstract/cat/cat.component';
import { MiniCatComponent } from './components/abstract/mini-cat/mini-cat.component';
import { PhoneComponent } from './components/abstract/phone/phone.component';
import { MiniPhoneComponent } from './components/abstract/mini-phone/mini-phone.component';


@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    DogComponent,
    CatComponent,
    MiniCatComponent,
    PhoneComponent,
    MiniPhoneComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
