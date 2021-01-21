import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { combineLatest, of, Subject } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { ConfirmActionDialogComponent } from '../../../shared/components/confirm-action-dialog';

@Injectable()
export class RemoveTemplateService {
    private removeTemplate$ = new Subject<string>();
    removed$ = this.removeTemplate$.pipe(
        switchMap((templateID) =>
            combineLatest([
                of(templateID),
                this.dialog
                    .open(ConfirmActionDialogComponent, { data: { title: `Remove template ${templateID}?` } })
                    .afterClosed()
                    .pipe(filter((r) => r === 'confirm')),
            ])
        )
    );

    constructor(private dialog: MatDialog) {}

    removeTemplate(id: string) {
        this.removeTemplate$.next(id);
    }
}
