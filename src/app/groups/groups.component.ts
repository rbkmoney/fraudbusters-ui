import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/services/utils/error-handler.service';
import { TemplatesService } from '../templates/templates.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '../core/config.service';
import { SortOrder } from '../shared/constants/sort-order';
import { OperationType } from '../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { Sort } from '@angular/material/sort';
import { RemoveTemplateDialogComponent } from '../templates/remove-template-dialog/remove-template-dialog.component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    private SIZE: number;

    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'edit'];
    groups = [];
    operationTypes = [];
    operationType;
    searchField;
    sortType = SortOrder.DESC;

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

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType).filter((k) => typeof OperationType[k as any] === 'number');
        this.operationType = this.operationTypes[0];
    }

    search(): void {
        this.isLoading = true;
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    changeSearch(newValue): void {
        this.searchField = newValue;
        this.search();
    }

    navigateToNew(): void {
        this.router.navigate(['/groups/new'], { fragment: this.operationType });
    }

    navigateToEdit(id): void {
        this.router.navigate([`/groups/${id}`], { fragment: this.operationType });
    }

    loadMore(): void {}

    openDialog(removeTemplate): void {
        const dialogRef = this.dialog.open(RemoveTemplateDialogComponent, {
            width: '350px',
            data: { template: removeTemplate, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed');
        });
    }
}
