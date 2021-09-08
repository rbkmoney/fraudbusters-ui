import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';
import { Notification } from '../../../../../../../api/fb-management/swagger-codegen/model/notification';

@Component({
    selector: 'fb-notification-item',
    templateUrl: 'notification-item.component.html',
    styleUrls: ['notification-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationItemComponent {
    @Input()
    notification: Notification;

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
