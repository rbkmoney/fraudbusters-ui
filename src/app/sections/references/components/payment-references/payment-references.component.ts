import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, ActionType } from '../../action';
import { FetchReferencesService } from '../../services/fetch-references.service';
import { RemoveReferenceService } from '../../services/remove-reference.service';

@Component({
    templateUrl: 'payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchReferencesService, RemoveReferenceService],
})
export class PaymentReferencesComponent {
    references$ = this.fetchReferencesService.searchResult$;
    inProgress$ = this.fetchReferencesService.inProgress$;
    hasMore$ = this.fetchReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchReferencesService: FetchReferencesService,
        private removeReferenceService: RemoveReferenceService
    ) {
        this.removeReferenceService.removed$.subscribe(() => {
            this.fetchReferencesService.search({ type: OperationType.Payment, isGlobal: false });
        });
    }

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
                this.removeReferenceService.removeReference({
                    type: OperationType.Payment,
                    reference: action.reference,
                });
                break;
            case ActionType.sortReferences:
                this.fetchReferencesService.search({
                    type: OperationType.Payment,
                    sortOrder: action.sortDirection,
                    isGlobal: false,
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
        this.fetchReferencesService.search({ type: OperationType.Payment, searchValue, isGlobal: false });
    }

    fetchMore() {
        this.fetchReferencesService.fetchMore();
    }
}
