import {Observable} from 'rxjs/Observable';

import {Config} from './../models';

export interface IConfigRepository {

 getConfig(): Observable<Config>;

}
