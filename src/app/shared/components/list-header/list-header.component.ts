import { Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../tokens';

@Component({
    selector: 'fb-list-header',
    templateUrl: 'list-header.component.html',
    styleUrls: ['list-header.component.scss'],
})
export class ListHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
