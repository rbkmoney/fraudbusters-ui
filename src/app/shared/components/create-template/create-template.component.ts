import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { Template } from '../../../sections/template/types/template';
import { LAYOUT_GAP_L, LAYOUT_GAP_M } from '../../../tokens';
import { OperationType } from '../../constants/operation-type';
import { ErrorHandlerService } from '../../services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../services/utils/validate-response-handler.service';
import { TemplateService } from './services/template/template.service';

@Component({
    selector: 'fb-create-template',
    templateUrl: './create-template.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TemplateService],
})
export class CreateTemplateComponent implements OnInit {
    @Input() operationType: OperationType;

    @Input() template: Template;

    form = this.templateService.form;

    saved$ = this.templateService.saved$;
    validated$ = this.templateService.validated$;
    inProgress$ = this.templateService.inProgress$;

    constructor(
        private router: Router,
        private templateService: TemplateService,
        private errorHandlerService: ErrorHandlerService,
        private validateResponseHandler: ValidateResponseHandler,
        private snackBar: MatSnackBar,
        @Inject(LAYOUT_GAP_L) public layoutGapL: string,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    ngOnInit() {
        if (this.template) {
            this.form.setValue({ id: this.template.id, template: this.template.template });
            this.form.get('id').disable();
        }
        this.saved$.subscribe(
            (template) => {
                if (this.template) {
                    this.snackBar.open(`Saved success: ${template.id}`, 'OK', {
                        duration: 3000,
                    });
                } else {
                    this.navigateToEdit(template.id);
                }
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
        this.validated$.subscribe(
            (response) => {
                this.snackBar.open(this.validateResponseHandler.checkValidateResponse(response), 'OK', {
                    duration: 3000,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    saveTemplate() {
        this.templateService.saveTemplate({
            type: this.operationType,
            template: { id: this.form.getRawValue().id, template: this.form.getRawValue().template },
        });
    }

    validateTemplate() {
        this.templateService.validateTemplate({
            type: this.operationType,
            template: { id: this.form.getRawValue().id, template: this.form.getRawValue().template },
        });
    }

    navigateToEdit(id) {
        this.router.navigate([`../template/${id}`], { fragment: this.operationType.toString() });
    }

    back() {
        this.router.navigate([`../templates`]);
    }
}