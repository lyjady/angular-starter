import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeHeaderComponent implements OnInit {

  breadcrumb: string[] = []

  constructor(private router: Router, private route: ActivatedRoute) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      switchMap(() => this.route.firstChild.data)
    ).subscribe(data => {
      if (data.breadcrumb?.length) {
        this.breadcrumb = data.breadcrumb
      }
    })
  }

  ngOnInit(): void {
  }

}
