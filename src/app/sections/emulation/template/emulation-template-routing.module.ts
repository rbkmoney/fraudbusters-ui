import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmulationTemplateComponent } from './emulation-template.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'emulation/template',
                component: EmulationTemplateComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class EmulationTemplateRoutingModule {}
