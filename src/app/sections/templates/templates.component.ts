import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    templateUrl: 'templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
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
