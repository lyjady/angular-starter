import {Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  options: Required<Option> = {
    content: '仿佛兮若晴雨之蔽月，飘摇兮若流风之回雪',
    theme: 'primary'
  }

  @Output()
  close = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  class() {
    return `alert alert-${this.options.theme}`
  }

  setOption(option: Option) {
    this.options = {...this.options, ...option}
  }
}

type Option = {
  content: string;
  theme?: 'primary' | 'danger' | 'warning'
}
