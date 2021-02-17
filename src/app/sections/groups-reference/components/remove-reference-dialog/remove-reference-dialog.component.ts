import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OperationType } from '../../../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';
import { GroupReferenceModel } from '../../model/groups-reference';
import { GroupsReferenceService } from '../../services/groups-reference/groups-reference.service';

export interface DialogData {
    reference: GroupReferenceModel;
    operationType: OperationType;
}

@Component({
    templateUrl: './remove-reference-dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoveReferenceDialogComponent {
    constructor(
        private groupsReferenceService: GroupsReferenceService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveReferenceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    cancel(): void {
        this.dialogRef.close();
    }

    confirm(): void {
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
