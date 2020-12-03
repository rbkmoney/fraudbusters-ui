import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { AuditService } from './audit.service';
import { SortOrder } from '../../shared/constants/sort-order';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
    selector: 'app-audit',
    templateUrl: './audit.component.html',
    styleUrls: ['./audit.component.scss'],
    animations: [
        trigger('indicatorRotate', [
            state('collapsed', style({ transform: 'rotate(0deg)' })),
            state('expanded', style({ transform: 'rotate(180deg)' })),
            transition('expanded <=> collapsed', animate('400ms cubic-bezier(0.4,0.0,0.2,1)')),
        ]),
    ],
})
export class AuditComponent implements OnInit {
    logs$ = this.auditService.logs$;
    commandsTypes$ = this.auditService.commandsTypes$;
    objectsTypes$ = this.auditService.objectsTypes$;
    isLoadMore$ = this.auditService.isLoadMore$;

    expanded = false;

    displayedColumns = ['timestamp', 'user', 'objectType', 'commandType', 'object'];

    constructor(private auditService: AuditService, private router: Router) {}

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
        this.auditService.selectCommand$.next($event.value);
    }

    selectionObject($event): void {
        this.auditService.selectObject$.next($event.value);
    }

    search($event): void {
        this.auditService.searchField$.next($event.target.value);
    }

    expand(): void {
        this.expanded = !this.expanded;
    }

    updateQueryParameters($event): void {
        this.router.navigate([], {
            queryParams: {
                dateFrom: $event.value,
            },
            queryParamsHandling: 'merge',
        });
    }
}
