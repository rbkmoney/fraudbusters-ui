import { HttpErrorResponse } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ListType } from '../../../../shared/constants/list-type';
import { OperationType } from '../../../../shared/constants/operation-type';
import { ListRecord } from '../../../../shared/services/lists/model/list-record';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';
import { WbListService } from '../wb-list.service';

export interface DialogData {
    listRecord: ListRecord;
    operationType: OperationType;
    listType: ListType;
}

@Component({
    templateUrl: './remove-row-list-dialog.component.html',
    styleUrls: ['./remove-row-list-dialog.component.scss'],
})
export class RemoveRowListDialogComponent {
    constructor(
        private listsService: WbListService,
        private snackBar: MatSnackBar,
        private errorHandlerService: ErrorHandlerService,
        public dialogRef: MatDialogRef<RemoveRowListDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }

    delete(): void {
        this.listsService.deleteListRow(this.data.operationType, this.data.listRecord.id).subscribe(
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
