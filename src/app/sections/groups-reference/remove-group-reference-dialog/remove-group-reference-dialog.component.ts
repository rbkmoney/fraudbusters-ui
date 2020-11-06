import { Component, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupsReferenceService } from '../groups-reference.service';
import { OperationType } from '../../../shared/constants/operation-type';
import { GroupReferenceModel } from '../model/groups-reference';

export interface DialogData {
    reference: GroupReferenceModel;
    operationType: OperationType;
}

@Component({
    selector: 'app-remove-group-reference-dialog',
    templateUrl: './remove-group-reference-dialog.component.html',
    styleUrls: ['./remove-group-reference-dialog.component.scss'],
})
export class RemoveGroupReferenceDialogComponent {
    constructor(
        private groupsReferenceService: GroupsReferenceService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveGroupReferenceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.groupsReferenceService.deleteGroupsReference(this.data.operationType, this.data.reference).subscribe(
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
