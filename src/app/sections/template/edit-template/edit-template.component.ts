import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../../shared/services/utils/validate-response-handler.service';
import { Template } from '../model/template';
import { TemplatesService } from '../templates.service';

@Component({
    templateUrl: './edit-template.component.html',
    styleUrls: ['./edit-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditTemplateComponent implements OnInit {
    private operationType: OperationType;
    template: Template = { id: '', template: '' };

    constructor(
        private route: ActivatedRoute,
        private templateService: TemplatesService,
        private errorHandlerService: ErrorHandlerService,
        private validateResponseHandler: ValidateResponseHandler,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
        this.route.params.subscribe(({ id }) => {
            this.templateService.getTemplates(this.operationType, 1, id).subscribe(
                (templatesResponse) => {
                    this.template = templatesResponse.templateModels[0];
                },
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
        });
    }

    save(): void {
        this.templateService.saveTemplate(this.operationType, this.template).subscribe(
            (id) => {
                this.snackBar.open(`Saved success: ${id.id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    validate(): void {
        this.templateService.validateTemplate(this.operationType, this.template).subscribe(
            (response) => {
                this.snackBar.open(this.validateResponseHandler.checkValidateResponse(response), 'OK', {
                    duration: 3000,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }
}
