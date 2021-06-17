import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserMails, MailUser } from '../interfaces'
 
@Injectable({
  providedIn: 'root'
})
export class UserMailService {

  private readonly _emailAddressStorageKey = "email_address_content";

  constructor(
    private http: HttpClient
  ) { } 

  // public getUserAddress(telegramId: string): Observable<string> {
  //   return this.http.get<string>(`http://34.117.77.185/users/${telegramId}`);
  // }

  public createUser(): Observable<string> {

    const userData = {
      login: this.genLogin(),
      telegram_id: this.genId(),
      password: this.genPasswd()
    }
    this.setCurrentUser(userData)

    return this.http.post<string>(`http://34.117.77.185/users?login=${userData.login}&telegram_id=${userData.telegram_id}&password=${userData.password}`, {})
  }


  public getUserMails(telegramId: number): Observable<Array<UserMails>> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
    return  this.http.get<Array<UserMails>>(`http://34.117.77.185/mails?mail_days=3&telegram_id=${telegramId}`)
  }

  public getCurrentUser(): MailUser {
    return JSON.parse(localStorage.getItem(this._emailAddressStorageKey)) as MailUser || null
  }

  private setCurrentUser(user: MailUser): void {
    localStorage.setItem(this._emailAddressStorageKey, JSON.stringify(user))
  }

  public clearUser(): void {
    localStorage.clear()
  }

  private genId(): number {
    return Math.floor((Math.random() * 1000000000));
  }

  private genLogin(): string {
    return "t" + Math.random().toString(36).substring(7);
  }

  private genPasswd(): string {
    return Math.random().toString(36).substring(5);
  }

  public sendMessage() {
    const mail = "jn4ik2001@gmail.com"
    const msg = "hey dude"
    const id = 121114742
    return this.http.post(`http://34.117.77.185/mails?to_adr=${mail}&message=${msg}&telegram_id=${id}`, {})
  }  
}
