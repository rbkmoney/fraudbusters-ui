import { NgModule } from '@angular/core';

import { CreateDefaultReferenceModule } from './create-default-reference';
import { DefaultReferenceRoutingModule } from './default-reference-routing.module';

@NgModule({
    imports: [DefaultReferenceRoutingModule, CreateDefaultReferenceModule],
})
export class DefaultReferenceModule {}
