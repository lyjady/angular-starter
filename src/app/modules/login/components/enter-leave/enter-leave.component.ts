import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-enter-leave',
  templateUrl: './enter-leave.component.html',
  styleUrls: ['./enter-leave.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({
          transform: 'translateX(-100%)'
        }),
        animate('.5s', style({
          transform: 'translateX(0)'
        }))
      ]),
      transition(':leave', [
        animate('.5s', style({
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class EnterLeaveComponent implements OnInit {

  lis = [{name: 'Jack'}, {name: 'Rose'}, {name: 'Sam'}, {name: 'Jane'}, {name: 'John'}]

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    this.lis.push({name: 'Maru'})
  }

  remove(index) {
    this.lis.splice(index, 1)
  }
}
