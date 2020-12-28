import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../../auth';
import { AuthGuard } from '../../../auth/auth-guard';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'grey',
                component: GreyListComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                children: [
                    {
                        path: 'new',
                        component: AddRowGreyListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GreyListRoutingModule {}
