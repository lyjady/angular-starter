import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HighlightDirective } from './directive/highlight.directive';
import { CustomDirectiveComponent } from './components/custom-directive/custom-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CustomDirectiveComponent,
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