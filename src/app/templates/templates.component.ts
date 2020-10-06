import {Component, OnInit} from '@angular/core';
import {OperationType} from '../shared/constants/operation-type';
import {TemplatesService} from './templates.service';
import {HttpErrorResponse} from '@angular/common/http';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import {RemoveTemplateDialogComponent} from './remove-template-dialog/remove-template-dialog.component';
import {SortOrder} from '../shared/constants/sort-order';
import {Sort} from '@angular/material/sort';
import {Router} from '@angular/router';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  isLoading = false;
  displayedColumns: string[] = ['id', 'text', 'edit'];
  templates = [];
  operationTypes = [];
  operationType;
  searchTemplateName;
  sortType = SortOrder.DESC;

  constructor(private router: Router, private templateService: TemplatesService, private snackBar: MatSnackBar, public dialog: MatDialog) {
  }

  openDialog(template): void {
    const dialogRef = this.dialog.open(RemoveTemplateDialogComponent, {
      width: '350px',
      data: {template: template, operationType: this.operationType}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.operationTypes = Object.keys(OperationType).filter(k => typeof OperationType[k as any] === 'number');
    this.operationType = this.operationTypes[0];
    this.search();
  }

  private readonly _size = 2;

  search() {
    this.isLoading = true;
    this.templateService.getTemplates((OperationType as any)[this.operationType], this._size, this.searchTemplateName, null,
      this.sortType).subscribe(
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

  changeSearch(newValue) {
    this.searchTemplateName = newValue;
    this.search();
  }

  sortData(sort: Sort) {
    this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
    this.search();
  }

  loadMore() {
    this.isLoading = true;
    this.templateService.getTemplates((OperationType as any)[this.operationType], this._size, this.searchTemplateName, this.templates[this.templates.length - 1].id,
      this.sortType).subscribe(
      (templates) => {
        this.isLoading = false;
        this.templates = this.templates.concat(templates);
      },
      (error: HttpErrorResponse) => {
        this.isLoading = false;
        this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
          duration: 1500,
        });
      }
    );
  }

  navigateToNew() {
    this.router.navigate(['/templates/new'], {fragment: this.operationType});
  }

  navigateToEdit(id) {
    this.router.navigate([`/templates/${id}`], {fragment: this.operationType});
  }

}
