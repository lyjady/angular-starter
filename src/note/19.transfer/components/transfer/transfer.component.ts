import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Direction, TransferItem} from '../../app.component';
import cloneDeep from 'lodash.clonedeep';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransferComponent implements OnInit, OnChanges {

  @Input()
  datasource: TransferItem[];

  @Input()
  search: boolean;

  leftData: TransferItem[] = [];

  leftShowData: TransferItem[] = [];

  rightData: TransferItem[] = [];

  rightShowData: TransferItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // 监听输入属性改变, 将值传入panel
    const {datasource} = changes;
    if (datasource.currentValue) {
      const currentValue = datasource.currentValue as TransferItem[];
      currentValue.forEach(item => {
        if (!item.direction || item.direction === 'left') {
          this.leftData.push(item);
          this.leftShowData = this.leftData.slice();
        } else {
          this.rightData.push(item);
          this.rightShowData = this.rightData.slice();
        }
      });
    }
  }

  enableMove(direction: Direction) {
    if (direction === 'left') {
      return !(this.leftShowData.filter(item => item.checked).length > 0);
    } else if (direction === 'right') {
      return !(this.rightShowData.filter(item => item.checked).length > 0);
    }
  }

  move(from: Direction) {
    if (from === 'left') {
      this.moveTransferItem(from, 'right');
    } else if (from === 'right') {
      this.moveTransferItem(from, 'left');
    }
  }

  private moveTransferItem(from: Direction, to: Direction) {
    console.log(this[`${from}ShowData`]);
    const moveList = this[`${from}ShowData`].filter(item => item.checked).map(item => {
      const newItem = cloneDeep(item)
      newItem.checked = false
      return newItem
    });
    this[`${to}Data`] = this[`${to}Data`].concat(moveList);
    this[`${to}ShowData`] = this[`${to}Data`].slice();
    this[`${from}Data`] = this[`${from}Data`].filter(item => !item.checked)
    this[`${from}ShowData`] = this[`${from}Data`].slice()
  }

  setSearchTransferItem(result: any) {
    const transferItems = result[0] as TransferItem[]
    const direction = result[1] as Direction
    if (direction === 'left') {
      this.leftShowData = transferItems
    } else if (direction === 'right') {
      this.rightShowData = transferItems
    }
  }
}
