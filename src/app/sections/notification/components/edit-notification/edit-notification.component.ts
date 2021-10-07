import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, shareReplay, switchMap } from 'rxjs/operators';

import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../../tokens';
import { NotificationService } from '../../services/notification.service';

@Component({
    templateUrl: './edit-notification.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditNotificationComponent {
    notification$ = this.route.params.pipe(
        pluck('id'),
        switchMap((id) => {
            return this.notificationService.getNotificationById(id);
        }),
        shareReplay(1)
    );

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private notificationService: NotificationService,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    back() {
        this.router.navigate([`../notifications/periodical`]);
    }
}
