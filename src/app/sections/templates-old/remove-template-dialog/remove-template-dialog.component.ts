import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';
import { catchError, filter } from 'rxjs/operators';

import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { Template } from '../model/template';
import { TemplatesService } from '../templates.service';

export interface DialogData {
    template: Template;
    operationType: OperationType;
}

@Component({
    templateUrl: './remove-template-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
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
            .pipe(
                catchError((error: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(error, this.snackBar);
                    return of('error');
                }),
                filter((r) => r !== 'error')
            )
            .subscribe(() => {
                this.dialogRef.close();
            });
    }
}
