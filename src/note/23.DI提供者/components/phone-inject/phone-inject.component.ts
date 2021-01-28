import { Component, OnInit } from '@angular/core';
import {PhoneService} from '../../services/phone.service';

@Component({
  selector: 'app-phone-inject',
  templateUrl: './phone-inject.component.html',
  styleUrls: ['./phone-inject.component.scss']
})
export class PhoneInjectComponent implements OnInit {

  constructor(readonly phoneService: PhoneService) {
    console.log(phoneService.phones);
  }

  ngOnInit(): void {
  }

}
