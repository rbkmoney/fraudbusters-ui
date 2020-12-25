import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../../auth/auth-guard';
import { AddRowWhiteListComponent } from './add-row-white-list/add-row-white-list.component';
import { WhiteListComponent } from './white-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/white',
                component: WhiteListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
            {
                path: 'lists/white/new',
                component: AddRowWhiteListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class WhiteListRoutingModule {}
