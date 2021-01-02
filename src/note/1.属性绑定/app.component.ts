import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-starter';
  gender = 1;
  href = 'https://www.google.com';
  imageUrl = '../assets/images/toptoon.jpg';
  index = 1;
  isPrimary = true;
  multiClassNameString = 'alert alert-primary';
  multiClassNameArray = ['alert', 'alert-danger'];
  multiClassNameObject = {
    alert: true,
    'alert-primary': true
  };
  multiStyleString = 'background-color: green; width: 100px; height: 100px';
  multiStyleArray = ['background-color', 'red', 'width', '100px', 'height', '100px'];
  multiStyleObject = {
    backgroundColor: 'red',
    width: '200px',
    height: '200px',
    'border-top': '5px solid blue'
  };
}
