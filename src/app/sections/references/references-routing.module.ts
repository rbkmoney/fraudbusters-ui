import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../auth';
import { AuthGuard } from '../../auth/auth-guard';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
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
export class ReferencesRoutingModule {}
