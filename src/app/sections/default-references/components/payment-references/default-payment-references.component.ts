import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { OperationType } from '../../../../shared/constants/operation-type';
import { LAYOUT_GAP_M } from '../../../../tokens';
import { FetchDefaultReferencesService } from '../../services/fetch-default-references.service';
import { RemoveDefaultReferenceService } from '../../services/remove-default-reference.service';
import { PaymentReference } from '../../../../api/fb-management/swagger-codegen/model/paymentReference';

@Component({
    templateUrl: 'default-payment-references.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FetchDefaultReferencesService, RemoveDefaultReferenceService],
})
export class DefaultPaymentReferencesComponent {
    references$ = this.fetchDefaultReferencesService.searchResult$;
    inProgress$ = this.fetchDefaultReferencesService.inProgress$;
    hasMore$ = this.fetchDefaultReferencesService.hasMore$;

    private OPERATION_TYPE: OperationType = OperationType.Payment;

    constructor(
        private router: Router,
        private fetchDefaultReferencesService: FetchDefaultReferencesService,
        private removeDefaultReferenceService: RemoveDefaultReferenceService,
        @Inject(LAYOUT_GAP_M) public layoutGapM: string
    ) {
        this.removeDefaultReferenceService.removed$.subscribe(() => {
            this.fetchDefaultReferencesService.search({ type: this.OPERATION_TYPE, isGlobal: false, isDefault: false });
        });
    }

    createReference() {
        this.router.navigate(['/default-reference/new/payment']);
    }

    search(searchValue: string) {
        this.fetchDefaultReferencesService.search({
            type: this.OPERATION_TYPE,
            searchValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    fetchMore(sortFieldValue: string) {
        this.fetchDefaultReferencesService.fetchMore({
            type: this.OPERATION_TYPE,
            sortFieldValue,
            isGlobal: false,
            isDefault: false,
        });
    }

    goToTemplate(id: string) {
        this.router.navigate([`/template/${id}`], { fragment: OperationType.Payment });
    }

    removeReference(reference: PaymentReference) {
        this.removeDefaultReferenceService.removeReference({
            type: this.OPERATION_TYPE,
            reference,
        });
    }
}
