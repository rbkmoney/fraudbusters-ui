import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfigService } from '../../core/config.service';
import { OperationType } from '../../shared/constants/operation-type';
import { HttpErrorResponse } from '@angular/common/http';
import { Sort } from '@angular/material/sort';
import { GroupsService } from './groups.service';
import { PriorityIdModel } from './model/priority-id-model';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { GroupUtilsService } from './utils/group-utils.service';

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

    constructor(
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
        private groupsService: GroupsService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        configService: ConfigService
    ) {
        this.SIZE = configService.config.pageSize;
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.search();
    }

    search(): void {
        this.isLoading = true;
        this.groupsService.getGroups((OperationType as any)[this.operationType], this.searchField).subscribe(
            (groups) => {
                this.isLoading = false;
                this.groups = groups;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    sortData(sort: Sort): void {
        this.groups = this.groupUtilsService.sortGroups(sort, this.groups);
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

    openDialog(groupId): void {
        const dialogRef = this.dialog.open(RemoveGroupDialogComponent, {
            width: '350px',
            data: { id: groupId, operationType: this.operationType },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    mapTemplateName(priorityIdModel: PriorityIdModel[]): string[] {
        return priorityIdModel.map((value) => value.id + ' - ' + value.priority);
    }
}
