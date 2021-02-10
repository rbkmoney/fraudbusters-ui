import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { TemplateModel } from '../../../api/fb-management/swagger-codegen/model/templateModel';
import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../../shared/services/utils/validate-response-handler.service';
import { TemplatesService } from '../templates.service';

@Component({
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTemplateComponent implements OnInit {
    private operationType: OperationType;
    template: TemplateModel = { id: '', template: '' };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private templateService: TemplatesService,
        private errorHandlerService: ErrorHandlerService,
        private validateResponseHandler: ValidateResponseHandler,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.getOperationTypeFromFragment();
    }

    getOperationTypeFromFragment(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
    }

    save(): void {
        this.templateService.saveTemplate(this.operationType, this.template).subscribe(
            (template) => {
                this.navigateToEdit(template.id);
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

    navigateToEdit(id): void {
        this.router.navigate([`../template/${id}`], { fragment: this.operationType.toString() });
    }
}
