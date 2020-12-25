import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { ConfigService } from './config.service';

const initializer = (configService: ConfigService, keycloak: KeycloakService) => () =>
    Promise.all([configService.load()]);

@NgModule({
    imports: [CommonModule],
    providers: [
        ConfigService,
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [ConfigService],
        },
    ],
})
export class CoreModule {}
