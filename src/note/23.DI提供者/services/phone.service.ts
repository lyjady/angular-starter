export class PhoneService {

  phones: Phone[]

  constructor() {
    this.phones = [
      {id: 1, band: '三星'},
      {id: 2, band: '苹果'},
      {id: 3, band: '小米'},
    ]
  }
}

export interface Phone {
  id: number;
  band: string
}
