import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AppConfig {
    fbManagementEndpoint: string;
}

@Injectable()
export class ConfigService {
    config: AppConfig;

    constructor(private http: HttpClient) {}

    load(): Promise<AppConfig> {
        return new Promise((resolve) => {
            this.http.get<AppConfig>('assets/appConfig.json').subscribe((config) => {
                this.config = config;
                resolve();
            });
        });
    }
}
