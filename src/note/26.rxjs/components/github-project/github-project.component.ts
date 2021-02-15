import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {GithubProjectService} from '../../service/github-project.service';
import {fromEvent, observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map, pluck} from 'rxjs/operators';

@Component({
  selector: 'app-github-project',
  templateUrl: './github-project.component.html',
  styleUrls: ['./github-project.component.scss']
})
export class GithubProjectComponent implements OnInit, AfterViewInit {

  projects: string[];

  @ViewChild('input')
  private inputRef: ElementRef;

  constructor(private githubProjectService: GithubProjectService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    fromEvent(this.inputRef.nativeElement, 'input')
      .pipe(
        debounceTime(500),
        pluck('target', 'value'),
        filter((value: string) => value.length > 0),
        distinctUntilChanged()
      )
      .subscribe(
        value => {
          const observable = this.githubProjectService.searchProject(value);
          observable.subscribe(response => this.projects = response.response.items.map(item => item.name))
          this.changeDetectorRef.markForCheck()
        },
        error => {
          console.error(error);
        }
      );
  }

}
