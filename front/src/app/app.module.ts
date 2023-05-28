import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiLinkModule } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './bones/header/header.component';
import { SectionComponent } from './bones/section/section.component';
import { TuiIslandModule } from '@taiga-ui/kit';
import { StoreModule } from '@ngrx/store';
import { reducer, rootFeatureKey } from './store/reducers/root.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RootEffects } from './store/reducers/root.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    HeaderComponent,
    SectionComponent,
    TuiIslandModule,
    TuiLinkModule,
    StoreModule.forRoot({
      [rootFeatureKey]: reducer,
    }, {}),
    EffectsModule.forRoot([RootEffects]),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
