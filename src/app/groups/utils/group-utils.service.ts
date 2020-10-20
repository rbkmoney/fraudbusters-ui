import { Injectable } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { Group } from '../model/group';

@Injectable({
    providedIn: 'root',
})
export class GroupUtilsService {
    constructor() {}

    sortData(sort: Sort, group: Group): void {
        const data = group.priorityTemplates.slice();
        if (!sort.active || sort.direction === '') {
            group.priorityTemplates = data;
            return;
        }

        group.priorityTemplates = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id':
                    return this.compare(a.id, b.id, isAsc);
                case 'priority':
                    return this.compare(a.priority, b.priority, isAsc);
                default:
                    return 0;
            }
        });
    }

    sortGroups(sort: Sort, groups: Group[]): Group[] {
        const data = groups.slice();
        if (!sort.active || sort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'id':
                    return this.compare(a.groupId, b.groupId, isAsc);
                default:
                    return 0;
            }
        });
    }

    compare(a: number | string, b: number | string, isAsc: boolean): number {
        return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
}
