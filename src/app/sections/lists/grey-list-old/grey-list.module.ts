import { NgModule } from '@angular/core';

import { WbListModule } from '../../../shared/components/wb-list/wb-list.module';
import { PaymentGreyListComponent } from '../grey-list/components/payment-grey-list/payment-grey-list.component';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';
import { GreyListRoutingModule } from './grey-list-routing.module';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    declarations: [GreyListComponent, AddRowGreyListComponent, PaymentGreyListComponent],
    imports: [GreyListRoutingModule, WbListModule],
})
export class GreyListModule {}
