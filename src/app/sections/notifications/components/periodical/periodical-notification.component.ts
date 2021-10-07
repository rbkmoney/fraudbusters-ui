import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchNotificationsService } from '../../services/fetch-notifications.service';
import { ArchiveNotificationService } from '../../services/archive-notification.service';
import { Notification } from '../../../../api/fb-management/swagger-codegen/model/notification';

@Component({
    templateUrl: 'periodical-notification.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchNotificationsService, ArchiveNotificationService],
})
export class PeriodicalNotificationComponent {
    notifications$ = this.fetchNotificationsService.searchResult$;
    inProgress$ = this.fetchNotificationsService.inProgress$;
    hasMore$ = this.fetchNotificationsService.hasMore$;

    constructor(
        private router: Router,
        private fetchNotificationsService: FetchNotificationsService,
        private archiveNotificationService: ArchiveNotificationService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.archiveNotificationService.archive$.subscribe(() => {
            this.fetchNotificationsService.search({});
        });
    }

    addNotification() {
        this.router.navigate([`/notification/new`]);
    }

    search(searchValue: string) {
        return this.fetchNotificationsService.search({ searchValue });
    }

    editNotification(id: number) {
        this.router.navigate([`/notification/${id}`]);
    }

    sendToArchiveNotification(notification: Notification) {
        this.archiveNotificationService.archiveNotification(notification);
    }

    fetchMore(id: number) {
        return this.fetchNotificationsService.fetchMore({ lastId: String(id) });
    }
}
