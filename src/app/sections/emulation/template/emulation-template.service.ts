import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { Template } from '../../../api/fb-management/swagger-codegen/model/template';
import { PaymentEmulateService } from '../../../api/payments/emulate';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';

@Injectable()
export class EmulationTemplateService {
    queries$ = new Subject<PaymentEmulateFilter>();
    templates$: Observable<Template[]>;

    constructor(
        private paymentEmulateService: PaymentEmulateService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        this.templates$ = combineLatest([this.queries$]).pipe(
            switchMap(([queries]) =>
                this.emulate(queries).pipe(
                    catchError((error) => {
                        this.errorHandlerService.handleError(error, this.snackBar);
                        return of(error);
                    })
                )
            )
        );
    }

    emulateNext(filter): void {
        this.queries$.next(filter);
    }

    emulate(filter: PaymentEmulateFilter): Observable<Template[]> {
        return this.paymentEmulateService.emulate(filter);
    }
}
