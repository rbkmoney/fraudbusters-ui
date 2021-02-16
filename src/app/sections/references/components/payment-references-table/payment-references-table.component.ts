import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { P2pReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/p2pReferenceModel';
import { PaymentReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { SortOrder } from '../../../../shared/constants/sort-order';
import { Action, ActionType } from '../../action';

@Component({
    templateUrl: 'payment-references-table.component.html',
    selector: 'fb-payment-references-table',
    styleUrls: ['payment-references-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentReferencesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    references: P2pReferenceModel[] | PaymentReferenceModel[];

    displayedColumns: string[] = ['id', 'templateID', 'partyID', 'shopID', 'updatedAt', 'actions'];

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

    removeReference(reference: P2pReferenceModel | PaymentReferenceModel): void {
        this.action.emit({ type: ActionType.removeReference, reference });
    }

    editReference(reference: P2pReferenceModel | PaymentReferenceModel) {
        this.action.emit({ type: ActionType.editReference, reference });
    }

    goToTempalte(reference: P2pReferenceModel | PaymentReferenceModel) {
        this.action.emit({ type: ActionType.goToTemplate, reference });
    }
}
