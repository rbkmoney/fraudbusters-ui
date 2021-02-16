import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';

import { AppComponent } from './app.component';
import { ConfigModule, ConfigService } from './config';
import { ContainerModule } from './container';
import { initializer } from './initializer';
import { SectionsModule } from './sections/sections.module';
import { NavigateMenuModule } from './shared/components/navigate-menu/navigate-menu.module';
import { LAYOUT_GAP_L, LAYOUT_GAP_M, LAYOUT_GAP_S } from './tokens';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        ConfigModule,
        BrowserAnimationsModule,
        HttpClientModule,
        KeycloakAngularModule,
        NavigateMenuModule,
        SectionsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        RouterModule,
        MatButtonModule,
        MatMenuModule,
        FlexModule,
        MatDividerModule,
        ContainerModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initializer,
            multi: true,
            deps: [ConfigService, KeycloakService],
        },
        {
            provide: LAYOUT_GAP_S,
            useValue: '8px',
        },
        {
            provide: LAYOUT_GAP_M,
            useValue: '16px',
        },
        {
            provide: LAYOUT_GAP_L,
            useValue: '24px',
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
