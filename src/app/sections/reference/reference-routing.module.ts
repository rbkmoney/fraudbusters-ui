import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'new',
                loadChildren: () => import('./create-reference').then((m) => m.CreateReferenceModule),
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ReferenceRoutingModule {}
