import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TemplatesService } from '../templates.service';
import { OperationType } from '../../../shared/constants/operation-type';
import { Template } from '../model/template';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';

export interface DialogData {
    template: Template;
    operationType: OperationType;
}

@Component({
    selector: 'app-remove-template-dialog',
    templateUrl: './remove-template-dialog.component.html',
    styleUrls: ['./remove-template-dialog.component.scss'],
})
export class RemoveTemplateDialogComponent {
    constructor(
        private templateService: TemplatesService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveTemplateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.templateService
            .deleteTemplate((OperationType as any)[this.data.operationType], this.data.template.id)
            .subscribe(
                (id) => console.log(id),
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
        this.dialogRef.close();
    }
}
