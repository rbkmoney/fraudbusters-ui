import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Action, ActionType } from '../../../../../shared/components/template-references/action';
import { OperationType } from '../../../../../shared/constants/operation-type';
import { LAYOUT_GAP_S } from '../../../../../tokens';
import { FetchDefaultP2pReferencesService } from '../../services/fetch-default-p2p-references.service';

@Component({
    templateUrl: 'default-p2p-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchDefaultP2pReferencesService],
})
export class DefaultP2pReferencesComponent {
    references$ = this.fetchDefaultP2pReferencesService.searchResult$;
    inProgress$ = this.fetchDefaultP2pReferencesService.inProgress$;
    hasMore$ = this.fetchDefaultP2pReferencesService.hasMore$;

    constructor(
        private router: Router,
        private fetchDefaultP2pReferencesService: FetchDefaultP2pReferencesService,
        @Inject(LAYOUT_GAP_S) public layoutGapS: string
    ) {}

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
                // this.removeReferenceService.removeReference({
                //     type: OperationType.PeerToPeer,
                //     reference: action.reference,
                // });
                break;
            case ActionType.sortReferences:
                this.fetchDefaultP2pReferencesService.search({
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
        this.fetchDefaultP2pReferencesService.search({
            searchValue,
        });
    }

    fetchMore() {
        this.fetchDefaultP2pReferencesService.fetchMore();
    }
}
