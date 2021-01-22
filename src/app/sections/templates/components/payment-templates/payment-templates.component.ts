import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, Actions } from '../../action';
import { FetchTemplatesService } from '../../services/fetch-templates.service';
import { RemoveTemplateService } from '../../services/remove-template.service';

@Component({
    templateUrl: 'payment-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchTemplatesService, RemoveTemplateService],
})
export class PaymentTemplatesComponent {
    templates$ = this.fetchTemplatesService.templates$;

    constructor(
        private router: Router,
        private fetchTemplatesService: FetchTemplatesService,
        private removeTemplateService: RemoveTemplateService
    ) {
        this.fetchTemplatesService.fetch({ type: OperationType.Payment });
        this.removeTemplateService.removed$.subscribe(() => {
            this.fetchTemplatesService.fetch({ type: OperationType.Payment });
        });
    }

    action(action: Action) {
        switch (action.type) {
            case Actions.createTemplate:
                this.router.navigate(['/template/new'], { fragment: OperationType.Payment });
                break;
            case Actions.editTemplate:
                this.router.navigate([`/template/${action.templateID}`], { fragment: OperationType.Payment });
                break;
            case Actions.removeTemplate:
                this.removeTemplateService.removeTemplate({
                    type: OperationType.Payment,
                    templateID: action.templateID,
                });
                break;
            default:
                console.error('Wrong template action.');
        }
    }

    createTemplate() {
        this.action({ type: Actions.createTemplate });
    }
}
