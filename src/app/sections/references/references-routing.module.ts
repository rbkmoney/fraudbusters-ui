import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from '../audit/audit.component';
import { ReferencesComponent } from './references.component';
import { CreateReferenceComponent } from './create-reference/create-reference.component';
import { AuthGuard } from '../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: ReferencesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer'] },
        children: [
            {
                path: 'new',
                component: CreateReferenceComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ReferencesRoutingModule {}
