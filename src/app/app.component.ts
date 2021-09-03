
import { Component, OnInit } from '@angular/core';
import { AppUser } from './appUser';
import { AppUserService } from './appUser.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public appUsers:AppUser[];


  title='';
  constructor(private appUserService:AppUserService) { }

  ngOnInit( ): void {
    this.getAppUsers();
  }

  public getAppUsers(): void {
    this.appUserService.getAppUsers().subscribe(
      (response:AppUser[])=>{
        this.appUsers=response;
        console.log(this.appUsers);
      }
    )
   }

}
