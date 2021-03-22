import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ForbinCnDirective } from './forbin-cn.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { EnterLeaveComponent } from './components/enter-leave/enter-leave.component';
import { IfAnimationComponent } from './components/if-animation/if-animation.component';
import { StatusSliderComponent } from './components/status-slider/status-slider.component';
import { GroupComponent } from './components/group/group.component';
import { QueryComponent } from './components/query/query.component';


@NgModule({
  declarations: [LoginComponent, ForbinCnDirective, OpenCloseComponent, EnterLeaveComponent, IfAnimationComponent, StatusSliderComponent, GroupComponent, QueryComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule
  ]
})
export class LoginModule { }
