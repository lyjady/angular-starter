import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { MobileComponent } from './components/mobile/mobile.component';
import { MobileListComponent } from './components/mobile/mobile-list/mobile-list.component';
import { MobileItemComponent } from './components/mobile/mobile-list/mobile-item/mobile-item.component';
import { ComputerComponent } from './components/computer/computer.component';
import { ComputerDirective } from './directives/computer.directive';
import {PadModule} from './modules/pad/pad.module';
import { MacComponent } from './components/mac/mac.component';
import { MacBookComponent } from './components/mac-book/mac-book.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileComponent,
    MobileListComponent,
    MobileItemComponent,
    ComputerComponent,
    ComputerDirective,
    MacComponent,
    MacBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PadModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
