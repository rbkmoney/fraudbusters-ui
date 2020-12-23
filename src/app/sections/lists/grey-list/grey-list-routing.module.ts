import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GreyListComponent } from './grey-list.component';
import { AddRowGreyListComponent } from './add-row-grey-list/add-row-grey-list.component';
import { AuthGuard } from '../../../auth/auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/grey',
                component: GreyListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
            {
                path: 'lists/grey/new',
                component: AddRowGreyListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class GreyListRoutingModule {}
