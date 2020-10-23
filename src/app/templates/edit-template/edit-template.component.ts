import { Component, OnInit } from '@angular/core';
import { OperationType } from '../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { TemplatesService } from '../templates.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Template } from '../model/template';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';

@Component({
    selector: 'app-edit-template',
    templateUrl: './edit-template.component.html',
    styleUrls: ['./edit-template.component.scss'],
})
export class EditTemplateComponent implements OnInit {
    private operationType: OperationType;
    template: Template;
    templateId;

    constructor(
        private route: ActivatedRoute,
        private templateService: TemplatesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
        this.templateService.getTemplates(this.operationType, 1, this.templateId).subscribe(
            (templatesResponse) => {
                this.template = templatesResponse.templateModels[0];
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
        this.route.params.subscribe(({ id }) => {
            this.templateId = id;
        });
    }

    save(): void {
        console.log(this.template);
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
        this.templateService.validateTemplate(this.operationType, [this.template]).subscribe(
            (response) => {
                this.snackBar.open(
                    response.validateResults.length > 0
                        ? `${response.validateResults[0].id}: ${response.validateResults[0].errors}`
                        : 'All rule success',
                    'OK',
                    {
                        duration: 120500,
                    }
                );
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }
}
