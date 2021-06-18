import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailBodyComponent } from './mail-body/mail-body.component';
import { EmailMessageComponent } from './mail-body/messages-box/email-message/email-message.component';

const routes: Routes = [
    {
        path: '', component: MailBodyComponent, children: [
            {path: "mails/:date", component: EmailMessageComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
  

