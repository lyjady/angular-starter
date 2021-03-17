import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import heroes, {Hero, HeroArg} from '../../../config/type';
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent implements OnInit {

  heroes: Hero[] = []

  isLoading = false

  searchCondition: HeroArg;

  constructor(private heroService: HeroService, private changeDetectorRef: ChangeDetectorRef) {
    this.searchCondition = {
      name: '',
      job: '',
      sort: 'desc'
    };
    this.getList()
  }

  ngOnInit(): void {
  }

  search(): void {
    this.getList()
  }

  trackBy(hero: Hero) {
    return hero.id
  }

  getList() {
    this.isLoading = true
    this.heroService.heroes(this.searchCondition).subscribe((value) => {
      this.heroes = value
      this.isLoading = false
      this.changeDetectorRef.markForCheck()
    })
  }

  reset() {
    this.searchCondition = {
      name: '',
      job: '',
      sort: 'desc'
    }
    this.getList()
  }

  remove(id: string) {
    const confirm = window.confirm('确定要删除该英雄？')
    if (confirm) {
      this.heroService.remove(id).subscribe(() => {
        alert('删除成功')
        this.getList()
      })
    }
  }
}
