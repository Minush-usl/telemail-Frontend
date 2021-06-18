import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserMailService } from '../../services/user-mail.service'

@Component({
  selector: 'app-btns-section',
  templateUrl: './btns-section.component.html',
  styleUrls: ['./btns-section.component.scss']
})
export class BtnsSectionComponent implements OnDestroy {

  @Output() userMailEvent = new EventEmitter();

  private newUserSub: Subscription;

  constructor(
    private userMailService: UserMailService
  ) { }

  public getNewUser() {
     this.newUserSub = this.userMailService.createUser().subscribe(
      () => {
        this.userMailEvent.emit(this.userMailService.getCurrentUser())
      }
    )
  }

  ngOnDestroy(): void {
    if (this.newUserSub) {
      this.newUserSub.unsubscribe();
    }
  }
}
