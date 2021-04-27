import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { Action, ActionType } from '../../model/action';
import { FetchReferencesService } from '../../services/fetch-references/fetch-references.service';
import { RemoveReferenceService } from '../../services/remove-reference/remove-reference.service';

@Component({
    selector: 'fb-p2p-references',
    templateUrl: 'p2p-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchReferencesService, RemoveReferenceService],
})
export class P2pReferencesComponent {
    displayedColumns = ['groupId', 'identityId', 'lastUpdateDate', 'delete'];

    references$ = this.fetchReferencesService.searchResult$;
    inProgress$ = this.fetchReferencesService.inProgress$;
    hasMore$ = this.fetchReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchReferencesService: FetchReferencesService,
        private removeReferenceService: RemoveReferenceService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeReferenceService.removed$.subscribe(() => {
            this.fetchReferencesService.search({ type: OperationType.PeerToPeer, isGlobal: false });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createReference:
                this.router.navigate(['/create-group-reference/p2p'], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.removeReference:
                this.removeReferenceService.removeReference({
                    type: OperationType.PeerToPeer,
                    reference: action.reference,
                });
                break;
            case ActionType.sortReferences:
                this.fetchReferencesService.search({
                    type: OperationType.PeerToPeer,
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
        this.fetchReferencesService.search({ type: OperationType.PeerToPeer, searchValue, isGlobal: false });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchReferencesService.fetchMore({ type: OperationType.PeerToPeer, sortFieldValue, isGlobal: false });
    }
}
