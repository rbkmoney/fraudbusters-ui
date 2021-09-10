import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchReferencesService } from '../../services/fetch-references/fetch-references.service';
import { RemoveReferenceService } from '../../services/remove-reference/remove-reference.service';
import { Action, ActionType } from '../../model/action';

@Component({
    selector: 'fb-payment-references',
    templateUrl: 'payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchReferencesService, RemoveReferenceService],
})
export class PaymentReferencesComponent {
    displayedColumns = ['groupId', 'partyId', 'shopId', 'lastUpdateDate', 'delete'];

    references$ = this.fetchReferencesService.searchResult$;
    inProgress$ = this.fetchReferencesService.inProgress$;
    hasMore$ = this.fetchReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchReferencesService: FetchReferencesService,
        private removeReferenceService: RemoveReferenceService,
        private snackBar: MatSnackBar,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeReferenceService.removed$.subscribe((id) => {
            this.snackBar.open(`Reference ${id} has been deleted`, 'OK', {
                duration: 1500,
            });
            this.fetchReferencesService.search({ type: OperationType.Payment, isGlobal: false });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createReference:
                this.router.navigate(['/create-group-reference/payment'], { fragment: OperationType.Payment });
                break;
            case ActionType.removeReference:
                this.removeReferenceService.removeReference({
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

    fetchMore(sortFieldValue: string) {
        this.fetchReferencesService.fetchMore({ type: OperationType.Payment, sortFieldValue, isGlobal: false });
    }
}
