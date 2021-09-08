import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LAYOUT_GAP_M } from '../../../../tokens';

@Component({
    templateUrl: 'channels.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class ChannelsComponent {
    constructor(private router: Router, @Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
