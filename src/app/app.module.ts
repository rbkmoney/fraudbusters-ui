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
import { TemplatesModule } from './sections/templates/templates.module';
import { ReferencesModule } from './sections/references/references.module';
import { GroupsModule } from './sections/groups/groups.module';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { GroupsReferenceModule } from './sections/groups-reference/groups-reference.module';
import { MenuListItemComponent } from './shared/components/menu-list-item/menu-list-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BlackListModule } from './sections/lists/black-list/black-list.module';
import { WhiteListModule } from './sections/lists/white-list/white-list.module';
import { GreyListModule } from './sections/lists/grey-list/grey-list.module';
import { FraudUploaderListModule } from './sections/load/fraud-uploader/fraud-uploader.module';
import { EmulationTemplateModule } from './sections/emulation/template/emulation-template.module';

@NgModule({
    declarations: [AppComponent, MenuListItemComponent],
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
        ReferencesModule,
        GroupsModule,
        GroupsReferenceModule,
        FraudUploaderListModule,
        EmulationTemplateModule,
        BlackListModule,
        GreyListModule,
        WhiteListModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
