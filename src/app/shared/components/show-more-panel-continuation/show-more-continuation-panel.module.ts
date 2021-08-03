import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { ShowMoreContinuationPanelComponent } from './show-more-continuation-panel.component';

@NgModule({
    declarations: [ShowMoreContinuationPanelComponent],
    imports: [FlexModule, MatCardModule, MatButtonModule],
    exports: [ShowMoreContinuationPanelComponent],
})
export class ShowMoreContinuationPanelModule {}
