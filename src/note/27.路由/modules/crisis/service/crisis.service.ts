import { Injectable } from '@angular/core';
import {Crisis} from '../type/crisis';
import {CRISES} from '../type/mock-crisis';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  constructor() { }

  getCrises(): Crisis[] {
    return CRISES;
  }

  getCrisis(id: number | string) {
    return this.getCrises().find(item => item.id == id)
  }
}
