import {NgModule} from '@angular/core';
import{Routes, RouterModule} from '@angular/router';
import { AuthenticationComponent } from "./authentication/authentication.component";
import { InboxComponent } from "./inbox/inbox.component";
import { NewMailComponent } from "./new-mail/new-mail.component";
import { MailDetailsComponent } from "./new-mail/mail-details/mail-details.component";
import { SentMailsComponent } from "./sent-mails/sent-mails.component";


const appRoutes: Routes =[
    { path:'', redirectTo:'/connexion', pathMatch:'full'},
       {path:'connexion', component:AuthenticationComponent},
       {path:'inbox', component:InboxComponent},
       {path:'sentMails', component:SentMailsComponent},
       {path:'newMail', component:NewMailComponent},
       {path:'maildetails/:id', component:MailDetailsComponent},




];

@NgModule ({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}
