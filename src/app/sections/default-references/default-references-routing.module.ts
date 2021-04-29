import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { DefaultP2pReferencesComponent } from './components/p2p-references/default-p2p-references.component';
import { DefaultPaymentReferencesComponent } from './components/payment-references/default-payment-references.component';
import { DefaultReferencesComponent } from './default-references.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DefaultReferencesComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'p2p',
                        component: DefaultP2pReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'payments',
                        component: DefaultPaymentReferencesComponent,
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
export class DefaultReferencesRoutingModule {}
