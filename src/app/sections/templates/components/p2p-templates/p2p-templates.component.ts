import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { Action, ActionType } from '../../action';
import { FetchP2pTemplatesService } from '../../services/fetch-p2p-templates.service';
import { RemoveP2pTemplateService } from '../../services/remove-p2p-template.service';

@Component({
    templateUrl: 'p2p-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchP2pTemplatesService, RemoveP2pTemplateService],
})
export class P2pTemplatesComponent {
    templates$ = this.fetchP2pTemplatesService.searchResult$;
    inProgress$ = this.fetchP2pTemplatesService.inProgress$;
    hasMore$ = this.fetchP2pTemplatesService.hasMore$;

    constructor(
        private router: Router,
        private fetchP2pTemplatesService: FetchP2pTemplatesService,
        private removeP2pTemplateService: RemoveP2pTemplateService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeP2pTemplateService.removed$.subscribe(() => {
            this.fetchP2pTemplatesService.search({});
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createTemplate:
                this.router.navigate(['/template/new'], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.editTemplate:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.PeerToPeer });
                break;
            case ActionType.removeTemplate:
                this.removeP2pTemplateService.removeTemplate({
                    templateID: action.templateID,
                });
                break;
            case ActionType.sortTemplates:
                this.fetchP2pTemplatesService.search({ sortOrder: action.sortDirection });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: ActionType.createTemplate });
    }

    search(searchValue: string) {
        this.fetchP2pTemplatesService.search({ searchValue });
    }

    fetchMore() {
        this.fetchP2pTemplatesService.fetchMore();
    }
}
