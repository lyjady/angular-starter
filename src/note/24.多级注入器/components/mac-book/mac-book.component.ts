import { Component, OnInit } from '@angular/core';
import {MacService} from '../../services/mac.service';

@Component({
  selector: 'app-mac-book',
  templateUrl: './mac-book.component.html',
  styleUrls: ['./mac-book.component.scss'],
})
export class MacBookComponent implements OnInit {

  constructor(private macService: MacService) {
    macService.method()
  }

  ngOnInit(): void {
  }

}
