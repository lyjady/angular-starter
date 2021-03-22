import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, group, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('group', [
      state('open', style({
        opacity: 1,
        backgroundColor: '#e91e63',
        height: '400px'
      })),
      state('close', style({
        opacity: 0,
        backgroundColor: '#5e35b1',
        height: '600px'
      })),
      transition('open => close', [
        group([
          animate('500ms', style({
            backgroundColor: '#039be5',
            width: '300px'
          })),
          animate('1s')
        ])
      ]),
      transition('close => open', [
        animate('1s')
      ]),
    ])
  ]
})
export class GroupComponent implements OnInit {

  isOpen = false

  constructor() { }

  ngOnInit(): void {
  }

}
