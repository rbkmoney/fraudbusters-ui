import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WbListComponent } from './wb-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists',
                component: WbListComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class WbListRoutingModule {}
