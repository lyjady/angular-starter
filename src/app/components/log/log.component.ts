import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {LogService} from '../../services/log.service';
import {userWrapper} from '../../injectable/wrapper-user';
import {User} from '../../services/user.service';
import {FlowerService} from '../../services/flower.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {

  // @Inject('LogService')指定provide获取对象
  constructor(readonly logService: LogService,
              @Inject('LogService') logServiceStr: string,
              @Inject(userWrapper) userWrapper: InjectionToken<User[]>,
              @Inject('flower1') flower1: FlowerService,
              @Inject('flower2') flower2: FlowerService) {
    logService.log()
    // console.log(logServiceStr);
    // console.log(userWrapper);
    console.log(flower1.name);
    console.log(flower2.name);
  }

  ngOnInit(): void {
  }

}
