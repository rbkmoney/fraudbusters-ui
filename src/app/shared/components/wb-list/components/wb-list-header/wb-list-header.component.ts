import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-wb-list-header',
    templateUrl: 'wb-list-header.component.html',
    styleUrls: ['wb-list-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WbListHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
