import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { HistoricalPaymentsDataComponent } from './components/payments/historical-payments-data.component';
import { HistoricalDataComponent } from './historical-data.component';
import { HistoricalChargebacksDataComponent } from './components/chargebacks/historical-chargebacks-data.component';
import { HistoricalInspectResultsDataComponent } from './components/inspect-results/historical-inspect-results-data.component';
import { HistoricalFraudPaymentsDataComponent } from './components/fraud-payments/historical-fraud-payments-data.component';
import { HistoricalRefundsDataComponent } from './components/refunds/historical-refunds-data.component';

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
                        path: 'inspect-results',
                        component: HistoricalInspectResultsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'payments',
                        component: HistoricalPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'refunds',
                        component: HistoricalRefundsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'fraud-payments',
                        component: HistoricalFraudPaymentsDataComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'chargebacks',
                        component: HistoricalChargebacksDataComponent,
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
