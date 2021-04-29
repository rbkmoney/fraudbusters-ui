import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'new',
                loadChildren: () => import('./create-default-reference').then((m) => m.CreateDefaultReferenceModule),
            },
        ]),
    ],
    exports: [RouterModule],
})
export class DefaultReferenceRoutingModule {}
