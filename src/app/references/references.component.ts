import { Component, OnInit } from '@angular/core';
import { OperationType } from '../shared/constants/operation-type';
import { ReferencesService } from './references.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { RemoveReferenceDialogComponent } from './remove-reference-dialog/remove-reference-dialog.component';
import { SortOrder } from '../shared/constants/sort-order';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/services/utils/error-handler.service';
import { ConfigService } from '../core/config.service';
import { ReplaySubject } from 'rxjs';
import { OperationTypeComponent } from '../shared/model/OperationTypeComponent';

@Component({
    selector: 'app-references',
    templateUrl: './references.component.html',
    styleUrls: ['./references.component.scss'],
})
export class ReferencesComponent extends OperationTypeComponent implements OnInit {
    private SIZE: number;

    constructor(
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
        private referenceService: ReferencesService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        super();
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next(['templateId', 'edit']);
    }

    isLoadMore = false;
    isLoading = false;
    references = [];
    displayedColumns = new ReplaySubject<string[]>();
    operationTypes = [];
    searchReferenceName;
    sortType = SortOrder.DESC;

    openDialog(removeReference): void {
        const dialogRef = this.dialog.open(RemoveReferenceDialogComponent, {
            width: '350px',
            data: { reference: removeReference, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.selectionChange();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(['templateId', 'partyId', 'shopId', 'edit']);
        } else {
            this.displayedColumns.next(['templateId', 'identityId', 'edit']);
        }
        this.search();
    }

    search(): void {
        this.isLoading = true;
        this.referenceService
            .getReferences(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchReferenceName,
                null,
                this.sortType
            )
            .subscribe(
                (referencesResponse) => {
                    this.isLoading = false;
                    this.references = referencesResponse.referenceModels;
                    this.isLoadMore = this.references.length < referencesResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    changeSearch(newValue): void {
        this.searchReferenceName = newValue;
        this.search();
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    loadMore(): void {
        this.isLoading = true;
        this.referenceService
            .getReferences(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchReferenceName,
                this.references[this.references.length - 1].id,
                this.sortType
            )
            .subscribe(
                (referencesResponse) => {
                    this.isLoading = false;
                    this.references = this.references.concat(referencesResponse.referenceModels);
                    this.isLoadMore = this.references.length < referencesResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.isLoading = false;
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    navigateToNew(): void {
        this.router.navigate(['/references/new'], { fragment: this.operationType });
    }

    navigateToEdit(id): void {
        this.router.navigate([`/references/${id}`], { fragment: this.operationType });
    }
}
