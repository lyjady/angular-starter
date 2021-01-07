import { Component } from '@angular/core';
import {TemplateRefComponent} from './components/template-ref/template-ref.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentBtnClick(componentRef: TemplateRefComponent) {
    componentRef.superComponentClick()
  }
}
