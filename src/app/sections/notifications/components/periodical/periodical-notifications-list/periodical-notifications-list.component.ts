import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Notification } from '../../../../../api/fb-management/swagger-codegen/model/notification';
import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-periodical-notifications-list',
    templateUrl: 'periodical-notifications-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicalNotificationsListComponent {
    @Input()
    notifications: Notification[];

    @Output()
    editItem = new EventEmitter<number>();

    @Output()
    sendToArchiveItem = new EventEmitter<Notification>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
