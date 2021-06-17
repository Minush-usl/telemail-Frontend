import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MailUser } from '../interfaces';
import { UserMailService } from '../services/user-mail.service'

@Component({
  selector: 'app-mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.scss']
})
export class MailBodyComponent implements OnInit {

  private _emailUser$ = new BehaviorSubject(null);

  public get emailUser$(): Observable<MailUser> {
    return this._emailUser$.asObservable();
  }


  constructor(
    private userMailService: UserMailService
  ) { }

  ngOnInit() {
    const address = this.userMailService.getCurrentUser()
    if (address) {
      this._emailUser$.next(address)
    } else {
      this.userMailService.createUser().subscribe(
        () => this._emailUser$.next(this.userMailService.getCurrentUser())
      )
    }
  }

  public changeUser(newUser: MailUser): void {
    console.log("new user througn emit")
    this._emailUser$.next(newUser)
  }

}
