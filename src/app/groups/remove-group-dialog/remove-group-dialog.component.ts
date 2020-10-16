import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OperationType } from '../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupsService } from '../groups.service';

export interface DialogData {
    id: string;
    operationType: OperationType;
}

@Component({
    selector: 'app-remove-group-dialog',
    templateUrl: './remove-group-dialog.component.html',
    styleUrls: ['./remove-group-dialog.component.scss'],
})
export class RemoveGroupDialogComponent {
    constructor(
        private groupsService: GroupsService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveGroupDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.groupsService.deleteGroup((OperationType as any)[this.data.operationType], this.data.id).subscribe(
            (id) => console.log(id),
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
        this.dialogRef.close();
    }
}
