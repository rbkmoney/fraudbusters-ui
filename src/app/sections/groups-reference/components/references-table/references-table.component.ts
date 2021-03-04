import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { SortOrder } from '../../../../shared/constants/sort-order';
import { Action, ActionType } from '../../model/action';
import { P2pGroupReferenceModel } from '../../model/p2p-groups-reference';
import { PaymentGroupReferenceModel } from '../../model/payment-groups-reference';

@Component({
    templateUrl: 'references-table.component.html',
    selector: 'fb-references-table',
    styleUrls: ['references-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferencesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    references: PaymentGroupReferenceModel[] | P2pGroupReferenceModel[];

    @Input()
    displayedColumns: string[];

    sort(sort: Sort): void {
        switch (sort.direction) {
            case 'asc':
                this.action.emit({ type: ActionType.sortReferences, sortDirection: SortOrder.ASC });
                break;
            case 'desc':
                this.action.emit({ type: ActionType.sortReferences, sortDirection: SortOrder.DESC });
                break;
        }
    }

    removeReference(reference: PaymentGroupReferenceModel | P2pGroupReferenceModel): void {
        this.action.emit({ type: ActionType.removeReference, reference });
    }
}
