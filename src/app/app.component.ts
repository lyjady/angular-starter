import {ChangeDetectionStrategy, Component} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {ContextService} from './services/context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'Angular-Starter'

  constructor(private contextService: ContextService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      switchMap(() => this.contextService.setContext()),
    ).subscribe()
  }
}
