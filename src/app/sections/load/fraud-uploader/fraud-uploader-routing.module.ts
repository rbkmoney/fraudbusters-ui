import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, Roles } from '../../../auth';
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
