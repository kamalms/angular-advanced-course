import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {AuInputModule} from 'au-input';
import {AuTabPanelModule} from "au-tab-panel";
import {AuModalModule} from "./au-modal/au-modal.module";
import {HttpClientModule} from "@angular/common/http";
import { AuuModalComponent } from './auu-modal/auu-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AuuModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuInputModule,
    AuTabPanelModule,
    AuModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
