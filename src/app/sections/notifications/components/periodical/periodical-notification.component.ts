import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchNotificationsService } from '../../services/fetch-notifications.service';

@Component({
    templateUrl: 'periodical-notification.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchNotificationsService],
})
export class PeriodicalNotificationComponent {
    notifications$ = this.fetchNotificationsService.searchResult$;
    inProgress$ = this.fetchNotificationsService.inProgress$;
    hasMore$ = this.fetchNotificationsService.hasMore$;

    constructor(
        private router: Router,
        private fetchNotificationsService: FetchNotificationsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    addNotification() {}

    search(searchValue: string) {
        return this.fetchNotificationsService.search({ searchValue });
    }

    fetchMore() {}
}
