import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from './account';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  private apiServerUrl = environment.apiBaseUrl;


constructor(private http: HttpClient) { }

  public getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>(`${this.apiServerUrl}/account-controller/readAll`);
  }

  public createAccounts(account: Account): Observable<Account> {
    return this.http.post<Account>(`${this.apiServerUrl}/account-controller/create`, account);
  }

  public updateAccounts(account: Account): Observable<Account> {
    return this.http.put<Account>(`${this.apiServerUrl}/account-controller/update`, account);
  }

  public deleteAccounts(accountId: number): Observable<Account> {
    return this.http.delete<Account>(`${this.apiServerUrl}/account-controller/delete/${accountId}`);
  }




}
