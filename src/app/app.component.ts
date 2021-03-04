import {ChangeDetectionStrategy, Component} from '@angular/core';
import {HeroService} from './modules/hero/service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'Angular-Starter'

  constructor(private heroService: HeroService) {}
}
