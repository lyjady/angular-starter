import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Crisis} from '../../type/crisis';
import {CrisisService} from '../../service/crisis.service';

@Component({
  selector: 'app-crisis-center',
  templateUrl: './crisis-center.component.html',
  styleUrls: ['./crisis-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisCenterComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
