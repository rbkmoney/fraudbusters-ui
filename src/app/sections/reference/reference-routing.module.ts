import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { ReferenceComponent } from './reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ReferenceRoutingModule {}
