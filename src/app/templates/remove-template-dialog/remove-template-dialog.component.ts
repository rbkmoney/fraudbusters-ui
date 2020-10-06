import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
    animal: string;
    name: string;
}

@Component({
    selector: 'app-remove-template-dialog',
    templateUrl: './remove-template-dialog.component.html',
    styleUrls: ['./remove-template-dialog.component.scss'],
})
export class RemoveTemplateDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<RemoveTemplateDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}
