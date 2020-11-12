import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { OperationTypeComponent } from '../../shared/components/operation-type-component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent extends OperationTypeComponent implements OnInit {
    private SIZE: number;

    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'lastUpdateDate', 'edit'];
    groups = [];
    operationTypes = [];
    searchField;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private groupsService: GroupsService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        public searchFieldService: SearchFieldService,
        configService: ConfigService
    ) {
        super();
        this.SIZE = configService.config.pageSize;
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.operationTypeParseFragment(this.route);
        this.search();
    }

    search(): void {
        this.isLoading = true;
        this.groupsService
            .getGroups(
                (OperationType as any)[this.operationType],
                this.searchFieldService.formatField(this.searchField)
            )
            .subscribe(
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
