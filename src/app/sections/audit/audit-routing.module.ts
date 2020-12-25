import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from '../../auth/auth-guard';
import { AuditComponent } from './audit.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'audit',
                component: AuditComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer', 'fraud-monitoring'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class AuditRoutingModule {}
