import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatesComponent } from '../templates/templates.component';
import { AuthGuard, Roles } from '../../auth';
import { PaymentTemplatesComponent } from '../templates/components/payment-templates/payment-templates.component';
import { TestingComponent } from './testing.component';
import { HistoricalInspectResultsDataComponent } from '../historical-data/components/inspect-results/historical-inspect-results-data.component';
import { PaymentDataSetsComponent } from './components/payment-data-sets/payment-data-sets.component';
import { EmulationTemplateComponent } from './components/emulation/template/emulation-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: TestingComponent,
                canActivate: [AuthGuard],
                data: { roles: [Roles.fraudOfficer] },
                children: [
                    {
                        path: 'data-sets',
                        component: PaymentDataSetsComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                    {
                        path: 'emulation',
                        component: EmulationTemplateComponent,
                        canActivate: [AuthGuard],
                        data: { roles: [Roles.fraudOfficer] },
                    },
                ],
            },
        ]),
    ],
    exports: [RouterModule],
})
export class TestingModule {}
