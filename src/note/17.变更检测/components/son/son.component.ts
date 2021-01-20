import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SonComponent implements OnInit {

  sonTitle = 'Son Title'

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.sonTitle = 'change son title'
      // 标记为需要刷新的节点即使是OnPush模式
      this.changeDetectorRef.markForCheck()
      // 立即开始变更检测
      this.changeDetectorRef.detectChanges()
    }, 3000)

  }

}
