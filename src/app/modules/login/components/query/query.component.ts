import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {animate, query, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('query', [
      state('open', style({

      })),
      state('open', style({
        backgroundColor: '#d500f9',
        height: '800px'
      })),
      transition('* => close', [
        query('.one', [
          animate('1s', style({
            backgroundColor: '#f50057',
            height: '400px'
          }))
        ])
      ]),
      transition('* => open', [
        query('.one', [
          animate('1s')
        ])
      ])
    ])
  ]
})
export class QueryComponent implements OnInit {

  isOpen = false

  constructor() {
  }

  ngOnInit(): void {
  }

}
