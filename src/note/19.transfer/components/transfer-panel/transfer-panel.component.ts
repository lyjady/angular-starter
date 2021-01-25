import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Direction, TransferItem} from '../../app.component';

@Component({
  selector: 'app-transfer-panel',
  templateUrl: './transfer-panel.component.html',
  styleUrls: ['./transfer-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferPanelComponent implements OnInit, OnChanges {

  @Input()
  list: TransferItem[];

  @Input()
  search: boolean;

  @Output()
  transferItem = new EventEmitter<any>()

  @Input()
  direction: Direction

  searchValue: string;

  showList: TransferItem[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.list) {
      this.showList = this.list.slice();
    }
  }

  traceByTransferItem(item: TransferItem): string {
    return item.key;
  }

  checkedLength(): number {
    return this.showList.filter(item => item.checked).length;
  }

  checked(item: TransferItem): void {
    item.checked = !item.checked;
  }

  searchItem(): void {
    this.showList = this.list.filter(item => item.value.includes(this.searchValue))
    this.setTransferItemBySearch()
  }

  setTransferItemBySearch() {
    const result = [this.showList, this.direction]
    this.transferItem.emit(result)
  }
}
