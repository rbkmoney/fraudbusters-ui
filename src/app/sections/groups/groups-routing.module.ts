import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../auth';
import { AuthGuard } from '../../auth/auth-guard';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
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
                        path: 'new',
                        component: CreateGroupComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: ':id',
                        component: EditGroupComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsRoutingModule {}
