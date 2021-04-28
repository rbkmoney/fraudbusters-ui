import { Component } from '@angular/core';

@Component({
    templateUrl: 'default-references.component.html',
})
export class DefaultReferencesComponent {
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
