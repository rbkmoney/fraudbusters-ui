import {Component, OnInit} from '@angular/core';
import {TemplatesService} from '../templates.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';
import {OperationType} from '../../shared/constants/operation-type';
import {HttpErrorResponse} from '@angular/common/http';
import {Template} from '../model/template';

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.scss'],
})
export class CreateTemplateComponent implements OnInit {

  private operationType: OperationType;
  template = new Template('', '');

  constructor(private route: ActivatedRoute, private templateService: TemplatesService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getOperationTypeFromFragment();
  }

  getOperationTypeFromFragment() {
    this.route.fragment.subscribe((fragment: string) => {
      this.operationType = OperationType[fragment];
    });
  }

  save() {
    this.templateService.saveTemplate(this.operationType, this.template).subscribe(
      (id) => {
        console.log(id);
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      });
  }

  validate() {
    this.templateService.validateTemplate(this.operationType, [this.template]).subscribe(
      (response) => {
        this.snackBar.open(`${response.validateResults[0].id}: ${response.validateResults[0].errors}`, 'OK', {
          duration: 1500,
        });
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      });
  }
}
