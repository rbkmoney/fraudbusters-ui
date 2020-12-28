import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../auth';
import { AuthGuard } from '../../auth/auth-guard';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { GroupsReferenceComponent } from './groups-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'groups-reference',
                component: GroupsReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateGroupsReferenceComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsReferenceRoutingModule {}
