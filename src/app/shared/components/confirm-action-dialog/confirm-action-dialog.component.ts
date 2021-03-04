import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    selector: 'fb-confirm-action-dialog',
    templateUrl: 'confirm-action-dialog.component.html',
    styleUrls: ['confirm-action-dialog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmActionDialogComponent {
    constructor(
        public dialogRef: MatDialogRef<ConfirmActionDialogComponent, 'cancel' | 'confirm'>,
        @Inject(MAT_DIALOG_DATA)
        public data: { title?: string }
    ) {}

    cancel() {
        this.dialogRef.close('cancel');
    }

    confirm() {
        this.dialogRef.close('confirm');
    }
}
