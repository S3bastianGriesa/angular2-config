import {NgModule, Inject} from '@angular/core';

import {ConfigService} from './services/config.service';
import {ConfigHttpRepository} from './repositories/config.repository.http';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: 'IConfigService',
      useClass: ConfigService,
    },
    {
      provide: 'IConfigRepository',
      useClass: ConfigHttpRepository,
    },
  ],
  exports: [],
})
export class ConfigModule {
  constructor(@Inject('IConfigService') configService: ConfigService) {
    configService.reloadConfig();
  }
}
