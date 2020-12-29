import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Papa } from 'ngx-papaparse';

import { OperationTypeComponent } from '../../../shared/components/operation-type-component';
import { OperationType } from '../../../shared/constants/operation-type';
import { CsvUtilsService } from '../../../shared/services/utils/csv-utils.service';
import { ErrorHandlerService } from '../../../shared/services/utils/error-handler.service';
import { TemplatesService } from '../../templates/templates.service';
import { P2pReference } from '../model/p2p-reference';
import { PaymentReference } from '../model/payment-reference';
import { ReferencesService } from '../references.service';
import { ReferenceUtilsService } from './reference-utils.service';

@Component({
    templateUrl: './create-reference.component.html',
    styleUrls: ['./create-reference.component.scss'],
    providers: [ReferenceUtilsService, CsvUtilsService],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateReferenceComponent extends OperationTypeComponent implements OnInit {
    options: string[] = [];
    files: any[] = [];

    p2pReferences: P2pReference[] = [];
    paymentReferences: PaymentReference[] = [];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private templatesService: TemplatesService,
        private referenceService: ReferencesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar,
        private papa: Papa,
        private referenceUtilsService: ReferenceUtilsService,
        private csvUtilsService: CsvUtilsService
    ) {
        super();
    }

    ngOnInit(): void {
        this.getOperationTypeFromFragment();
        this.doFilter('');
    }

    getOperationTypeFromFragment(): void {
        this.route.fragment.subscribe((fragment: string) => {
            this.operationType = OperationType[fragment];
            this.addNewReference();
        });
    }

    addNewReference(): void {
        this.isPaymentReference()
            ? (this.paymentReferences = this.referenceUtilsService.appendPaymentReference(
                  this.paymentReferences,
                  '',
                  '',
                  ''
              ))
            : (this.p2pReferences = this.referenceUtilsService.appendP2pReference(this.p2pReferences, '', ''));
    }

    save(): void {
        this.referenceService
            .saveReferences(this.operationType, this.isPaymentReference() ? this.paymentReferences : this.p2pReferences)
            .subscribe(
                (ids) => {
                    this.navigateToList();
                    this.snackBar.open(`Saved succeeded: ${ids}`, 'OK', {
                        duration: 1500,
                    });
                },
                (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
            );
    }

    navigateToList(): void {
        this.router.navigate(['../references'], { fragment: this.operationType });
    }

    deleteRef(i): void {
        this.isPaymentReference() ? this.paymentReferences.splice(i, 1) : this.p2pReferences.splice(i, 1);
    }

    doFilter(value): void {
        this.templatesService.getTemplatesName(this.operationType, value).subscribe(
            (names) => {
                this.options = names;
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }

    prepareFilesList(files: Array<any>): void {
        Object.values(files)
            .filter((value) => this.csvUtilsService.isValidFile(value, 'text/csv', 2097152))
            .forEach((item) =>
                this.papa.parse(item, {
                    skipEmptyLines: true,
                    header: true,
                    complete: (results) => {
                        const data = results.data;
                        if (this.csvUtilsService.isValidFormatCsv(data, item, ['template'])) {
                            this.processCsv(data);
                        }
                    },
                })
            );
    }

    processCsv(data): void {
        for (const item of data) {
            if (this.hasNotEmptyRow()) {
                this.isPaymentReference()
                    ? (this.paymentReferences = [
                          this.referenceUtilsService.createPaymentReference(item.template, item.partyId, item.shopId),
                      ])
                    : (this.p2pReferences = [
                          this.referenceUtilsService.createP2pReference(item.template, item.identityId),
                      ]);
            } else {
                this.isPaymentReference()
                    ? (this.paymentReferences = this.referenceUtilsService.appendPaymentReference(
                          this.paymentReferences,
                          item.template,
                          item.partyId,
                          item.shopId
                      ))
                    : (this.p2pReferences = this.referenceUtilsService.appendP2pReference(
                          this.p2pReferences,
                          item.template,
                          item.identityId
                      ));
            }
        }
    }

    private hasNotEmptyRow(): boolean {
        return (
            !!this.paymentReferences && this.paymentReferences.length > 0 && this.paymentReferences[0].templateId === ''
        );
    }
}
