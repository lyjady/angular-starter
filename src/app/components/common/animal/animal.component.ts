import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  method(): void {
    console.log('this is animal component')
  }
}
