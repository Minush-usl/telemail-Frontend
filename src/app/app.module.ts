import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MailBodyComponent } from './mail-body/mail-body.component';
import { AddressFormComponent } from './mail-body/address-form/address-form.component';
import { MessagesBoxComponent } from './mail-body/messages-box/messages-box.component';
import { BtnsSectionComponent } from './mail-body/btns-section/btns-section.component';
import { AgGridModule } from 'ag-grid-angular';
import { EmailCellRendererComponent } from './ag-grid/cell-renderer/email-cell-renderer/email-cell-renderer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MailBodyComponent,
    AddressFormComponent,
    MessagesBoxComponent,
    BtnsSectionComponent,
    EmailCellRendererComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([EmailCellRendererComponent])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
