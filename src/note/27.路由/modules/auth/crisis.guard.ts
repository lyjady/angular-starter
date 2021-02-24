import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CrisisGuard implements CanDeactivate<CanDeactivateInterface> {

  canDeactivate(component: CanDeactivateInterface) {
    // CanDeactivate会在离开该路由页面之前调用该方法, 如果返回的是true则可以离开, false则不可以离开
    // 当要离开该路由页面时Angular会自动调用该页面对应的组件内的指定的方法来确定是否要离开该页面
    return component?.canDeactivate()
  }

}

export interface CanDeactivateInterface {
  canDeactivate()
}
