import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, ActionType } from '../../../../../shared/components/references/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_S } from '../../../../../tokens';
import { FetchReferencesService } from '../../../services/fetch-references.service';
import { RemoveReferenceService } from '../../../services/remove-reference.service';

@Component({
    templateUrl: 'default-p2p-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchReferencesService, RemoveReferenceService],
})
export class DefaultP2pReferencesComponent {
    references$ = this.fetchReferencesService.searchResult$;
    inProgress$ = this.fetchReferencesService.inProgress$;
    hasMore$ = this.fetchReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchReferencesService: FetchReferencesService,
        private removeReferenceService: RemoveReferenceService,
        @Inject(LAYOUT_GAP_S) public layoutGapS: string
    ) {
        this.removeReferenceService.removed$.subscribe(() => {
            this.fetchReferencesService.search({ type: OperationType.PeerToPeer, isGlobal: false, isDefault: true });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createReference:
                this.router.navigate(['/reference/new/p2p']);
                break;
            case ActionType.editReference:
                this.router.navigate([`/reference/${action.reference.id}`], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.goToTemplate:
                this.router.navigate([`/template/${action.reference.templateId}`], {
                    fragment: OperationType.PeerToPeer,
                });
                break;
            case ActionType.removeReference:
                this.removeReferenceService.removeReference({
                    type: OperationType.PeerToPeer,
                    reference: action.reference,
                });
                break;
            case ActionType.sortReferences:
                this.fetchReferencesService.search({
                    type: OperationType.Payment,
                    sortOrder: action.sortDirection,
                    isGlobal: false,
                    isDefault: true,
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
        this.fetchReferencesService.search({
            type: OperationType.PeerToPeer,
            searchValue,
            isGlobal: false,
            isDefault: true,
        });
    }

    fetchMore() {
        this.fetchReferencesService.fetchMore();
    }
}
