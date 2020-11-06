import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReferencesComponent } from './references.component';
import { CreateReferenceComponent } from './create-reference/create-reference.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'references',
                component: ReferencesComponent,
            },
            {
                path: 'references/new',
                component: CreateReferenceComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class ReferencesRoutingModule {}
