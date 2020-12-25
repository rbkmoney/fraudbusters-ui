import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CreateTemplateComponent } from './create-template.component';

@NgModule({
    declarations: [CreateTemplateComponent],
    imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
})
export class CreateTemplateModule {}
