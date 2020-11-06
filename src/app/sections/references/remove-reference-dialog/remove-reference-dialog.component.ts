import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ReferencesService } from '../references.service';
import { OperationType } from '../../../shared/constants/operation-type';
import { Reference } from '../model/reference';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';

export interface DialogData {
    reference: Reference;
    operationType: OperationType;
}

@Component({
    selector: 'app-remove-reference-dialog',
    templateUrl: './remove-reference-dialog.component.html',
    styleUrls: ['./remove-reference-dialog.component.scss'],
})
export class RemoveReferenceDialogComponent {
    constructor(
        private referenceService: ReferencesService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveReferenceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.referenceService.deleteReference(this.data.operationType, this.data.reference).subscribe(
            (id) => {
                this.snackBar.open(`Delete succeeded: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
        this.dialogRef.close();
    }
}
