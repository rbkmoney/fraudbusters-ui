import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchChannelsService } from '../../services/fetch-channels.service';
import { NotificationsService } from '../../../../api/payments/notifications';
import { RemoveChannelsService } from '../../services/remove-channels.service';
import { Channel } from '../../../../api/fb-management/swagger-codegen/model/channel';

@Component({
    templateUrl: 'channels.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchChannelsService, RemoveChannelsService],
})
export class ChannelsComponent {
    channels$ = this.fetchChannelsService.searchResult$;
    inProgress$ = this.fetchChannelsService.inProgress$;
    hasMore$ = this.fetchChannelsService.hasMore$;

    constructor(
        private router: Router,
        private fetchChannelsService: FetchChannelsService,
        private removeChannelsService: RemoveChannelsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeChannelsService.removed$.subscribe(() => {
            this.fetchChannelsService.search({});
        });
    }

    addChannel() {
        this.router.navigate([`/channel/new`]);
    }

    search(searchValue: string) {
        return this.fetchChannelsService.search({ searchValue });
    }

    removeChannel(channel: Channel) {
        this.removeChannelsService.removeChannel(channel);
    }

    goToChannel(id: string) {
        this.router.navigate([`/channel/${id}`]);
    }

    fetchMore(sortFieldValue: string) {}
}
