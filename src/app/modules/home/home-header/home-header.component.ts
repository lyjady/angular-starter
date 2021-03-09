import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Hero} from '../../../type/type';
import {UserService} from '../../../services/user.service';
import {combineLatest} from 'rxjs';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeaderComponent implements OnInit {

  breadcrumb: string[] = []

  currentUser: Hero

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => combineLatest(this.route.firstChild.data, userService.user$))
    ).subscribe(([data, user]) => {
      if (data.breadcrumb?.length) {
        this.breadcrumb = data.breadcrumb
      }
      this.currentUser = user
    })
  }

  ngOnInit(): void {
  }

}
