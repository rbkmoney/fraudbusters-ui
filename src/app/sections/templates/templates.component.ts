import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../tokens';

@Component({
    templateUrl: 'templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
