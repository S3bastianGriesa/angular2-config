import {Injectable, Inject} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {IConfigService} from './config.service.interface';
import {IConfigRepository} from './../repositories';
import {Config} from './../models';

@Injectable()
export class ConfigService implements IConfigService {

  private configRepository: IConfigRepository;
  private config: Config;

  constructor(@Inject('IConfigRepository') configRepository: IConfigRepository) {
    this.configRepository = configRepository;
  }

  public getConfig(): Config {
    return this.config || <Config> {};
  }

  public reloadConfig(): void {
    this.configRepository
      .getConfig()
      .subscribe(config => this.config = config);
  }

}
