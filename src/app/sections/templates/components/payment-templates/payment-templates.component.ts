import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { Action, Actions } from '../../action';
import { FetchTemplatesService } from '../../services/fetch-templates.service';

@Component({
    templateUrl: 'payment-templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchTemplatesService],
})
export class PaymentTemplatesComponent implements OnInit {
    templates$ = this.fetchTemplatesService.templates$;

    constructor(private router: Router, private fetchTemplatesService: FetchTemplatesService) {}

    ngOnInit() {
        this.fetchTemplatesService.fetch({ type: OperationType.Payment });
    }

    action(action: Action) {
        switch (action.type) {
            case Actions.createTemplate:
                this.router.navigate(['/template/new']);
                break;
            case Actions.editTemplate:
                this.router.navigate([`/template/${action.templateID}`]);
                break;
            default:
                console.error('Wrong template action.');
        }
    }
}
