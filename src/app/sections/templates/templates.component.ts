import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { hasActiveFragments } from 'src/app/shared/utils/has-active-fragments';

import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../tokens';
import { Router } from '@angular/router';

@Component({
    templateUrl: 'templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
    links = [
        {
            path: 'templates',
            name: 'Templates',
            otherActiveUrlFragments: [],
        },
        {
            path: 'references',
            name: 'References',
            otherActiveUrlFragments: [],
        },
        {
            path: 'default-references',
            name: 'Default references',
            otherActiveUrlFragments: [],
        },
    ];

    constructor(private router: Router, @Inject(LAYOUT_GAP_S) public layoutGapS: string) {}

    hasActiveFragments(fragments: string[]): boolean {
        const ulrFragments = this.router.url.split('/');
        return hasActiveFragments(fragments, ulrFragments);
    }
}
