import {Inject, Injectable} from '@angular/core';
import {PadModule} from '../modules/pad/pad.module';

// providedIn的是一个module那么改服务只能在引入了这个module的module里面的组件使用, 提供的module里面的组件不能使用
@Injectable({
  providedIn: PadModule
})
export class PadService {

  constructor() { }

  method(): void {
    console.log('this is pad service')
  }
}
