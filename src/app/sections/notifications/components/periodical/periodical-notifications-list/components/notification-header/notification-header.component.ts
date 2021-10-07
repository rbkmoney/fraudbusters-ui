import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-notification-header',
    templateUrl: 'notification-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
