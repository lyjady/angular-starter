import { Injectable } from '@angular/core';

// 提供该服务, 提供范围是根节点(全局)
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[]

  constructor() {
    this.users = [
      {id: 1, name: 'Jack', age: 14},
      {id: 2, name: 'Rose', age: 12},
      {id: 3, name: 'Sam', age: 15},
      {id: 4, name: 'Jane', age: 13},
      {id: 5, name: 'Tony', age: 14},
    ]
  }


}

export interface User {
  id: number;
  name: string;
  age: number;
}
