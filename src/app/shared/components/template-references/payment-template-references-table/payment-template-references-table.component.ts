import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { SortOrder } from '../../../constants/sort-order';
import { Action, ActionType } from '../action';
import { PaymentReference } from '../../../../api/fb-management/swagger-codegen/model/paymentReference';

@Component({
    templateUrl: 'payment-template-references-table.component.html',
    selector: 'fb-payment-template-references-table',
    styleUrls: ['payment-template-references-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentTemplateReferencesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    references: PaymentReference[];

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

    removeReference(reference: PaymentReference): void {
        this.action.emit({ type: ActionType.removeReference, reference });
    }

    editReference(reference: PaymentReference) {
        this.action.emit({ type: ActionType.editReference, reference });
    }

    goToTempalte(reference: PaymentReference) {
        this.action.emit({ type: ActionType.goToTemplate, reference });
    }
}
