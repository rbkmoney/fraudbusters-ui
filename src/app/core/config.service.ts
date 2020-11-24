import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakConfig } from 'keycloak-js';
import { KeycloakService } from 'keycloak-angular';

export interface AppConfig {
    fbManagementEndpoint: string;
    pageSize: number;
}

@Injectable()
export class ConfigService {
    config: AppConfig;

    constructor(private http: HttpClient, private keycloak: KeycloakService) {}

    load(): Promise<AppConfig> {
        return new Promise((resolve) => {
            this.http.get<AppConfig>('assets/appConfig.json').subscribe((config) => {
                this.config = config;
                resolve();
            });
        });
    }
}
