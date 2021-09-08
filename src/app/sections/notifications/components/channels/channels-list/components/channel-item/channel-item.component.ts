import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Channel } from '../../../../../../../api/fb-management/swagger-codegen/model/channel';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

@Component({
    selector: 'fb-channel-item',
    templateUrl: 'channel-item.component.html',
    styleUrls: ['channel-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelItemComponent {
    @Input()
    channel: Channel;

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
