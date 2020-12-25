import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

import { ConfigService } from '../../core/config.service';
import { OperationTypeComponent } from '../../shared/components/operation-type-component';
import { OperationType } from '../../shared/constants/operation-type';
import { SortOrder } from '../../shared/constants/sort-order';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { GroupsReferenceService } from './groups-reference.service';
import { RemoveGroupReferenceDialogComponent } from './remove-group-reference-dialog/remove-group-reference-dialog.component';

@Component({
    templateUrl: './groups-reference.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsReferenceComponent extends OperationTypeComponent implements OnInit {
    groupReferences = [];
    searchValue = '';
    operationType: OperationType;
    operationTypes;

    private SIZE: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private groupsReferenceService: GroupsReferenceService,
        private searchFieldService: SearchFieldService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        super();
        this.SIZE = configService.config.pageSize;
        this.displayedColumns.next(['groupId', 'edit']);
    }

    isLoadMore = false;
    displayedColumns = new ReplaySubject<string[]>();
    sortType = SortOrder.DESC;

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.operationTypeParseFragment(this.route);
        this.route.queryParams
            .pipe(
                pluck('searchValue'),
                filter((value) => !!value)
            )
            .subscribe((value) => (this.searchValue = value));
        this.selectionChange();
    }

    selectionChange(): void {
        if (this.operationType === OperationType.Payment) {
            this.displayedColumns.next(['groupId', 'partyId', 'shopId', 'lastUpdateDate', 'edit']);
        } else {
            this.displayedColumns.next(['groupId', 'identityId', 'lastUpdateDate', 'edit']);
        }
        this.search();
    }

    search(): void {
        this.groupsReferenceService
            .getGroupsReferences(
                (OperationType as any)[this.operationType],
                this.SIZE,
                this.searchFieldService.formatField(this.searchValue),
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
                this.searchFieldService.formatField(this.searchValue),
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
