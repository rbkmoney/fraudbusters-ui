import {Component, OnInit} from '@angular/core';
import {OperationType} from '../shared/constants/operation-type';
import {TemplatesService} from './templates.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  isLoading = false;
  displayedColumns: string[] = ['name', 'text', 'edit'];
  templates = [];
  operationTypes = [];
  operationType;

  constructor(private templateService: TemplatesService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.operationTypes = Object.keys(OperationType).filter(k => typeof OperationType[k as any] === "number");;
    this.operationType = this.operationTypes[0];
    this.search();
  }

  search() {
    this.isLoading = true;
    this.templateService.getTemplates((OperationType as any)[this.operationType]).subscribe(
      (templates) => {
        this.isLoading = false;
        this.templates = templates.reverse();
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      }
    );
  }
}
