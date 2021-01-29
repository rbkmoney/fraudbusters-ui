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
    references$ = this.fetchTemplatesService.searchResult$;
    inProgress$ = this.fetchTemplatesService.inProgress$;
    hasMore$ = this.fetchTemplatesService.hasMore$;

    constructor(
        private router: Router,
        private fetchTemplatesService: FetchReferencesService,
        private removeTemplateService: RemoveReferenceService
    ) {
        this.removeTemplateService.removed$.subscribe(() => {
            this.fetchTemplatesService.search({ type: OperationType.Payment, isGlobal: false });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case ActionType.createReference:
                this.router.navigate(['/reference/new'], { fragment: OperationType.Payment });
                break;
            case ActionType.editReference:
                this.router.navigate([`/reference/${action.reference}`], { fragment: OperationType.Payment });
                break;
            case ActionType.goToTemplate:
                this.router.navigate([`/template/${action.reference.templateId}`], { fragment: OperationType.Payment });
                break;
            case ActionType.removeReference:
                this.removeTemplateService.removeTemplate({
                    type: OperationType.Payment,
                    reference: action.reference,
                });
                break;
            case ActionType.sortReference:
                this.fetchTemplatesService.search({
                    type: OperationType.Payment,
                    sortOrder: action.sortDirection,
                    isGlobal: false,
                });
                break;
            default:
                console.error('Wrong reference action.');
        }
    }

    createTemplate() {
        this.action({ type: ActionType.createReference });
    }

    search(searchValue: string) {
        this.fetchTemplatesService.search({ type: OperationType.Payment, searchValue, isGlobal: false });
    }

    fetchMore() {
        this.fetchTemplatesService.fetchMore();
    }
}
