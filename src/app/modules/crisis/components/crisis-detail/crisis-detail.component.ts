import {AfterContentChecked, AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Crisis} from '../../type/crisis';
import {CrisisService} from '../../service/crisis.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CrisisDetailComponent implements OnInit, AfterViewChecked {

  crisis: Crisis

  constructor(private crisisService: CrisisService, private route: ActivatedRoute, private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    // this.crisis = this.route.paramMap.pipe(map(params => {
    //   return this.crisisService.getCrisis(params.get('id'))
    // }));
    this.route.paramMap.subscribe(value => {
      this.crisis = this.crisisService.getCrisis(value.get('id'))
      console.log(this.crisis);
      this.changeDetectorRef.markForCheck()
    })
  }

  ngAfterViewChecked() {
    console.log('checked')
  }
}
