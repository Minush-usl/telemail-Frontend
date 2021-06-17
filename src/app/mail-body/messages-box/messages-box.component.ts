import { Component, Input, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { MailUser, UserMails } from "src/app/interfaces";
import { UserMailService } from "../../services/user-mail.service";
import { EmailCellRendererComponent } from "../../ag-grid/cell-renderer/email-cell-renderer";

@Component({
  selector: "app-messages-box",
  templateUrl: "./messages-box.component.html",
  styleUrls: ["./messages-box.component.scss"],
})
export class MessagesBoxComponent implements OnInit {
  @Input() emailUser$: Observable<MailUser>;

  public userMails: Array<UserMails>;

  private gridApi;
  private gridColumnApi;

  public columnDefs;
  public rowData;
  public frameworkComponents;

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
      }
    ];
    this.frameworkComponents = {
      emailCellRenderer: EmailCellRendererComponent,
    };
  }

  ngOnInit() {
    this.emailUser$.subscribe((user: MailUser) => {
      this.userMailService
        .getUserMails(user.telegram_id)
        .subscribe((mails: Array<UserMails>) => console.log(mails));
    });
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    this.rowData = [
      {Sender: "hey dude", Topic: "some", Check: "heh"},
      {Sender: "dude", Topic: "some", Check: "heh"},
      {Sender: "hey ", Topic: "some", Check: "heh"},

    ]
  }

  // columnDefs = [
  //   { field: "Sender" },
  //   { field: "Topic" },
  //   { field: "Check", cellRenderer: 'emailCellRenderer' }
  // ];

  // rowData = [
  //   { Sender: "afafa", Topic: "some funy stuff" },
  //   { Sender: "fafa", Topic: "some funy stuff"},
  //   { Sender: "jjjj", Topic: "some funy stuff"},
  // ];
}
