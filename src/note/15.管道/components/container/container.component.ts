import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  base = 1

  exponent = 1

  animals: Animal[]

  constructor() {
    this.animals = [
      {id: new Date().getTime().toString(), name: '狗', canFly: false},
      {id: new Date().getTime().toString(), name: '猫', canFly: false},
      {id: new Date().getTime().toString(), name: '牛', canFly: false},
      {id: new Date().getTime().toString(), name: '羊', canFly: false},
      {id: new Date().getTime().toString(), name: '鸟', canFly: true},
      {id: new Date().getTime().toString(), name: '麻雀', canFly: true},
    ]
  }

  ngOnInit(): void {
  }

  trackBy(animal: Animal) {
    return animal.id;
  }

  appendCanFlyAnimal() {
    this.animals.push({id: new Date().getTime().toString(), name: 'Can Fly Animal', canFly: true})
  }

}

export interface Animal {
  id: string;
  name: string;
  canFly: boolean;
}
