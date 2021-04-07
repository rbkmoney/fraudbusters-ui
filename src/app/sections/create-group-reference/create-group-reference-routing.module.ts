import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { CreateP2pReferenceComponent, CreatePaymentReferenceComponent } from './components';
import { CreateGroupReferenceComponent } from './create-group-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CreateGroupReferenceComponent,
                children: [
                    {
                        path: 'payment',
                        component: CreatePaymentReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'p2p',
                        component: CreateP2pReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class CreateGroupReferenceRoutingModule {}
