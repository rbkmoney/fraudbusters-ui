import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, ActionType } from '../../action';
import { FetchTemplatesService } from '../../services/fetch-templates.service';
import { RemoveTemplateService } from '../../services/remove-template.service';

@Component({
    templateUrl: 'payment-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchTemplatesService, RemoveTemplateService],
})
export class PaymentTemplatesComponent {
    templates$ = this.fetchTemplatesService.searchResult$;
    inProgress$ = this.fetchTemplatesService.inProgress$;
    hasMore$ = this.fetchTemplatesService.hasMore$;

    constructor(
        private router: Router,
        private fetchTemplatesService: FetchTemplatesService,
        private removeTemplateService: RemoveTemplateService
    ) {
        this.removeTemplateService.removed$.subscribe(() => {
            this.fetchTemplatesService.search({ type: OperationType.Payment });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createTemplate:
                this.router.navigate(['/template/new'], { fragment: OperationType.Payment });
                break;
            case ActionType.editTemplate:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.Payment });
                break;
            case ActionType.removeTemplate:
                this.removeTemplateService.removeTemplate({
                    type: OperationType.Payment,
                    templateID: action.templateID,
                });
                break;
            case ActionType.sortTemplates:
                this.fetchTemplatesService.search({ type: OperationType.Payment, sortOrder: action.sortDirection });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: ActionType.createTemplate });
    }

    search(searchValue: string) {
        this.fetchTemplatesService.search({ type: OperationType.Payment, searchValue });
    }

    fetchMore() {
        this.fetchTemplatesService.fetchMore();
    }
}
