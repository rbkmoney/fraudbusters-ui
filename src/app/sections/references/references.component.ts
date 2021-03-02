import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { hasActiveFragments } from '../../shared/utils/has-active-fragments';

@Component({
    templateUrl: 'references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesComponent {
    links = [
        {
            path: 'payments',
            name: 'Payments',
            otherActiveUrlFragments: [],
        },
        {
            path: 'p2p',
            name: 'Peer To Peer',
            otherActiveUrlFragments: [],
        },
        {
            path: 'default',
            name: 'Default References',
            otherActiveUrlFragments: ['default'],
        },
    ];

    constructor(private router: Router) {}

    hasActiveFragments(fragments: string[]): boolean {
        const ulrFragments = this.router.url.split('/');
        return hasActiveFragments(fragments, ulrFragments);
    }
}
