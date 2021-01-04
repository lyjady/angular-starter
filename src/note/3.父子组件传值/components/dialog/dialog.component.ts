import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
// @Input()和@Output()还可以写于@Component()装饰器的元数据内, 但是不推荐这么做
export class DialogComponent implements OnInit {

  // @Input输入属性等价于Vue父组件向子组件传值, @Input('alias')可以设置别名, 那么父组件向子组件传值的时候就只能使用别名否则无效
  @Input() title = '标题';

  @Input('alias') content = '内容';

  @Input() cancelText = 'Cancel';

  @Input() confirmText = 'Confirm';

  @Input() isVisible = false;

  @Input() fontSize: number;

  // @Output()等价于Vue的子组件调用父组件的方法, 可以将子组件的值传给父组件, void表示没有传递数据
  // 如果传递数据那么泛型就要写传递数据的类型
  @Output() private change = new EventEmitter<void>();

  @Output() private resetTitle = new EventEmitter<string>()

  @Output() private confirmTextChange = new EventEmitter<string>();

  @Output() private fontSizeChange = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  changeVisible(): void {
    this.change.emit();
  }

  setTitle(): void {
    this.resetTitle.emit('新的标题')
  }

  setCancelText(): void {
    this.confirmTextChange.emit('新的取消')
  }

  changeFontSize(size: number) {
    this.fontSizeChange.emit(size)
  }

  inc() {
    this.changeFontSize(this.fontSize + 1)
  }

  dec() {
    this.changeFontSize(this.fontSize - 1)
  }
}
