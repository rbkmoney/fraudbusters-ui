import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';

import { ConfigService } from '../../config';
import { OperationTypeComponent } from '../../shared/components/operation-type-component';
import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { RemoveTemplateDialogComponent } from './remove-template-dialog/remove-template-dialog.component';
import { TemplatesService } from './templates.service';

@Component({
    templateUrl: './templates.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TemplatesComponent extends OperationTypeComponent implements OnInit {
    private SIZE = this.configService.pageSize;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private templateService: TemplatesService,
        private snackBar: MatSnackBar,
        private dialog: MatDialog,
        private searchFieldService: SearchFieldService,
        private configService: ConfigService
    ) {
        super();
    }

    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'lastUpdateDate', 'edit'];
    templates = [];
    operationTypes = [];
    operationType;
    searchTemplateName;
    sortType = SortOrder.DESC;

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.operationTypeParseFragment(this.route);
        this.search();
    }

    openDialog(removeTemplate): void {
        this.dialog.open(RemoveTemplateDialogComponent, {
            width: '350px',
            data: { template: removeTemplate, operationType: this.operationType },
        });
    }

    search(): void {
        this.isLoading = true;
        this.templateService
            .getTemplates(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchFieldService.formatField(this.searchTemplateName),
                null,
                this.sortType
            )
            .subscribe(
                (templatesResponse: any) => {
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
                this.searchFieldService.formatField(this.searchTemplateName),
                this.templates[this.templates.length - 1].id,
                this.sortType
            )
            .subscribe(
                (templatesResponse: any) => {
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
        this.router.navigate(['/template/new'], { fragment: this.operationType });
    }

    navigateToEdit(id): void {
        this.router.navigate([`/template/${id}`], { fragment: this.operationType });
    }
}
