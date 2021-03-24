import { ChangeDetectionStrategy, Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import { LAYOUT_GAP_M } from '../../../../../tokens';

@Component({
    selector: 'fb-actions',
    templateUrl: 'actions.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsComponent {
    @Input()
    id: string;

    @Output()
    goToTemplate = new EventEmitter<string>();

    @Output()
    deleteItem = new EventEmitter<string>();

    constructor(@Inject(LAYOUT_GAP_M) public layoutGapM: string) {}
}
