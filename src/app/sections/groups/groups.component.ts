import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { OperationTypeComponent } from '../../shared/components/operation-type-component';
import { OperationType } from '../../shared/constants/operation-type';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../shared/services/utils/search-field.service';
import { GroupsService } from './groups.service';
import { PriorityIdModel } from './model/priority-id-model';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { GroupUtilsService } from './utils/group-utils.service';

@Component({
    templateUrl: './groups.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent extends OperationTypeComponent implements OnInit {
    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'lastUpdateDate', 'edit'];
    groups = [];
    operationTypes = [];
    searchField: FormControl = new FormControl('');

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private errorHandlerService: ErrorHandlerService,
        private groupsService: GroupsService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        public searchFieldService: SearchFieldService
    ) {
        super();
    }

    ngOnInit(): void {
        this.operationTypes = Object.keys(OperationType);
        this.operationType = this.operationTypes[0];
        this.operationTypeParseFragment(this.route);
        this.search();
        this.searchField.valueChanges.pipe(debounceTime(300)).subscribe(() => {
            this.search();
        });
    }

    search(): void {
        this.isLoading = true;
        this.groupsService
            .getGroups(
                (OperationType as any)[this.operationType],
                this.searchFieldService.formatField(this.searchField.value)
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

    navigateToNew(): void {
        this.router.navigate(['/group/new'], { fragment: this.operationType });
    }

    navigateToEdit(id): void {
        this.router.navigate([`/group/${id}`], { fragment: this.operationType });
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
