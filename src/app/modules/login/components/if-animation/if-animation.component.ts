import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-if-animation',
  templateUrl: './if-animation.component.html',
  styleUrls: ['./if-animation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('ifAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('.5s', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('.5s', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class IfAnimationComponent implements OnInit {

  isShow = true

  constructor() { }

  ngOnInit(): void {
  }

}
