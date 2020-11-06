import { Component, OnInit } from '@angular/core';
import { OperationType } from '../../shared/constants/operation-type';
import { TemplatesService } from './templates.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RemoveTemplateDialogComponent } from './remove-template-dialog/remove-template-dialog.component';
import { SortOrder } from '../../shared/constants/sort-order';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { ConfigService } from '../../core/config.service';

@Component({
    selector: 'app-templates',
    templateUrl: './templates.component.html',
    styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent implements OnInit {
    private SIZE: number;

    constructor(
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
        private templateService: TemplatesService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        this.SIZE = configService.config.pageSize;
    }

    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'edit'];
    templates = [];
    operationTypes = [];
    operationType;
    searchTemplateName;
    sortType = SortOrder.DESC;

    openDialog(removeTemplate): void {
        const dialogRef = this.dialog.open(RemoveTemplateDialogComponent, {
            width: '350px',
            data: { template: removeTemplate, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.search();
    }

    search(): void {
        this.isLoading = true;
        this.templateService
            .getTemplates(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchTemplateName,
                null,
                this.sortType
            )
            .subscribe(
                (templatesResponse) => {
                    this.isLoading = false;
                    this.templates = templatesResponse.templateModels;
                    this.isLoadMore = this.templates.length < templatesResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    changeSearch(newValue): void {
        this.searchTemplateName = newValue;
        this.search();
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    loadMore(): void {
        this.isLoading = true;
        this.templateService
            .getTemplates(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchTemplateName,
                this.templates[this.templates.length - 1].id,
                this.sortType
            )
            .subscribe(
                (templatesResponse) => {
                    this.isLoading = false;
                    this.templates = this.templates.concat(templatesResponse.templateModels);
                    this.isLoadMore = this.templates.length < templatesResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    navigateToNew(): void {
        this.router.navigate(['/templates/new'], { fragment: this.operationType });
    }

    navigateToEdit(id): void {
        this.router.navigate([`/templates/${id}`], { fragment: this.operationType });
    }
}
