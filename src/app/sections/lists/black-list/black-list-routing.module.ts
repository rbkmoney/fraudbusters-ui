import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../../auth';
import { AuthGuard } from '../../../auth/auth-guard';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';
import { BlackListComponent } from './black-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'black',
                component: BlackListComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                children: [
                    {
                        path: 'new',
                        component: AddRowBlackListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class BlackListRoutingModule {}
