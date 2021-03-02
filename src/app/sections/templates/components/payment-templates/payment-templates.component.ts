import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, ActionType } from '../../action';
import { FetchPaymentTemplatesService } from '../../services/fetch-payment-templates.service';
import { RemovePaymentTemplateService } from '../../services/remove-payment-template.service';

@Component({
    templateUrl: 'payment-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchPaymentTemplatesService, RemovePaymentTemplateService],
})
export class PaymentTemplatesComponent {
    templates$ = this.fetchTemplatesService.searchResult$;
    inProgress$ = this.fetchTemplatesService.inProgress$;
    hasMore$ = this.fetchTemplatesService.hasMore$;

    constructor(
        private router: Router,
        private fetchTemplatesService: FetchPaymentTemplatesService,
        private removeTemplateService: RemovePaymentTemplateService,
        private snackBar: MatSnackBar
    ) {
        this.removeTemplateService.removed$.subscribe((id) => {
            this.snackBar.open(`Template ${id} has been deleted`, 'OK', {
                duration: 1500,
            });
            this.fetchTemplatesService.search({});
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
                    templateID: action.templateID,
                });
                break;
            case ActionType.sortTemplates:
                this.fetchTemplatesService.search({ sortOrder: action.sortDirection });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: ActionType.createTemplate });
    }

    search(searchValue: string) {
        this.fetchTemplatesService.search({ searchValue });
    }

    fetchMore() {
        this.fetchTemplatesService.fetchMore();
    }
}
