import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure-review',
  templateUrl: './structure-review.component.html',
  styleUrls: ['./structure-review.component.scss']
})
export class StructureReviewComponent implements OnInit {

  isShow = true

  isShow2 = false

  switchValue = 'grape'

  forValue: User[] = [
    {id: 1, name: 'Jack'},
    {id: 2, name: 'Rose'},
    {id: 3, name: 'Sam'},
    {id: 4, name: 'Nike'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  traceBy(item: User) {
    return item.id;
  }

}

interface User {
  id: number
  name: string
}
