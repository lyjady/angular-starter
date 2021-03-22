import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-status-slider',
  templateUrl: './status-slider.component.html',
  styleUrls: ['./status-slider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('statusSlider', [
      state('active', style({
        backgroundColor: '#f44336'
      })),
      state('inactive', style({
        backgroundColor: '#2196f3'
      })),
      transition('* => active', [
        animate('2s', keyframes([
          style({backgroundColor: '#3949ab'}),
          style({backgroundColor: '#5e35b1'}),
          style({backgroundColor: '#8e24aa'}),
          style({backgroundColor: '#d81b60'})
        ])),
        animate('.3s')
      ]),
      // style还可以设置offset来表示当前状态的过渡之间
      transition('* => inactive', [
        animate('2s', keyframes([
          style({backgroundColor: '#d81b60'}),
          style({backgroundColor: '#8e24aa'}),
          style({backgroundColor: '#5e35b1'}),
          style({backgroundColor: '#3949ab'})
        ])),
        animate('.3s')
      ])
    ])
  ]
})
export class StatusSliderComponent implements OnInit {

  state: 'active' | 'inactive' = 'active'

  constructor() { }

  ngOnInit(): void {
  }

  change() {
    if (this.state === 'active') {
      this.state = 'inactive'
    } else {
      this.state = 'active'
    }
  }
}
