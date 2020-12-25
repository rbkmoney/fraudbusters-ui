import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from '../audit/audit.component';
import { GroupsReferenceComponent } from './groups-reference.component';
import { CreateGroupsReferenceComponent } from './create-groups-reference/create-groups-reference.component';
import { AuthGuard } from '../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: GroupsReferenceComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
        children: [
            {
                path: 'new',
                component: CreateGroupsReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GroupsReferenceRoutingModule {}
