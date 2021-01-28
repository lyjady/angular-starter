import { Component, OnInit } from '@angular/core';
import {AnimalService} from '../../services/animal.service';

@Component({
  selector: 'app-animal-inject',
  templateUrl: './animal-inject.component.html',
  styleUrls: ['./animal-inject.component.scss'],
  // 该服务只为当前组件提供服务
  providers: [AnimalService]
})
export class AnimalInjectComponent implements OnInit {

  constructor(readonly animalService: AnimalService) {
    console.log(animalService.animals);
  }

  ngOnInit(): void {
  }

}
