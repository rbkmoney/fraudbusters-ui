import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';

import { SortOrder } from '../../shared/constants/sort-order';
import { AuditService } from './audit.service';
import { Filter } from './model/filter';

@Component({
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4,0.0,0.2,1)')),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuditComponent implements OnInit {
    filter: Filter;

    logs$ = this.auditService.logs$;
    commandsTypes$ = this.auditService.commandsTypes$;
    objectsTypes$ = this.auditService.objectsTypes$;
    isLoadMore$ = this.auditService.isLoadMore$;

    expanded = false;

    displayedColumns = ['insertTime', 'initiator', 'objectType', 'commandType', 'text'];

    constructor(private auditService: AuditService, private route: ActivatedRoute) {
        combineLatest([this.commandsTypes$, this.objectsTypes$, this.route.queryParams]).subscribe((params) => {
            this.filter = {
                user: !params[2].userId ? '' : params[2].userId,
                commandTypes: !params[2].commandTypes ? params[0] : JSON.parse(params[2].commandTypes),
                objectTypes: !params[2].objectTypes ? params[1] : JSON.parse(params[2].objectTypes),
                from: !params[2].dateFrom ? auditService.todayFromTime() : new Date(params[2].dateFrom),
                to: !params[2].dateTo ? new Date() : new Date(params[2].dateTo),
            };
            this.auditService.mergeQueryParam({
                dateTo: this.filter.to,
                dateFrom: this.filter.from,
                userId: this.filter.user,
                commandTypes: this.filter.commandTypes ? JSON.stringify(this.filter.commandTypes) : null,
                objectTypes: this.filter.objectTypes ? JSON.stringify(this.filter.objectTypes) : null,
            });
            this.auditService.searchFilter$.next(this.filter);
        });
    }

    ngOnInit(): void {}

    sortData(sort: Sort): void {
        this.auditService.sort$.next(sort.direction === 'asc' ? SortOrder.ASC : SortOrder.DESC);
    }

    loadMore(): void {
        this.auditService.loadMoreAction$.next(true);
    }

    refresh(): void {
        this.auditService.loadMoreAction$.next(false);
    }

    selectionCommand($event): void {
        this.auditService.mergeQueryParam({
            commandTypes: JSON.stringify(this.filter.commandTypes),
        });
    }

    selectionObject($event): void {
        this.auditService.mergeQueryParam({
            objectTypes: JSON.stringify(this.filter.objectTypes),
        });
    }

    search($event): void {
        this.auditService.searchField$.next($event.target.value);
    }

    setDateFrom($event): void {
        this.auditService.mergeQueryParam({
            dateFrom: $event.value,
        });
    }

    setDateTo($event): void {
        this.auditService.mergeQueryParam({
            dateTo: $event.value,
        });
    }
}
