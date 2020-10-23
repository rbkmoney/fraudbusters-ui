import { Component, OnInit } from '@angular/core';
import { OperationType } from '../../shared/constants/operation-type';
import { ActivatedRoute } from '@angular/router';
import { ReferencesService } from '../references.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandlerService } from '../../shared/services/utils/error-handler.service';
import { OperationTypeComponent } from '../../shared/model/OperationTypeComponent';
import { PaymentReference } from '../model/payment-reference';
import { P2pReference } from '../model/p2p-reference';

@Component({
    selector: 'app-edit-reference',
    templateUrl: './edit-reference.component.html',
    styleUrls: ['./edit-reference.component.scss'],
})
export class EditReferenceComponent extends OperationTypeComponent implements OnInit {
    reference: PaymentReference | P2pReference;
    referenceId;

    constructor(
        private route: ActivatedRoute,
        private referenceService: ReferencesService,
        private errorHandlerService: ErrorHandlerService,
        private snackBar: MatSnackBar
    ) {
        super();
    }

    ngOnInit(): void {
        this.preloadData();
        this.referenceService.getReferences(this.operationType, 1, this.referenceId).subscribe(
            (referencesResponse) => {
                this.reference = referencesResponse.referenceModels[0];
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
            this.referenceId = id;
        });
    }

    save(): void {
        console.log(this.reference);
        this.referenceService.saveReference(this.operationType, this.reference).subscribe(
            (id) => {
                this.snackBar.open(`Saved succeeded: ${id}`, 'OK', {
                    duration: 1500,
                });
            },
            (error: HttpErrorResponse) => this.errorHandlerService.handleError(error, this.snackBar)
        );
    }
}
