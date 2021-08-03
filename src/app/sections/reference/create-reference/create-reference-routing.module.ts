import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../../auth';
import { CreatePaymentReferenceComponent } from './components';
import { CreateReferenceComponent } from './create-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CreateReferenceComponent,
                children: [
                    {
                        path: 'payment',
                        component: CreatePaymentReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class CreateReferenceRoutingModule {}
