import { Component } from '@angular/core';

@Component({
    templateUrl: 'grey-list.component.html',
})
export class GreyListComponent {
    links = [
        {
            path: 'payments',
            name: 'Payments',
        },
        {
            path: 'p2p',
            name: 'Peer To Peer',
        },
    ];
}
