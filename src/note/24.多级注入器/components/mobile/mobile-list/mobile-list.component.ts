import { Component, OnInit } from '@angular/core';
import {MobileService} from '../../../services/mobile.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss'],
  providers: [MobileService]
})
export class MobileListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
