import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {AddHeroComponent} from '../add-hero.component';

@Injectable({
  providedIn: 'root'
})
export class LeaveAddHeroGuard implements CanDeactivate<AddHeroComponent> {
  canDeactivate(
    component: AddHeroComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivate();
  }

}
