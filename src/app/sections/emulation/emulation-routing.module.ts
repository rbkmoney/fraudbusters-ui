import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: 'template',
        loadChildren: () => import('./template').then((m) => m.EmulationTemplateModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
})
export class EmulationRoutingModule {}
