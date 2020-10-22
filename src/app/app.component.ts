import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'fraudbusters-ui';
    menuItems: { name: string; route: string; icon: string }[] = [
        { name: 'Templates', route: '/templates', icon: 'business' },
        { name: 'References', route: '/references', icon: 'share' },
        { name: 'Groups', route: '/groups', icon: 'group_work' },
        { name: 'Groups reference', route: '/groups-reference', icon: 'leak_remove' },
    ];
}
