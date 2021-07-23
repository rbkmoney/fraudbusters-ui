import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { HistoricalPaymentsDataComponent } from './components/payments/historical-payments-data.component';
import { HistoricalDataComponent } from './historical-data.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: HistoricalDataComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'payments',
                        component: HistoricalPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'refunds',
                        component: HistoricalPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'fraud-results',
                        component: HistoricalPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'chargebacks',
                        component: HistoricalPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class HistoricalDataRoutingModule {}
