import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FraudUploaderComponent } from './fraud-uploader.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'load/fraud',
                component: FraudUploaderComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class FraudUploaderRoutingModule {}
