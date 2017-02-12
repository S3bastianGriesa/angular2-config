import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from 'environment';

import {IConfigRepository} from './config.repository.interface';
import {Config} from './../models';

@Injectable()
export class ConfigHttpRepository implements IConfigRepository {

 private http: Http;

 constructor(http: Http) {
   this.http = http;
 }

 public getConfig(): Observable<Config> {
   return this.http.get(`${environment.configpath}`)
    .map((response) => response.json());
 }

}
