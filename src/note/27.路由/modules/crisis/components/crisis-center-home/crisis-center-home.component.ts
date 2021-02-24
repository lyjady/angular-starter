import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-crisis-center-home',
  templateUrl: './crisis-center-home.component.html',
  styleUrls: ['./crisis-center-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisCenterHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
