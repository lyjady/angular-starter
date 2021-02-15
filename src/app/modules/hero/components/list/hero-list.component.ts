import { Component, OnInit } from '@angular/core';
import {Hero} from '../../type/hero';
import {HeroService} from '../../service/hero.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss']
})
export class HeroListComponent implements OnInit {

  heroes: Hero[]

  selectedId: number

  constructor(private heroService: HeroService, private router: Router) {
    this.heroes = heroService.getHeroes()
  }

  ngOnInit(): void {
  }

  clickItem(id: number) {
    this.selectedId = id
    // 编程式路由跳转
    // this.router.navigateByUrl(`/hero/detail/${id}`).then()
    // 上面的表达式等价于下面, 如果是一个数组那么数组里面从第二个元素开始的变量都会变成路由的路径参数
    this.router.navigate(['/hero/detail', id.toString()]).then()
  }

}
