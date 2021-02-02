import {Component, forwardRef, OnInit} from '@angular/core';
import {Phone} from '../phone';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
  // providers: [{provide: Phone, useExisting: forwardRef(() => PhoneComponent)}]
})
export class PhoneComponent implements Phone, OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  run() {
    console.log('phone is running')
  }
}
