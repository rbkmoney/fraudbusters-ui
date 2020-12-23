import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuditComponent } from './audit.component';
import { AuthGuard } from '../../auth/auth-guard';

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
