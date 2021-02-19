import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, merge, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

import { P2pWbListsService } from '../../../../api/p2p-wb-lists';
import { PaymentWbListsService } from '../../../../api/payment-wb-lists';
import { OperationType } from '../../../constants/operation-type';
import { progress } from '../../../operators';

@Injectable()
export class FetchWbListNamesService {
    private getAvailableListNames$ = new Subject<{ type: OperationType; name: string }>();
    private hasError$ = new Subject();

    names$ = this.getAvailableListNames$.pipe(
        switchMap(({ type, name }) => {
            switch (type) {
                case OperationType.Payment:
                    return this.paymentWbListsService
                        .getAvailableListNames()
                        .pipe(map((names) => names.filter((n) => n.toUpperCase().includes(name.toUpperCase()))));
                case OperationType.PeerToPeer:
                    return this.p2pWbListsService
                        .getAvailableListNames()
                        .pipe(map((names) => names.filter((n) => n.toUpperCase().includes(name.toUpperCase()))));
                default:
                    this.hasError$.next();
                    return EMPTY;
            }
        }),
        shareReplay(1)
    );

    inProgress$ = progress(this.getAvailableListNames$, merge(this.names$, this.hasError$));

    constructor(
        private paymentWbListsService: PaymentWbListsService,
        private p2pWbListsService: P2pWbListsService,
        private snackBar: MatSnackBar
    ) {
        this.hasError$.subscribe(() => {
            this.snackBar.open('An error occurred while fetching available list names.');
        });
    }

    getNames(type: OperationType, name: string) {
        this.getAvailableListNames$.next({ type, name });
    }
}
