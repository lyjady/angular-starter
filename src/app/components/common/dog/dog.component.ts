import { Component, OnInit } from '@angular/core';
import {AnimalComponent} from '../animal/animal.component';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {

  // 子组件想要获取父组件的实例, 可以直接注入
  constructor(private animalComponent: AnimalComponent) {
    animalComponent.method()
  }

  ngOnInit(): void {
  }

}
