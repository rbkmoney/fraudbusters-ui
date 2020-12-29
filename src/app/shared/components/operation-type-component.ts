import { ActivatedRoute } from '@angular/router';

import { OperationType } from '../constants/operation-type';

export class OperationTypeComponent {
    operationType: OperationType;

    isPaymentReference(): boolean {
        return this.operationType === OperationType.Payment;
    }

    isP2pReference(): boolean {
        return this.operationType === OperationType.PeerToPeer;
    }

    operationTypeParseFragment(route: ActivatedRoute): void {
        route.fragment.subscribe((fragment: string) => {
            if (!!fragment) {
                this.operationType = OperationType[fragment];
            }
        });
    }
}
