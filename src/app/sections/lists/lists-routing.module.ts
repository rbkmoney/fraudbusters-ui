import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { BlackListComponent } from './components/black-list/black-list.component';
import { GreyListComponent } from './components/grey-list/grey-list.component';
import { WhiteListComponent } from './components/white-list/white-list.component';
import { ListsComponent } from './lists.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ListsComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'white-list',
                        component: WhiteListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'black-list',
                        component: BlackListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'grey-list',
                        component: GreyListComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: '',
                        redirectTo: 'black-list',
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ListsRoutingModule {}
