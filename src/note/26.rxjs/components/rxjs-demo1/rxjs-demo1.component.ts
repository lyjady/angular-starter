import {Component, OnInit} from '@angular/core';
import {interval, Observable, of, range, zip, concat, merge} from 'rxjs';
import {filter, map, mapTo, reduce, scan, subscribeOn, take} from 'rxjs/operators';
import {GithubProjectService} from '../../service/github-project.service';

@Component({
  selector: 'app-rxjs-demo1',
  templateUrl: './rxjs-demo1.component.html',
  styleUrls: ['./rxjs-demo1.component.scss']
})
export class RxjsDemo1Component implements OnInit {

  nums: number[] = [1, 2, 3, 4, 5, 6, 9];

  constructor(private githubProjectService: GithubProjectService) {}

  ngOnInit(): void {
  }

  basicUse() {
    // 使用subscriber发射一个或者多个数据
    const observable = new Observable(subscriber => {
      this.nums.forEach(item => subscriber.next(item));
    });
    // 只有调用了subscribe才会执行管道里面的操作
    observable.pipe(
      filter(value => value > 5),
      map((value: number) => value + 1),
      scan((current, next) => current + next, 0)
    ).subscribe(value => console.log(value));
  }

  observable() {
    // Observable负责向管道里面推送数据
    // Observer用于接收管道里面的数据, 使用一系列的函数对管道里面的数据进行处理, Observer就是observable.subscribe的回调函数
    // observable.subscribe()回调函数的完整写法是observable.subscribe(next(), error(), complete())
    // next处理正常完成, error处理异常, complete是在发射数据时调用subscriber.complete()之后会执行, 并且会停止数据的发射
    const observable = new Observable(subscriber => {
      this.nums.forEach((item, index) => {
        if (index <= 5) {
          subscriber.next(item);
        } else {
          subscriber.complete();
        }
      });
    });
    observable.pipe(
      filter(value => value > 2),
      map((value: number) => {
        // throw new Error('error');
        return value + 1;

      }),
    ).subscribe(
      value => {
        console.log(value);
      },
      error => {
        console.log(error);
      },
      () => {
        console.log('complete');
      });
  }

  cancel() {
    // 取消对Observable的订阅
    let observable1 = interval(300);
    let subscription1 = observable1.subscribe(value => console.log(value));
    // 取消订阅
    setTimeout(() => subscription1.unsubscribe(), 1000)
  }

  cancelFather() {
    // 将observable.subscribe()返回的subscription加到另一个subscription中, 这样一旦停止了父亲subscription, 儿子subscription也会停止
    let observable1 = interval(300);
    let observable2 = interval(500);
    let subscription1 = observable1.subscribe(value => console.log('father' + value));
    let subscription2 = observable2.subscribe(value => console.log('son' + value));
    subscription1.add(subscription2)
    // 停止父亲儿子也会停止
    // setTimeout(() => subscription1.unsubscribe(), 1000)
    // 只会停止父亲不会影响儿子
    setTimeout(() => subscription2.unsubscribe(), 1000)
  }

  zip() {
    // 没有匹配的位置就不会被subscribe
    const number$ = of(1, 2, 3)
    const string$ = of('one', 'two')
    const boolean$ = of(true, false, true)
    zip(number$, string$, boolean$).subscribe(res => console.log(res))
  }

  concat() {
    // 按照concat顺序依次在observable.subscribe()发送
    const timer$ = interval(1000).pipe(take(4));
    const sequence$ = range(1, 10);
    const result = concat(timer$, sequence$);
    result.subscribe(x => console.log(x));
  }

  merge() {
    // 按照发送顺序交替在observable.subscribe()发送
    // clicks$快于timer$, 所以在observable.subscribe()里面会优先发送clicks$然后在发送timer$, 依次循环
    const clicks$ = interval(800).pipe(mapTo('a'));
    const timer$ = interval(1000);
    const clicksOrTimer = merge(clicks$, timer$);
    clicksOrTimer.subscribe(x => console.log(x));
  }
}
