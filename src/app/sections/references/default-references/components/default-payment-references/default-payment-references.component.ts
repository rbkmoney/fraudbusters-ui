import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, ActionType } from '../../../../../shared/components/template-references/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_S } from '../../../../../tokens';
import { FetchDefaultPaymentReferencesService } from '../../services/fetch-default-payment-references.service';

@Component({
    templateUrl: 'default-payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchDefaultPaymentReferencesService],
})
export class DefaultPaymentReferencesComponent {
    references$ = this.fetchDefaultPaymentReferencesService.searchResult$;
    inProgress$ = this.fetchDefaultPaymentReferencesService.inProgress$;
    hasMore$ = this.fetchDefaultPaymentReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchDefaultPaymentReferencesService: FetchDefaultPaymentReferencesService,
        @Inject(LAYOUT_GAP_S) public layoutGapS: string
    ) {}

    action(action: Action) {
        switch (action.type) {
            case ActionType.createReference:
                this.router.navigate(['/reference/new/payment']);
                break;
            case ActionType.editReference:
                this.router.navigate([`/reference/${action.reference.id}`], { fragment: OperationType.Payment });
                break;
            case ActionType.goToTemplate:
                this.router.navigate([`/template/${action.reference.templateId}`], { fragment: OperationType.Payment });
                break;
            case ActionType.removeReference:
                // this.removeReferenceService.removeReference({
                //     type: OperationType.Payment,
                //     reference: action.reference,
                // });
                break;
            case ActionType.sortReferences:
                this.fetchDefaultPaymentReferencesService.search({
                    sortOrder: action.sortDirection,
                });
                break;
            default:
                console.error('Wrong reference action.');
        }
    }

    createReference() {
        this.action({ type: ActionType.createReference });
    }

    search(searchValue: string) {
        this.fetchDefaultPaymentReferencesService.search({
            searchValue,
        });
    }

    fetchMore() {
        this.fetchDefaultPaymentReferencesService.fetchMore();
    }
}
