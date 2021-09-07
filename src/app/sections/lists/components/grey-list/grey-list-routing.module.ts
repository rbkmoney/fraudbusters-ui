import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../../../auth';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';
import { GreyListComponent } from './grey-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
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
