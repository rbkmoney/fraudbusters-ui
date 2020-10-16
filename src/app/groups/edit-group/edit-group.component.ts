import { Component, OnInit } from '@angular/core';
import { PriorityIdModel } from '../model/priority-id-model';
import { OperationType } from '../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../groups.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Group } from '../model/group';
import { HttpErrorResponse } from '@angular/common/http';
import { Sort } from '@angular/material/sort';
import { GroupUtilsService } from '../utils/group-utils.service';
import { TemplatesService } from '../../templates/templates.service';

@Component({
    selector: 'app-edit-group',
    templateUrl: './edit-group.component.html',
    styleUrls: ['./edit-group.component.scss'],
})
export class EditGroupComponent implements OnInit {
    editGroupId: string;
    editGroup: Group;
    displayedColumns: string[] = ['id', 'priority', 'edit'];
    operationType: OperationType;
    options: string[] = [];

    constructor(
        private route: ActivatedRoute,
        private groupsService: GroupsService,
        private errorHandlerService: ErrorHandlerService,
        private templatesService: TemplatesService,
        private groupUtilsService: GroupUtilsService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
        this.groupsService.getGroupById(this.operationType, this.editGroupId).subscribe(
            (group) => {
                this.editGroup = group;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    private preloadData(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
        this.route.params.subscribe(({ id }) => {
            this.editGroupId = id;
        });
    }

    save(): void {
        this.groupsService.saveGroup(this.operationType, this.editGroup).subscribe(
            (id) => {
                this.snackBar.open(`Saved success: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    navigateReference(): void {}

    addTemplate(): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.concat([new PriorityIdModel('', 0)]);
    }

    removeTemplate(removeId: string): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.filter((obj) => obj.id !== removeId);
    }

    doFilter(value): void {
        this.templatesService.getTemplatesName(this.operationType, value).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    sortData(sort: Sort, group: Group): void {
        this.groupUtilsService.sortData(sort, group);
    }
}
