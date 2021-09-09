import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { Notification } from '../../../../../../../api/fb-management/swagger-codegen/model/notification';
import { LAYOUT_GAP_M, LAYOUT_GAP_S } from '../../../../../../../tokens';

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
    editItem = new EventEmitter<number>();

    @Output()
    deleteItem = new EventEmitter<number>();

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
