import {Component, Host, OnInit, Self} from '@angular/core';
import {ComputerService} from '../../services/computer.service';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.scss']
})
export class ComputerComponent implements OnInit {

  // @Host: 如果当前组件是被投影的组件那么加了@Host它就会把投影组件作为宿主组件, 从那里寻找依赖
  constructor(@Host() private computerService: ComputerService) {
    computerService.method()
  }

  ngOnInit(): void {
  }

}
