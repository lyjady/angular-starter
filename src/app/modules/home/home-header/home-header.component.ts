import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {Hero} from '../../../type/type';
import {UserService} from '../../../services/user.service';
import {combineLatest} from 'rxjs';
import {TOKEN} from '../../../config/constant';

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
      switchMap(() => this.route.firstChild.data)
    ).subscribe(data => {
      if (data.breadcrumb?.length) {
        this.breadcrumb = data.breadcrumb
      }
      this.userService.user$.subscribe(value => this.currentUser = value)
    })
  }

  ngOnInit(): void {
  }

  logout() {
    const confirm = window.confirm('确定要退出登录？')
    if (confirm) {
      this.userService.logout().subscribe(() => {
        this.userService.setUser(null)
        localStorage.removeItem(TOKEN)
      })
    }
  }
}
