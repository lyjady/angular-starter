import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PagesModule} from './modules/pages/pages.module';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { NameValidationDirective } from './components/template-form/name-validation.directive';
import { PwdEqualValidationDirective } from './components/template-form/pwd-equal-validation.directive';
import { HasMobileValidationDirective } from './components/template-form/has-mobile-validation.directive';

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    FormValidationComponent,
    TemplateFormComponent,
    NameValidationDirective,
    PwdEqualValidationDirective,
    HasMobileValidationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
