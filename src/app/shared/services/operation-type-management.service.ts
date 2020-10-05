import {Injectable} from '@angular/core';
import {OperationType} from '../constants/operation-type';
import {PaymentTemplatesService} from './template/payment/payment-templates.service';
import {ITemplatesService} from './template/itemplates.service';

@Injectable({
  providedIn: 'root'
})
export class OperationTypeManagementService {

  private paymentTemplateService: ITemplatesService;

  constructor(paymentTemplateService: PaymentTemplatesService) {
    this.paymentTemplateService = paymentTemplateService;
  }

  findTemplateService(type: OperationType): ITemplatesService {
    switch (type) {
      case OperationType.Payment:
        return this.paymentTemplateService;
      case OperationType.PeerToPeer:
        return this.paymentTemplateService;
      default:
        throw new Error(`Unknown type of operations: ${type}`);
    }
  }

}
