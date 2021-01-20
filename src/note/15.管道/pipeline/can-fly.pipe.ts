import { Pipe, PipeTransform } from '@angular/core';
import {Animal} from '../components/container/container.component';

@Pipe({
  name: 'canFly',
  pure: false
})
export class CanFlyPipe implements PipeTransform {

  transform(value: Animal[], ...args: unknown[]): unknown {
    return value.filter(item => item.canFly);
  }

}
