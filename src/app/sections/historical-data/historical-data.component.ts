import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { hasActiveFragments } from 'src/app/shared/utils/has-active-fragments';

import { LAYOUT_GAP_S } from '../../tokens';

@Component({
    templateUrl: 'historical-data.component.html',
})
export class HistoricalDataComponent {
    links = [
        {
            path: 'payments',
            name: 'Payments',
            otherActiveUrlFragments: [],
        },
        {
            path: 'refunds',
            name: 'Refunds',
            otherActiveUrlFragments: [],
        },
        {
            path: 'fraud-results',
            name: 'Fraud results',
            otherActiveUrlFragments: [],
        },
        {
            path: 'chargebacks',
            name: 'Chargebacks',
            otherActiveUrlFragments: [],
        },
    ];

    constructor(private router: Router, @Inject(LAYOUT_GAP_S) public layoutGapS: string) {}

    hasActiveFragments(fragments: string[]): boolean {
        const ulrFragments = this.router.url.split('/');
        return hasActiveFragments(fragments, ulrFragments);
    }
}
