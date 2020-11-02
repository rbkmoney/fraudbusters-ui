import { Component } from '@angular/core';
import { NavItem } from './shared/model/nav-item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'fraudbusters-ui';

    navItems: NavItem[] = [
        {
            displayName: 'Templates',
            iconName: 'business',
            children: [
                {
                    displayName: 'List',
                    route: 'templates',
                },
                {
                    displayName: 'References',
                    route: 'references',
                },
            ],
        },
        {
            displayName: 'Groups',
            iconName: 'group_work',
            children: [
                {
                    displayName: 'List',
                    route: 'groups',
                },
                {
                    displayName: 'References',
                    route: 'groups-reference',
                },
            ],
        },
        {
            displayName: 'Lists',
            iconName: 'list_alt',
            children: [
                {
                    displayName: 'White',
                    route: 'lists/white',
                },
                {
                    displayName: 'Black',
                    route: 'lists/black',
                },
                {
                    displayName: 'Grey',
                    route: 'lists/grey',
                },
            ],
        },
    ];
}
