import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { ReferencesComponent } from './references.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'references',
                component: ReferencesComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
            {
                path: 'references/new',
                component: CreateReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ReferencesRoutingModule {}
