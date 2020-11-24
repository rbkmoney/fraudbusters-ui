import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FraudUploaderComponent } from './fraud-uploader.component';
import { AuthGuard } from '../../../auth/auth-guard';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'load/fraud',
                component: FraudUploaderComponent,
                canActivate: [AuthGuard],
                data: { roles: ['fraud-officer'] },
            },
        ]),
    ],
    exports: [RouterModule],
})
export class FraudUploaderRoutingModule {}
