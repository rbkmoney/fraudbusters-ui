import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-reference-header',
    templateUrl: 'reference-header.component.html',
    styleUrls: ['reference-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
