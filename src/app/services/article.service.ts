import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  print() {
    console.log('Article')
  }
}
