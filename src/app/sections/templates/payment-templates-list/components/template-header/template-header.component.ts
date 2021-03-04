import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-template-header',
    templateUrl: 'template-header.component.html',
    styleUrls: ['template-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplateHeaderComponent {
    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
