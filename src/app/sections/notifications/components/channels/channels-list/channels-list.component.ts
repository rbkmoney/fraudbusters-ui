import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Channel } from '../../../../../api/fb-management/swagger-codegen/model/channel';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-channels-list',
    templateUrl: 'channels-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChannelsListComponent {
    @Input()
    channels: Channel[];

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
