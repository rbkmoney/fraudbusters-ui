import {Component, OnInit} from '@angular/core';
import {OperationType} from '../../shared/constants/operation-type';
import {ActivatedRoute} from '@angular/router';
import {TemplatesService} from '../templates.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {HttpErrorResponse} from '@angular/common/http';
import {Template} from '../model/template';

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  private operationType: OperationType;
  template: Template;
  templateId;

  constructor(private route: ActivatedRoute, private templateService: TemplatesService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.preloadData();
    this.templateService.getTemplates(this.operationType, 1, this.templateId).subscribe(
      (templates) => {
        this.template = templates.reverse()[0];
      },
      (error: HttpErrorResponse) => {
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      }
    );
  }

  private preloadData() {
    this.route.fragment.subscribe((fragment: string) => {
      this.operationType = OperationType[fragment];
    });
    this.route.params
      .subscribe(({id}) => {
        this.templateId = id;
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
