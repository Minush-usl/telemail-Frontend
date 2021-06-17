import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserMailService } from '../../services/user-mail.service'

@Component({
  selector: 'app-btns-section',
  templateUrl: './btns-section.component.html',
  styleUrls: ['./btns-section.component.scss']
})
export class BtnsSectionComponent implements OnInit {

  @Output() userMailEvent = new EventEmitter();

  constructor(
    private userMailService: UserMailService
  ) { }

  ngOnInit() {
  }

  public getNewUser() {
    this.userMailService.createUser().subscribe(
      () => {
        this.userMailEvent.emit(this.userMailService.getCurrentUser())
      }
    )
  }



}
