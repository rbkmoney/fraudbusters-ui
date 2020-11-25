import { Component } from '@angular/core';
import { NavItem } from '../../model/nav-item';
import { MenuModel } from '../../model/menu-model';

@Component({
    selector: 'app-navigate-menu',
    templateUrl: './navigate-menu.component.html',
    styleUrls: ['./navigate-menu.component.scss'],
})
export class NavigateMenuComponent {
    navItems: NavItem[] = MenuModel.NAV_ITEMS;
}
