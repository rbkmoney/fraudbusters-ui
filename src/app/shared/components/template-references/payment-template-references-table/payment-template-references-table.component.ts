import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { PaymentReferenceModel } from '../../../../api/fb-management/swagger-codegen/model/paymentReferenceModel';
import { SortOrder } from '../../../constants/sort-order';
import { Action, ActionType } from '../action';

@Component({
    templateUrl: 'payment-template-references-table.component.html',
    selector: 'fb-payment-references-table',
    styleUrls: ['payment-template-references-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentTemplateReferencesTableComponent {
    @Output()
    action: EventEmitter<Action> = new EventEmitter();

    @Input()
    references: PaymentReferenceModel[];

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

    removeReference(reference: PaymentReferenceModel): void {
        this.action.emit({ type: ActionType.removeReference, reference });
    }

    editReference(reference: PaymentReferenceModel) {
        this.action.emit({ type: ActionType.editReference, reference });
    }

    goToTempalte(reference: PaymentReferenceModel) {
        this.action.emit({ type: ActionType.goToTemplate, reference });
    }
}
