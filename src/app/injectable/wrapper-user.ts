import {InjectionToken} from '@angular/core';
import {User} from '../services/user.service'

export const userWrapper: InjectionToken<User[]> = new InjectionToken<User[]>('User Wrapper')
