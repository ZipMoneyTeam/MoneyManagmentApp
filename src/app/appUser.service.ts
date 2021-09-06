import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppUser } from './appUser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AppUserService {
  private apiServerUrl = environment.apiBaseUrl;
  private currentUser : AppUser = null;


constructor(private http: HttpClient) { }

  public getAppUsers(): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.apiServerUrl}/user-controller/readAll`);
  }

  public getAppUsersByEmailId(emailId: string): Observable<AppUser[]> {
    return this.http.get<AppUser[]>(`${this.apiServerUrl}/user-controller/read/${emailId}`);
  }

  public createAppUser(appUser: AppUser): Observable<AppUser> {
    return this.http.post<AppUser>(`${this.apiServerUrl}/user-controller/create`, appUser);
  }

  public updateAppUsers(appUser: AppUser): Observable<AppUser> {
    return this.http.put<AppUser>(`${this.apiServerUrl}/user-controller/update`, appUser);
  }

  public deleteAppUsers(appUserId: number): Observable<AppUser> {
    return this.http.delete<AppUser>(`${this.apiServerUrl}/user-controller/delete/${appUserId}`);
  }

  public getCurrentUser() : AppUser {
    return this.currentUser;
  }

  public setCurrentUser(appUser : AppUser){
    this.currentUser = appUser;
  }


}
