import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';

import { TagComponent } from './tag.component';

@NgModule({
    imports: [CommonModule, MatIconModule, FlexLayoutModule],
    exports: [TagComponent],
    declarations: [TagComponent],
})
export class TagModule {}
