import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OperationType } from '../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { GroupsReferenceService } from '../groups-reference.service';
import { GroupReferenceModel } from '../model/groups-reference';

export interface DialogData {
    reference: GroupReferenceModel;
    operationType: OperationType;
}

@Component({
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
