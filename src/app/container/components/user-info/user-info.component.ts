import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { LAYOUT_GAP_S } from '../../../tokens';

@Component({
    selector: 'fb-user-info',
    templateUrl: 'user-info.component.html',
    styleUrls: ['user-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserInfoComponent {
    @Input() username: string;
    @Input() roles: string[];

    constructor(@Inject(LAYOUT_GAP_S) public layoutGapS: string) {}
}
