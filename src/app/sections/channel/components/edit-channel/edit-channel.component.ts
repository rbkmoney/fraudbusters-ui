import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, pluck, shareReplay, switchMap } from 'rxjs/operators';

import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../../tokens';
import { ChannelService } from '../../services/channel.service';

@Component({
    templateUrl: './edit-channel.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditChannelComponent {
    channel$ = this.route.params.pipe(
        pluck('id'),
        switchMap((id) => {
            return this.channelService.getChannelById(id);
        }),
        pluck('result'),
        map((res) => res[0]),
        shareReplay(1)
    );

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private channelService: ChannelService,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    back() {
        this.router.navigate([`../notifications/channels`]);
    }
}
