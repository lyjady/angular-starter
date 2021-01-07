import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-operator',
  templateUrl: './template-operator.component.html',
  styleUrls: ['./template-operator.component.scss']
})
export class TemplateOperatorComponent implements OnInit {

  value = 'AbC'

  obj = {
    id: 1,
    name: 'Jack'
  }

  now = Date.now()

  hero: Hero = null

  variable: string = null

  constructor() {
    setTimeout(() => {
      this.hero = {id: '1', name: 'Atlas'}
      this.variable = 'variable'
    }, 1000)
  }

  ngOnInit(): void {
  }

}

interface Hero {
  id: string;
  name: string;

}
