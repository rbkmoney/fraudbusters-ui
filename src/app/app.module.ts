import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { initializer } from './initializer';
import { AuditModule } from './sections/audit/audit.module';
import { EmulationTemplateModule } from './sections/emulation/template/emulation-template.module';
import { GroupsReferenceModule } from './sections/groups-reference/groups-reference.module';
import { GroupsModule } from './sections/groups/groups.module';
import { BlackListModule } from './sections/lists/black-list/black-list.module';
import { GreyListModule } from './sections/lists/grey-list/grey-list.module';
import { WhiteListModule } from './sections/lists/white-list/white-list.module';
import { FraudUploaderListModule } from './sections/load/fraud-uploader/fraud-uploader.module';
import { ReferencesModule } from './sections/references/references.module';
import { TemplatesModule } from './sections/templates/templates.module';
import { NavigateMenuModule } from './shared/components/navigate-menu/navigate-menu.module';

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
        ReferencesModule,
        GroupsModule,
        AuditModule,
        GroupsReferenceModule,
        FraudUploaderListModule,
        EmulationTemplateModule,
        BlackListModule,
        GreyListModule,
        WhiteListModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        HttpClientModule,
        KeycloakAngularModule,
        NavigateMenuModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [KeycloakService],
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
