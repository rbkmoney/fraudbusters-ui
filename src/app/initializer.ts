import { KeycloakService } from 'keycloak-angular';

import { ConfigService } from './config';

export const initializer = (configService: ConfigService, keycloakService: KeycloakService) => () =>
    Promise.all([
        configService.init({ configUrl: '/assets/appConfig.json' }),
        keycloakService.init({
            config: '/assets/authConfig.json',
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false,
            },
            bearerExcludedUrls: ['/assets'],
            enableBearerInterceptor: true,
        }),
    ]);
