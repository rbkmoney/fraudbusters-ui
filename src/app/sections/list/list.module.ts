import { NgModule } from '@angular/core';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

@NgModule({
    imports: [ListRoutingModule],
    declarations: [ListComponent],
})
export class ListModule {}
