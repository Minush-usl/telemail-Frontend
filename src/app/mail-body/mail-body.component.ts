import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { MailUser } from '../interfaces';
import { UserMailService } from '../services/user-mail.service'

@Component({
  selector: 'app-mail-body',
  templateUrl: './mail-body.component.html',
  styleUrls: ['./mail-body.component.scss']
})
export class MailBodyComponent implements OnInit, OnDestroy {

  private _emailUser$ = new BehaviorSubject(null);

  public get emailUser$(): Observable<MailUser> {
    return this._emailUser$.asObservable();
  }

  private userSub: Subscription;


  constructor(
    private userMailService: UserMailService
  ) { }

  ngOnInit() {
    const address = this.userMailService.getCurrentUser()
    if (address) {
      this._emailUser$.next(address)
    } else {
      this.userSub = this.userMailService.createUser().subscribe(
        () => this._emailUser$.next(this.userMailService.getCurrentUser())
      )
    }
  }

  ngOnDestroy(): void {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
  }

  public changeUser(newUser: MailUser): void {
    this._emailUser$.next(newUser)
  }

}
