import { Component, OnInit } from '@angular/core';
import { TemplatesService } from '../templates.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { OperationType } from '../../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { Template } from '../model/template';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { ValidateResponseHandler } from '../../../shared/services/utils/validate-response-handler.service';

@Component({
    selector: 'app-create-template',
    templateUrl: './create-template.component.html',
    styleUrls: ['./create-template.component.scss'],
})
export class CreateTemplateComponent implements OnInit {
    private operationType: OperationType;
    template = new Template('', '');

    constructor(
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
        console.log(this.template);
        this.templateService.saveTemplate(this.operationType, this.template).subscribe(
            (id) => {
                console.log(id);
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    validate(): void {
        this.templateService.validateTemplate(this.operationType, [this.template]).subscribe(
            (response) => {
                this.snackBar.open(this.validateResponseHandler.checkValidateResponse(response), 'OK', {
                    duration: 3000,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }
}
