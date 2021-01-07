import {Component, Input, OnInit} from '@angular/core';
import {TransferItem} from '../../app.component';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss']
})
export class TransferPanelComponent implements OnInit {

  @Input() list: TransferItem[];

  @Input() isShowInput: boolean;

  searchValue: string;

  showList: TransferItem[];

  constructor() {
  }

  ngOnInit(): void {
    this.showList = this.list.slice();
  }

  traceByTransferItem(item: TransferItem): string {
    return item.key;
  }

  checkedLength(): number {
    return this.list.filter(item => item.checked).length;
  }

  checked(item: TransferItem): void {
    item.checked = !item.checked;
  }

  search(): void {
    this.showList = this.list.filter(item => item.value.includes(this.searchValue))
  }
}
