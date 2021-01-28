export class AnimalService {

  animals: Animal[]

  constructor() {
    this.animals = [
      {id: 1, name: '老虎'},
      {id: 2, name: '狮子'},
      {id: 3, name: '雄鹰'},
      {id: 4, name: '黑熊'},
      {id: 5, name: '猎豹'},
      {id: 6, name: '哈士奇'},
    ]
  }
}

export interface Animal {
  id: number;
  name: string;
}
