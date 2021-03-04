import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ShowMorePanelComponent } from './show-more-panel.component';

@NgModule({
    declarations: [ShowMorePanelComponent],
    imports: [FlexModule, MatCardModule, MatButtonModule],
    exports: [ShowMorePanelComponent],
})
export class ShowMorePanelModule {}
