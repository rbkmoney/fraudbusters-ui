import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: './groups-reference.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsReferenceComponent {
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
