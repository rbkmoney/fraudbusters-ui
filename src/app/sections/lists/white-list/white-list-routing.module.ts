import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WhiteListComponent } from './white-list.component';
import { AddRowWhiteListComponent } from './add-row-white-list/add-row-white-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'lists/white',
                component: WhiteListComponent,
            },
            {
                path: 'lists/white/new',
                component: AddRowWhiteListComponent,
            },
        ]),
    ],
    exports: [RouterModule],
})
export class WhiteListRoutingModule {}
