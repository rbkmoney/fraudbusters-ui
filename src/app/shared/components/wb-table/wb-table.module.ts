import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { WbTableComponent } from './wb-table.component';

@NgModule({
    imports: [MatTableModule, MatSortModule, CommonModule, MatIconModule],
    declarations: [WbTableComponent],
    exports: [WbTableComponent],
})
export class WbTableModule {}
