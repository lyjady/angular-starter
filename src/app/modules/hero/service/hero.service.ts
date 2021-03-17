import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../../../environments/environment'
import {HeroArg} from '../../../config/type';
import {Observable} from 'rxjs';
import {Hero} from '../../../config/type';
import {map} from 'rxjs/operators';
import {Base} from '../../../type/type';
import qs from 'qs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private prefixUrl = environment.baseUrl + '/hero'

  constructor(private httpClient: HttpClient) {
  }

  heroes(arg: HeroArg): Observable<Hero[]> {
    const params = new HttpParams({fromString: qs.stringify(arg)})
    return this.httpClient.get(this.prefixUrl + '/list', { params })
      .pipe(map((response: Base<any>) => response.data))
  }

  add(hero: Hero): Observable<any> {
    return this.httpClient.post(this.prefixUrl + '/add', hero)
      .pipe(map((response: Base<any>) => response.data))
  }

  hero(id: string): Observable<Hero> {
    return this.httpClient.get(`${this.prefixUrl}/detail/${id}`)
      .pipe(map((value:Base<any>) => value.data))
  }

  updateHero(hero: Hero, id: string): Observable<Base<any>> {
    return this.httpClient.patch<Base<any>>(`${this.prefixUrl}/modify/${id}`, hero)
  }

  remove(id: string): Observable<Base<any>> {
    return this.httpClient.delete<Base<any>>(`${this.prefixUrl}/remove/${id}`)
  }
}
