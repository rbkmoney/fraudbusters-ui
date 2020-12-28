import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Roles } from '../../auth';
import { AuthGuard } from '../../auth/auth-guard';
import { AuditComponent } from './audit.component';

const routes: Routes = [
    {
        path: '',
        component: AuditComponent,
        canActivate: [AuthGuard],
        data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuditRoutingModule {}
