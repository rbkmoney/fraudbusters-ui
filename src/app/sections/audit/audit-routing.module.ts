import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditComponent } from './audit.component';
import { AuthGuard } from '../../auth/auth-guard';

const routes: Routes = [
    {
        path: '',
        component: AuditComponent,
        canActivate: [AuthGuard],
        data: { roles: ['fraud-officer', 'fraud-monitoring'] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuditRoutingModule {}
