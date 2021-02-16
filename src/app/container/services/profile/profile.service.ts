import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Injectable()
export class ProfileService {
    constructor(private keycloakService: KeycloakService) {}

    getUsername(): string {
        return this.keycloakService.getUsername();
    }

    getUserRoles(): string[] {
        return this.keycloakService.getUserRoles();
    }

    logout() {
        this.keycloakService.logout();
    }
}
