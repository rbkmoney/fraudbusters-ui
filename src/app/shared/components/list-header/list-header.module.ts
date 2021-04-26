import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { ListHeaderComponent } from './list-header.component';

const EXPORTED_DECLARATIONS = [ListHeaderComponent];

@NgModule({
    imports: [CommonModule, FlexLayoutModule, MatCardModule],
    exports: EXPORTED_DECLARATIONS,
    declarations: EXPORTED_DECLARATIONS,
})
export class ListHeaderModule {}
