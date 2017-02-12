import {Observable} from 'rxjs/Observable';

import {Config} from './../models';

export interface IConfigService {

  getConfig(): Config;

  reloadConfig(): void;

}
