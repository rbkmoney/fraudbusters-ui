import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Roles } from '../../../auth';
import { AuthGuard } from '../../../auth/auth-guard';
import { FraudUploaderComponent } from './fraud-uploader.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: FraudUploaderComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class FraudUploaderRoutingModule {}
