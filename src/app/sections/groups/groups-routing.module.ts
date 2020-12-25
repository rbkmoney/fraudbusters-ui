import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from '../audit/audit.component';
import { GroupsComponent } from './groups.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { EditGroupComponent } from './edit-group/edit-group.component';
import { AuthGuard } from '../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: GroupsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
        children: [
            {
                path: 'new',
                component: CreateGroupComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
            {
                path: ':id',
                component: EditGroupComponent,
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
export class GroupsRoutingModule {}
