import { Directive } from '@angular/core';
import {ComputerService} from '../services/computer.service';

@Directive({
  selector: '[appComputer]',
  providers: [ComputerService]
})
export class ComputerDirective {

  constructor() {
  }

}
