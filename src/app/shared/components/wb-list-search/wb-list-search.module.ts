import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { WbListSearchComponent } from './wb-list-search.component';

@NgModule({
    declarations: [WbListSearchComponent],
    imports: [ReactiveFormsModule, FlexModule, MatFormFieldModule, MatInputModule],
    exports: [WbListSearchComponent],
})
export class WbListSearchModule {}
