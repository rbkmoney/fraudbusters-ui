import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';

@Component({
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTemplateComponent {
    operationType$ = this.route.fragment;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    back() {
        this.router.navigate([`../templates`]);
    }
}
