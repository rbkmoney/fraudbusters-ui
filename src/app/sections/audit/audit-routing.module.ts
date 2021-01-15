import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../auth';
import { AuditComponent } from './audit.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AuditComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer, Roles.fraudMonitoring] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AuditRoutingModule {}
