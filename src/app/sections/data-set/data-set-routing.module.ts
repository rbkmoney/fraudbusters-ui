import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { CreateDataSetComponent } from './create/create-data-set.component';
import { DataSetComponent } from './data-set.component';
import { EditDataSetComponent } from './edit/edit-data-set.component';
import { TestingDataSetComponent } from './testing/testing-data-set.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DataSetComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'new',
                        component: CreateDataSetComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    // {
                    //     path: ':id',
                    //     component: EditDataSetComponent,
                    //     canActivate: [AuthGuard],
                    //     data: { roles: [Roles.fraudOfficer] },
                    //     children: [
                    //         {
                    //             path: 'testing',
                    //             component: TestingDataSetComponent,
                    //             canActivate: [AuthGuard],
                    //             data: { roles: [Roles.fraudOfficer] },
                    //         },
                    //     ],
                    // },
                    {
                        path: ':id/testing',
                        component: TestingDataSetComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: ':id',
                        component: EditDataSetComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DataSetRoutingModule {}
