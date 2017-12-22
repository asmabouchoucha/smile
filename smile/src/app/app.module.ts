import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MailServerService } from "./mail-server.service";
import { NewMailComponent } from './new-mail/new-mail.component';
import { InboxComponent } from './inbox/inbox.component';
import { HeaderComponent } from './header/header.component';
import { MailDetailsComponent } from './new-mail/mail-details/mail-details.component';
import { SentMailsComponent } from './sent-mails/sent-mails.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NewMailComponent,
    InboxComponent,
    HeaderComponent,
    MailDetailsComponent,
    SentMailsComponent
  ],
  imports: [
    BrowserModule,
     AppRoutingModule,
     FormsModule, 
  
  ],
  providers: [MailServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
