import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Crisis} from '../../type/crisis';
import {CrisisService} from '../../service/crisis.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[]

  selectedId: number

  constructor(private crisisService: CrisisService, private router: Router, private route: ActivatedRoute) {
    this.crises = crisisService.getCrises()
  }

  ngOnInit(): void {
  }

  clickItem(id: number) {
    this.selectedId = id
    // this.router.navigate()默认是以绝对路径的形式进行跳转, 如果需要以相对路径跳转则需要加上{relativeTo: this.route}该参数
    this.router.navigate([id], {relativeTo: this.route}).then()
  }

}
