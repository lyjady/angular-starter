import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { RxjsDemo1Component } from './components/rxjs-demo1/rxjs-demo1.component';
import { GithubProjectComponent } from './components/github-project/github-project.component';

@NgModule({
  declarations: [
    AppComponent,
    RxjsDemo1Component,
    GithubProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
