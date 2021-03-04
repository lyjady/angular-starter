import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private prefixUrl = environment.baseUrl + '/hero'

  constructor(private httpClient: HttpClient) {
    httpClient.get(this.prefixUrl +'/list').subscribe(response => console.log(response))
  }
}
