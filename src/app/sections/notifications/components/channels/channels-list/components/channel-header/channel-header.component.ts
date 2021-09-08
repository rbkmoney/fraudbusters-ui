import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../../../tokens';

@Component({
    selector: 'fb-channel-header',
    templateUrl: 'channel-header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
