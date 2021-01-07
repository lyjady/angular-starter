import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {

  value = 'TemplateRefComponent'

  constructor() { }

  ngOnInit(): void {
  }

  inputBtnClick(inputRef: HTMLInputElement) {
    console.log(inputRef.value)
  }

  superComponentClick() {
    console.log('父组件点击了组件模板变量')
  }
}
