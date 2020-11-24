import { Component, HostBinding, Input } from '@angular/core';
import { NavItem } from '../../model/nav-item';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
    selector: 'app-menu-list-item',
    templateUrl: './menu-list-item.component.html',
    styleUrls: ['./menu-list-item.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4,0.0,0.2,1)')),
        ]),
    ],
})
export class MenuListItemComponent {
    expanded = false;
    @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
    @Input() item: NavItem;
    @Input() depth = 0;

    constructor(public router: Router, protected readonly keycloak: KeycloakService) {}

    display(): boolean {
        return this.item.roles.every((role) => this.keycloak.getUserRoles().includes(role));
    }

    onItemSelected(item: NavItem): void {
        if (!item.children || !item.children.length) {
            this.router.navigate([item.route]);
        }
        if (item.children && item.children.length) {
            this.expanded = !this.expanded;
        }
    }

    isActiveRoute(): boolean {
        return this.item.route ? this.router.isActive(this.item.route, true) : false;
    }
}
