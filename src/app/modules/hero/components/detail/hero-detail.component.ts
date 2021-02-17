import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Hero} from '../../type/hero';
import {HeroService} from '../../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroDetailComponent implements OnInit {

  hero: Hero

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router) {
    route.params.subscribe(value => this.hero = heroService.getHero(value.id))
  }

  ngOnInit(): void {
  }

  back(id: number) {
    if (id) {
      // 跳转到指定的路由页面有待路由参数但是又不影响跳转时可以使用对象传路由参数, 此时参数部分不会影响整个路由页面, 参数会以;key1=value1;key2=value2这样的格式携带
      // 组件内获取路由参数的方式与获取QueryParam方式的路由参数一致
      this.router.navigate(['/hero/list', {id}]).then()
      return
    }
    this.router.navigate(['/hero/list']).then()
  }
}
