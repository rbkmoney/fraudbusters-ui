import { Component, OnInit } from '@angular/core';
import { PriorityIdModel } from '../model/priority-id-model';
import { OperationType } from '../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { GroupsService } from '../groups.service';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Group } from '../model/group';
import { HttpErrorResponse } from '@angular/common/http';

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
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions;

    constructor(
        private route: ActivatedRoute,
        private groupsService: GroupsService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.preloadData();
        this.groupsService.getGroupById(this.operationType, this.editGroupId).subscribe(
            (group) => {
                this.editGroup = group;
            },
            (error: HttpErrorResponse) => {
                this.snackBar.open(`${error.status}: ${error.message}`, 'OK', {
                    duration: 1500,
                });
            }
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

    getOperationTypeFromFragment(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
        });
    }

    save(): void {}

    addReference(): void {}

    addTemplate(): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.concat([new PriorityIdModel('', 0)]);
    }

    removeTemplate(removeId: string): void {
        this.editGroup.priorityTemplates = this.editGroup.priorityTemplates.filter((obj) => obj.id !== removeId);
    }

    doFilter(value): void {
        const regex = new RegExp('/^/' + value, 'g');
        this.filteredOptions = this.options.filter((option) => regex.test(option));
    }
}
