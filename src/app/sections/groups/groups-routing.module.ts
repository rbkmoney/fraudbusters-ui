import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { PaymentReferencesComponent } from './components/payment-references/payment-references.component';
import { PaymentGroupsComponent } from './components/payments-groups/payment-groups.component';
import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GroupsComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'list',
                        component: PaymentGroupsComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'references',
                        component: PaymentReferencesComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'list',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsRoutingModule {}
