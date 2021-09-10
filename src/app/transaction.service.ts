import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction} from './transaction';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private apiServerUrl = environment.apiBaseUrl;


constructor(private http: HttpClient) { }

  public getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiServerUrl}/transaction-controller/readAll`);
  }

//   public createTransactions(transaction: Transaction): Observable<Transaction> {
//     return this.http.post<Transaction>(`${this.apiServerUrl}/transaction-controller/create`, transaction);
//   }

//   public updateTransactions(transaction: Transaction): Observable<Transaction> {
//     return this.http.put<Transaction>(`${this.apiServerUrl}/transaction-controller/update`, transaction);
//   }

//   public deleteTransactions(transactionId: number): Observable<Transaction> {
//     return this.http.delete<Transaction>(`${this.apiServerUrl}/transaction-controller/delete/${transactionId}`);
//   }




}
