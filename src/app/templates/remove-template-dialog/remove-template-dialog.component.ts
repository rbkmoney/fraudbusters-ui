import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TemplatesService} from '../templates.service';
import {OperationType} from '../../shared/constants/operation-type';
import {Template} from '../model/template';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

export interface DialogData {
  template: Template;
  operationType: OperationType;
}

@Component({
  selector: 'app-remove-template-dialog',
  templateUrl: './remove-template-dialog.component.html',
  styleUrls: ['./remove-template-dialog.component.scss']
})
export class RemoveTemplateDialogComponent {

  constructor(private templateService: TemplatesService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<RemoveTemplateDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  delete() {
    this.templateService.deleteTemplate((OperationType as any)[this.data.operationType], this.data.template).subscribe(
      (id) => {
        console.log(id);
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      });
    this.dialogRef.close();
  }
}
