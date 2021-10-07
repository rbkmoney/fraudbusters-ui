import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

import { NavItem } from '../../../model/nav-item';

@Component({
    selector: 'fb-menu-list-item',
    templateUrl: './menu-list-item.component.html',
    styleUrls: ['./menu-list-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuListItemComponent {
    @Input() item: NavItem;

    constructor(public router: Router, protected readonly keycloak: KeycloakService) {}

    display(): boolean {
        return this.item.roles.some((role) => this.keycloak.getUserRoles().includes(role));
    }
}
