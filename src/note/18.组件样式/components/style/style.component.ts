import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.elRef)
    // 改变组件的样式
    this.elRef.nativeElement.style.backgroundColor = 'red'
    this.elRef.nativeElement.style.color = 'red'
    this.elRef.nativeElement.style.height = '600px'
    this.elRef.nativeElement.style.weight = '200px'
    this.elRef.nativeElement.style.fontSize = '32px'
  }

}
