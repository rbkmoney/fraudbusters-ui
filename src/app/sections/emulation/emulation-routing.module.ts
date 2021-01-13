import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'template',
        pathMatch: 'full',
    },
    {
        path: 'template',
        loadChildren: () => import('./template').then((m) => m.EmulationTemplateModule),
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class EmulationRoutingModule {}
