import { Component, OnInit } from '@angular/core';
import {Crisis} from '../../type/crisis';
import {CrisisService} from '../../service/crisis.service';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.scss']
})
export class CrisisCenterComponent implements OnInit {

  crises: Crisis[]

  selectedId: number

  constructor(private crisisService: CrisisService) {
    this.crises = crisisService.getCrises()
  }

  ngOnInit(): void {
  }

  clickItem(id: number) {
    this.selectedId = id
  }
}
