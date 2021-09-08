import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchChannelsService } from '../../services/fetch-channels.service';

@Component({
    templateUrl: 'channels.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchChannelsService],
})
export class ChannelsComponent {
    channels$ = this.fetchChannelsService.searchResult$;
    inProgress$ = this.fetchChannelsService.inProgress$;
    hasMore$ = this.fetchChannelsService.hasMore$;

    constructor(
        private router: Router,
        private fetchChannelsService: FetchChannelsService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    addChannel() {}

    search(searchValue: string) {
        return this.fetchChannelsService.search({ searchValue });
    }

    fetchMore() {}
}
