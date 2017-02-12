import {Component, Inject} from '@angular/core';

import {IConfigService} from 'app/modules/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  private configService: IConfigService;

  constructor(@Inject('IConfigService') configService: IConfigService) {
    this.configService = configService;
  }

  public getDeploymentType(): string {
    return this.configService.getConfig().deploymentType;
  }

  public getEndpoint(): string {
    return this.configService.getConfig().endpoint;
  }

}
