import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserMailService } from '../../services/user-mail.service';
import { MailUser } from '../../interfaces'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {

  @Input() emailUser$: Observable<MailUser>;

  constructor(
    private userMailService: UserMailService
  ) { }

  ngOnInit() {

  }

}
