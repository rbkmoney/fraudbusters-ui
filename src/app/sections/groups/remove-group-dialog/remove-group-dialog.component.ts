import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { PaymentGroupsService } from '../../../api/payments/groups';

export interface DialogData {
    id: string;
    operationType: OperationType;
}

@Component({
    templateUrl: './remove-group-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveGroupDialogComponent {
    constructor(
        private groupsService: PaymentGroupsService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveGroupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.groupsService.delete(this.data.id).subscribe(
            (id) => {
                this.snackBar.open(`Delete group success: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
        this.dialogRef.close();
    }
}
