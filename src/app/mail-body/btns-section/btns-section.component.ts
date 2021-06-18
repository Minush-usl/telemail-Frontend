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

  public go() {
    // const str = "Вот ссылка а если попробывать на нормальное языке https://angular.io/guide/inputs-outputs "
    // let test = str.match("((http|https):\/\/)?(www.)?([a-z0-9-]+\.)+[a-z]{2,6}");
    let text = "Hey dude check that shi"
    // let found = /((http|https):\/\/(www\.)?[a-zа-я0-9-]+\.[a-zа-я0-9-]{2,6})/i.exec(text);
    let found = /(https?:\/\/[^\s]+)/g.exec(text);
    console.log(found)
  }



}
