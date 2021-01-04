import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.scss']
})
export class IfComponent implements OnInit {

  ifVisible = true;

  componentRef: TemplateRef<any>;

  switchValue = '';

  @ViewChild("firstTemplate", {static: true}) templateBlock: TemplateRef<any> = null;

  heroes: Hero[];

  constructor() {
    this.heroes = [
      {id: '1', name: '泰兰德'},
      {id: '2', name: '希尔瓦娜斯'},
      {id: '3', name: '吉安娜'},
      {id: '4', name: '奥妮克希亚'}
    ]
  }

  ngOnInit(): void {
    this.componentRef = this.templateBlock
  }

  optionChange(event) {
    console.log(event.target.value);
  }

  trackByHero(hero: Hero): string {
    return hero.id;
  }

  pushHero() {
    this.heroes.push({id: new Date().getTime().toString(), name: this.switchValue})
  }

  reset(): void {
    this.heroes = [
      {id: '1', name: '泰兰德1'},
      {id: '2', name: '希尔瓦娜斯3'},
      {id: '3', name: '吉安娜'},
      {id: '4', name: '奥妮克希亚2'}
    ]
  }
}

interface Hero {
  id: string;
  name: string;
}
