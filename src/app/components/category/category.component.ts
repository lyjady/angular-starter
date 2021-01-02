import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  title = 'I am Category Component';

  ngOnInit(): void {
  }

  clickBtn(event: MouseEvent, message: string): void {
    console.log(message);
    console.log((event.target as HTMLButtonElement).innerText);
  }

  inputEvent(event: Event): void {
    console.log((event.target as HTMLInputElement).value)
  }

  clickChild(event: MouseEvent): void {
    event.stopPropagation();
    console.log('点击了孩子')
  }

  clickParent(): void {
    console.log('点击了父亲');
  }
}
