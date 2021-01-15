import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'fraud',
        pathMatch: 'full',
    },
    {
        path: 'fraud',
        loadChildren: () => import('./fraud-uploader').then((m) => m.FraudUploaderListModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoadRoutingModule {}
