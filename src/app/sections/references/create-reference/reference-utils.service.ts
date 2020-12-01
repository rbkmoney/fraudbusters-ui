import { Injectable } from '@angular/core';
import { P2pReference } from '../model/p2p-reference';
import { PaymentReference } from '../model/payment-reference';

@Injectable()
export class ReferenceUtilsService {
    appendP2pReference(
        p2pReferences: P2pReference[],
        templateIdValue: string,
        identityIdValue: string
    ): P2pReference[] {
        return p2pReferences.concat([this.createP2pReference(templateIdValue, identityIdValue)]);
    }

    createP2pReference(templateIdValue: string, identityIdValue: string): P2pReference {
        return { templateId: templateIdValue, identityId: identityIdValue, isDefault: false, isGlobal: false };
    }

    appendPaymentReference(
        paymentReferences: PaymentReference[],
        templateIdValue: string,
        partyIdValue: string,
        shopIdValue: string
    ): PaymentReference[] {
        return paymentReferences.concat([this.createPaymentReference(templateIdValue, partyIdValue, shopIdValue)]);
    }

    createPaymentReference(templateIdValue: string, partyIdValue: string, shopIdValue: string): PaymentReference {
        return {
            templateId: templateIdValue,
            partyId: partyIdValue,
            shopId: shopIdValue,
            isDefault: false,
            isGlobal: false,
        };
    }
}
