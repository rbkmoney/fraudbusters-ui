import { KeycloakService } from 'keycloak-angular';

export const initializer = (keycloakService: KeycloakService) => () =>
    Promise.all([
        keycloakService.init({
            config: '/assets/authConfig.json',
            initOptions: {
                onLoad: 'login-required',
                checkLoginIframe: false,
            },
            bearerExcludedUrls: ['/assets'],
        }),
    ]);
