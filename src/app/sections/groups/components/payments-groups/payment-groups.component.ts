import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

import { PaymentGroupsService } from '../../../../api/payments/groups';
import { ErrorHandlerService } from '../../../../shared/services/utils/error-handler.service';
import { SearchFieldService } from '../../../../shared/services/utils/search-field.service';
import { PriorityIdModel } from './model/priority-id-model';
import { RemoveGroupDialogComponent } from './remove-group-dialog/remove-group-dialog.component';
import { GroupUtilsService } from './utils/group-utils.service';
import { LAYOUT_GAP_M } from '../../../../tokens';

@Component({
    templateUrl: './payment-groups.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [],
})
export class PaymentGroupsComponent implements OnInit {
    isLoadMore = false;
    isLoading = false;
    displayedColumns: string[] = ['id', 'text', 'lastUpdateDate', 'edit'];
    groups = [];
    searchField: FormControl = new FormControl('');

    constructor(
        private router: Router,
        private errorHandlerService: ErrorHandlerService,
        private groupsService: PaymentGroupsService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar,
        public dialog: MatDialog,
        public searchFieldService: SearchFieldService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {}

    ngOnInit(): void {
        this.search();
        this.searchField.valueChanges.pipe(debounceTime(300)).subscribe(() => {
            this.search();
        });
    }

    search(): void {
        this.isLoading = true;
        this.groupsService.filter(this.searchFieldService.formatField(this.searchField.value)).subscribe(
            (groups) => {
                this.isLoading = false;
                this.groups = groups.result;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    sortData(sort: Sort): void {
        this.groups = this.groupUtilsService.sortGroups(sort, this.groups);
    }

    navigateToNew(): void {
        this.router.navigate(['/group/new']);
    }

    navigateToEdit(id): void {
        this.router.navigate([`/group/${id}`]);
    }

    loadMore(): void {}

    openDialog(groupId): void {
        const dialogRef = this.dialog.open(RemoveGroupDialogComponent, {
            width: '350px',
            data: { id: groupId },
        });

        dialogRef.afterClosed().subscribe((result) => {
            this.search();
        });
    }

    mapTemplateName(priorityIdModel: PriorityIdModel[]): string[] {
        return priorityIdModel.map((value) => value.id + ' - ' + value.priority);
    }
}
