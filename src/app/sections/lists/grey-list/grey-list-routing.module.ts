import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../../auth';
import { PaymentGreyListComponent } from './components/payment-grey-list/payment-grey-list.component';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GreyListComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                children: [
                    {
                        path: 'payments',
                        component: PaymentGreyListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                    },
                    {
                        path: '',
                        redirectTo: 'payments',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GreyListRoutingModule {}
