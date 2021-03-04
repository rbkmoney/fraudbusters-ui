import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { P2pReferencesComponent } from './components/p2p-references/p2p-references.component';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { GroupsReferenceComponent } from './groups-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GroupsReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'p2p',
                        component: P2pReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
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
export class GroupsReferenceRoutingModule {}
