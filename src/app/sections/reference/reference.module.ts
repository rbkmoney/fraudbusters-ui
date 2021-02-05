import { NgModule } from '@angular/core';

import { CreateReferenceModule } from './create-reference';
import { ReferenceRoutingModule } from './reference-routing.module';

@NgModule({
    imports: [ReferenceRoutingModule, CreateReferenceModule],
})
export class ReferenceModule {}
