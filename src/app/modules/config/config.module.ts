import {NgModule, Inject} from '@angular/core';

import {ConfigComponent} from './config.component';
import {ConfigService} from './services/config.service';
import {ConfigHttpRepository} from './repositories/config.repository.http';

@NgModule({
  declarations: [
    ConfigComponent,
  ],
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
  exports: [
    ConfigComponent,
    ],
})
export class ConfigModule {
  constructor(@Inject('IConfigService') configService: ConfigService) {
    configService.reloadConfig();
  }
}
