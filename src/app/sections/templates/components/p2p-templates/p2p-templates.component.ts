import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, Actions } from '../../action';
import { FetchTemplatesService } from '../../services/fetch-templates.service';
import { RemoveTemplateService } from '../../services/remove-template.service';

@Component({
    templateUrl: 'p2p-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchTemplatesService, RemoveTemplateService],
})
export class P2pTemplatesComponent {
    templates$ = this.fetchTemplatesService.searchResult$;
    inProgress$ = this.fetchTemplatesService.inProgress$;
    hasMore$ = this.fetchTemplatesService.hasMore$;

    constructor(
        private router: Router,
        private fetchTemplatesService: FetchTemplatesService,
        private removeTemplateService: RemoveTemplateService
    ) {
        this.removeTemplateService.removed$.subscribe(() => {
            this.fetchTemplatesService.search({ type: OperationType.PeerToPeer });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case Actions.createTemplate:
                this.router.navigate(['/template/new'], { fragment: OperationType.PeerToPeer });
                break;
            case Actions.editTemplate:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.PeerToPeer });
                break;
            case Actions.removeTemplate:
                this.removeTemplateService.removeTemplate({
                    type: OperationType.PeerToPeer,
                    templateID: action.templateID,
                });
                break;
            case Actions.sortTemplates:
                this.fetchTemplatesService.search({ type: OperationType.Payment, sortOrder: action.sortDirection });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: Actions.createTemplate });
    }

    search(searchValue: string) {
        this.fetchTemplatesService.search({ type: OperationType.PeerToPeer, searchValue });
    }

    fetchMore() {
        this.fetchTemplatesService.fetchMore();
    }
}
