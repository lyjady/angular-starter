import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroService} from './modules/hero/service/hero.service';
import {AccountService} from './services/acount.service';
import {NavigationStart, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';
import {UserService} from './services/user.service';
import {TOKEN} from './config/constant';
import {EMPTY} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'Angular-Starter'

  constructor(private accountService: AccountService, private userService: UserService, private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationStart),
      switchMap(() => this.userService.user$),
      switchMap(user => {
        const token = localStorage.getItem(TOKEN)
        if (!user && token) {
          return this.accountService.account()
        }
        return EMPTY
      })
    ).subscribe(({user, token}) => {
        localStorage.setItem(TOKEN, token)
        this.userService.setUser(user)
    })
  }
}
