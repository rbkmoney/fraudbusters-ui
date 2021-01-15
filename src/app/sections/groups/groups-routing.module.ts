import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { GroupsComponent } from './groups.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: GroupsComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsRoutingModule {}
