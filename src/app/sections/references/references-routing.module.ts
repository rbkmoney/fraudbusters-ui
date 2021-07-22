import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { ReferencesComponent } from './references.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ReferencesComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'payments',
                        component: PaymentReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
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
export class ReferencesRoutingModule {}
