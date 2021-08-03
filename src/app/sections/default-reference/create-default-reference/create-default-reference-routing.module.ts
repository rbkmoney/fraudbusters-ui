import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../../auth';
import { CreateDefaultPaymentReferenceComponent } from './components';
import { CreateDefaultReferenceComponent } from './create-default-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: CreateDefaultReferenceComponent,
                children: [
                    {
                        path: 'payment',
                        component: CreateDefaultPaymentReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class CreateDefaultReferenceRoutingModule {}
