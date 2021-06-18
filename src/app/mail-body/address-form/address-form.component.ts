import { Component, Input} from '@angular/core';
import { Observable } from 'rxjs';
import { UserMailService } from '../../services/user-mail.service';
import { MailUser } from '../../interfaces'

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {

  @Input() emailUser$: Observable<MailUser>;

  constructor() { }
}
