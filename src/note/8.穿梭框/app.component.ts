import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  transferList: TransferItem[];

  isShowInput: boolean;

  constructor() {
    this.initList();
    this.isShowInput = true;
  }

  private initList(): void {
    this.transferList = [];
    const prefix = 'item' + Date.now().toString().slice(-3);
    for (let i = 0; i < 20; i++) {
      this.transferList.push({
        key: prefix + '_' + i,
        value: `${prefix}${i + 1}`,
        checked: i % 6 === 0
      });
    }
  }
}

export interface TransferItem {
  key: string;
  value: string;
  checked: boolean;
}
