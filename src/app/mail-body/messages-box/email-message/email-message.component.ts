import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserMailService } from 'src/app/services/user-mail.service';
import { UserMails } from 'src/app/interfaces';

@Component({
  selector: 'app-email-message',
  templateUrl: './email-message.component.html',
  styleUrls: ['./email-message.component.scss']
})
export class EmailMessageComponent implements OnInit {

  public chosenEmail: UserMails;
  private emailId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userMailService: UserMailService
  ) { }

  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(
          (params) => {
            this.emailId = params['id']
            if (this.emailId) {
              return this.userMailService.getUserMails(
                this.userMailService.getCurrentUser().telegram_id
              )
            }
          }
        )
      ).subscribe(
        (mails: Array<UserMails>) => {
          this.chosenEmail = mails.find(email => email.date == this.emailId)
          console.log(this.chosenEmail)
        }
      )
  }

  public back(): void {
    this.router.navigate([''])
  }

}
