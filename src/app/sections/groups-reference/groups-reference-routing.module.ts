import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GroupsReferenceComponent } from './groups-reference.component';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { AuthGuard } from '../../auth/auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'groups-reference',
                component: GroupsReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
            {
                path: 'groups-reference/new',
                component: CreateGroupsReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GroupsReferenceRoutingModule {}
