import { Component, OnInit } from '@angular/core';
import {Animal} from '../animal';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss']
})
export class CatComponent extends Animal implements OnInit {

  name = 'Sam'

  constructor() {
    super()
  }

  ngOnInit(): void {
  }

  method(): void {
    console.log('this is abstract cat component')
  }

}
