import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { hasActiveFragments } from '../../shared/utils/has-active-fragments';
import { LAYOUT_GAP_S } from '../../tokens';

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
    ];

    constructor(private router: Router, @Inject(LAYOUT_GAP_S) public layoutGapS: string) {}

    hasActiveFragments(fragments: string[]): boolean {
        const ulrFragments = this.router.url.split('/');
        return hasActiveFragments(fragments, ulrFragments);
    }
}
