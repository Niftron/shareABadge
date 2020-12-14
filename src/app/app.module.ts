import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BadgesComponent } from './badges/badges.component';
import { TransferBadgeComponent } from './transfer-badge/transfer-badge.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgesComponent,
    TransferBadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
