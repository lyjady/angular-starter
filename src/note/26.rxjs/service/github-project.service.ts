import { Injectable } from '@angular/core';
import {ajax, AjaxResponse} from 'rxjs/ajax';
import {map, pluck} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubProjectService {

  projects: string[]

  constructor() {}

  searchProject(keyword): Observable<AjaxResponse> {
   return ajax(`https://api.github.com/search/repositories?q=${keyword}&sort=stars`)
  }
}
