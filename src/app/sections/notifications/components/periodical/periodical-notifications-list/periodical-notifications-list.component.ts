import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { LAYOUT_GAP_M } from '../../../../../tokens';
import { Notification } from '../../../../../api/fb-management/swagger-codegen/model/notification';

@Component({
    selector: 'fb-periodical-notifications-list',
    templateUrl: 'periodical-notifications-list.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PeriodicalNotificationsListComponent {
    @Input()
    notifications: Notification[];

    @Output()
    editItem = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
