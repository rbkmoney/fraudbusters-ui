import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { OperationType } from '../../../shared/constants/operation-type';
import { OperationTypeManagementService } from '../../../shared/services/operation-type-management.service';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { Template } from '../../templates-old/model/template';
import { P2pEmulateFilter } from './model/p2p-emulate-filter';
import { PaymentEmulateFilter } from './model/payment-emulate-filter';

@Injectable()
export class EmulationTemplateService {
    queries$ = new Subject<PaymentEmulateFilter | P2pEmulateFilter>();
    operationType$ = new BehaviorSubject<string>(OperationType.Payment);
    templates$: Observable<Template[]>;

    constructor(
        private operationReferenceService: OperationTypeManagementService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        this.templates$ = combineLatest([this.operationType$, this.queries$]).pipe(
            switchMap(([type, queries]) =>
                this.emulate((OperationType as any)[type], queries).pipe(
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

    operationTypeNext(next): void {
        this.operationType$.next(next);
    }

    emulate(type: OperationType, filter: PaymentEmulateFilter | P2pEmulateFilter): Observable<Template[]> {
        return this.operationReferenceService.findEmulationService(type).emulate(filter);
    }
}
