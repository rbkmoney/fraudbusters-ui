import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { TemplatesModule } from './templates/templates.module';
import { ReferencesModule } from './references/references.module';
import { GroupsModule } from './groups/groups.module';
import { CreateTemplateModule } from './templates/create-template/create-template.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import {EditTemplateModule} from './templates/edit-template/edit-template.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        CoreModule,
        MatMenuModule,
        MatSidenavModule,
        MatListModule,
        MatSliderModule,
        AppRoutingModule,
        TemplatesModule,
        CreateTemplateModule,
        EditTemplateModule,
        ReferencesModule,
        GroupsModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
