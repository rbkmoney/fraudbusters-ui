import { Component, OnInit } from '@angular/core';
import { OperationType } from '../shared/constants/operation-type';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../shared/services/utils/error-handler.service';
import { ReferencesService } from '../references/references.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '../core/config.service';
import { ReplaySubject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupsReferenceService } from './groups-reference.service';
import { SortOrder } from '../shared/constants/sort-order';
import { RemoveReferenceDialogComponent } from '../references/remove-reference-dialog/remove-reference-dialog.component';
import { RemoveGroupReferenceDialogComponent } from './remove-group-reference-dialog/remove-group-reference-dialog.component';
import { Sort } from '@angular/material/sort';

@Component({
    selector: 'app-groups-reference',
    templateUrl: './groups-reference.component.html',
    styleUrls: ['./groups-reference.component.scss'],
})
export class GroupsReferenceComponent implements OnInit {
    groupReferences = [];
    searchValue = '';
    operationType: OperationType;
    operationTypes;

    private SIZE: number;

    constructor(
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
        private groupsReferenceService: GroupsReferenceService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next(['groupId', 'edit']);
    }

    isLoadMore = false;
    displayedColumns = new ReplaySubject<string[]>();
    sortType = SortOrder.DESC;

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.selectionChange();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(['groupId', 'partyId', 'shopId', 'edit']);
        } else {
            this.displayedColumns.next(['groupId', 'identityId', 'edit']);
        }
        this.search();
    }

    search(): void {
        this.groupsReferenceService
            .getGroupsReferences(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchValue,
                null,
                this.sortType
            )
            .subscribe(
                (groupsReferenceResponse) => {
                    this.groupReferences = groupsReferenceResponse.groupsReferenceModels;
                    this.isLoadMore = this.groupReferences.length < groupsReferenceResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    changeSearch(newValue): void {
        this.searchValue = newValue;
        this.search();
    }

    sortData(sort: Sort): void {
        this.sortType = sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC;
        this.search();
    }

    openDialog(removeReference): void {
        const dialogRef = this.dialog.open(RemoveGroupReferenceDialogComponent, {
            width: '350px',
            data: { reference: removeReference, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    loadMore(): void {
        this.groupsReferenceService
            .getGroupsReferences(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchValue,
                this.groupReferences[this.groupReferences.length - 1].id,
                this.sortType,
                this.groupReferences[this.groupReferences.length - 1].groupId
            )
            .subscribe(
                (groupsReferenceResponse) => {
                    this.groupReferences = this.groupReferences.concat(groupsReferenceResponse.groupsReferenceModels);
                    this.isLoadMore = this.groupReferences.length < groupsReferenceResponse.count;
                },
                (error: HttpErrorResponse) => {
                    this.errorHandlerService.handleError(error, this.snackBar);
                }
            );
    }

    navigateToNew(): void {
        this.router.navigate(['/groups-reference/new'], { fragment: this.operationType });
    }
}
