import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: 'references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent {
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
