import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-name-edoitor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NameEditorComponent implements OnInit {

  name = new FormControl('Jack')

  constructor() {
  }

  ngOnInit(): void {
  }

  setFormControlValue() {
    // 设置FormControl的值
    this.name.setValue('Rose')
  }
}
