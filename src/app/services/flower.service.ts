import {LogService} from './log.service';
import {ArticleService} from './article.service';

export class FlowerService {

  name: string

  constructor(name: string = '梅花', articleService: ArticleService) {
    this.name = name
    articleService.print()
  }

  print() {
    console.log(this.name)
  }
}
