import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlackListComponent } from './black-list.component';
import { AddRowBlackListComponent } from './add-row-black-list/add-row-black-list.component';
import { AuthGuard } from '../../../auth/auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/black',
                component: BlackListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-monitoring'] },
            },
            {
                path: 'lists/black/new',
                component: AddRowBlackListComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-monitoring'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class BlackListRoutingModule {}
