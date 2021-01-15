import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { CreateGroupReferenceComponent } from './create-group-reference/create-group-reference.component';
import { GroupReferenceComponent } from './group-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GroupReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateGroupReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupReferenceRoutingModule {}
