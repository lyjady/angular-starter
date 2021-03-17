import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {Hero} from '../../../../type/type';

@Component({
  selector: 'app-user-center',
  templateUrl: './user-center.component.html',
  styleUrls: ['./user-center.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserCenterComponent implements OnInit {

  hero: Hero

  constructor(private userService: UserService) {
    this.userService.user$.subscribe(value => this.hero = value)
  }

  ngOnInit(): void {
  }

}
