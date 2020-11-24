import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { AuthGuard } from '../../auth/auth-guard';

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
