import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../../auth';
import { AuthGuard } from '../../../auth/auth-guard';
import { AddRowWhiteListComponent } from './add-row-white-list/add-row-white-list.component';
import { WhiteListComponent } from './white-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'white',
                component: WhiteListComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                children: [
                    {
                        path: 'new',
                        component: AddRowWhiteListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class WhiteListRoutingModule {}
