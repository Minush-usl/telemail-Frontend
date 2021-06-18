import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { MailUser, UserMails } from "src/app/interfaces";
import { UserMailService } from "../../services/user-mail.service";
import { EmailCellRendererComponent } from "../../ag-grid/cell-renderer/email-cell-renderer";
import { interval } from "rxjs";
import { map } from "rxjs/operators";

@Component({
  selector: "app-messages-box",
  templateUrl: "./messages-box.component.html",
  styleUrls: ["./messages-box.component.scss"],
})
export class MessagesBoxComponent implements OnInit, OnDestroy {
  @Input() emailUser$: Observable<MailUser>;

  // public userMails$: BehaviorSubject<Array<UserMails>> = new BehaviorSubject<Array<UserMails>>([]);

  public userMails: Array<UserMails> = [];
  private gridApi;
  private gridColumnApi;

  public columnDefs;
  public rowData: Array<any> = [];
  public frameworkComponents;

  private iSub: Subscription;

  constructor(private userMailService: UserMailService) {
    this.columnDefs = [
      {
        field: "Sender",
      },
      {
        field: "Topic",
      },
      {
        field: "Check",
        cellRenderer: "emailCellRenderer",
        cellRendererParams: {
          clicked: function (field: any) {
            alert(`${field} was clicked`);
          },
        },
      },
    ];
    this.frameworkComponents = {
      emailCellRenderer: EmailCellRendererComponent,
    };
  }

  ngOnDestroy(): void {
    this.iSub.unsubscribe()
  }

  ngOnInit() {
    this.iSub = interval(5000).subscribe(() => {
      this.emailUser$.subscribe((user: MailUser) => {
        this.userMailService
          .getUserMails(user.telegram_id)
          .subscribe((mails: Array<UserMails>) => {
            this.userMails = mails;
            console.log(this.userMails)
            this.rowData = []
            mails.forEach((mail) => {
              this.rowData.push({
                Sender: mail.from_user,
                Topic: mail.title,
                Check: mail.date,
              });
            });
          });
      });
    },);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    let mailsArr: Array<any> = [];
  }
}
