import { BrowserModule } from '@angular/platform-browser';
import {Inject, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { InjectComponent } from './components/inject/inject.component';
import { AnimalInjectComponent } from './components/animal-inject/animal-inject.component';
import {OtherModule} from './modules/other/other.module';
import {LogService} from './services/log.service';
import { LogComponent } from './components/log/log.component';
import {userWrapper} from './injectable/wrapper-user';
import {userList} from './services/user.service';
import {FlowerService} from './services/flower.service';
import {ArticleService} from './services/article.service';


@NgModule({
  declarations: [
    AppComponent,
    InjectComponent,
    AnimalInjectComponent,
    LogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // OtherModule
  ],
  providers: [
    // 如果provide与后面你的use*一致可以简写成{LogService}
    // provide表示获取的令牌, use*表示对象实际的内容可以是useClass, useValue, useFactory(自定义创建对象)
    // 如果两个provide相同那么后面的provide将覆盖前面的provide
    // useClass不支持使用接口、数组等可以使用InjectionToken进行包装
    // 使用useClass、useValue, Angular将会调用默认的构造方法来创建对象并返回, 如果想要自定义对象的创建可以使用useFactory
    {provide: LogService, useClass: LogService},
    {provide: 'LogService', useValue: 'LogService'},
    {provide: 'LogService', useValue: 'LogService22'},
    {provide: userWrapper, useValue: userList},
    {
      provide: 'flower1',
      // 如果在useFactory中药注入其他服务需要先声明
      useFactory: (articleService: ArticleService) => {
        return new FlowerService('菊花', articleService)
      },
      deps: [ArticleService]
    },
    {
      provide: 'flower2',
      useFactory: (articleService: ArticleService) => {
        return new FlowerService('兰花', articleService)
      },
      deps: [ArticleService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
