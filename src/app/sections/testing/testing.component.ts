import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_S } from '../../tokens';
import { hasActiveFragments } from 'src/app/shared/utils/has-active-fragments';

@Component({
    templateUrl: 'testing.component.html',
})
export class TestingComponent {
    links = [
        {
            path: 'data-sets',
            name: 'Data sets',
            otherActiveUrlFragments: [],
        },
        {
            path: 'emulation',
            name: 'Emulation',
            otherActiveUrlFragments: [],
        },
    ];

    constructor(private router: Router, @Inject(LAYOUT_GAP_S) public layoutGapS: string) {}

    hasActiveFragments(fragments: string[]): boolean {
        const ulrFragments = this.router.url.split('/');
        return hasActiveFragments(fragments, ulrFragments);
    }
}
