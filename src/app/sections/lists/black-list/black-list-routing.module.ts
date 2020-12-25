import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../../auth/auth-guard';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';
import { BlackListComponent } from './black-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/black',
                component: BlackListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
            {
                path: 'lists/black/new',
                component: AddRowBlackListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class BlackListRoutingModule {}
