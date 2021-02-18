import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-admin-hero',
  templateUrl: './admin-hero.component.html',
  styleUrls: ['./admin-hero.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminHeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
