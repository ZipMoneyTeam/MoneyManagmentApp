import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { AppUser } from '../appUser';
import { AppUserService } from '../appUser.service';
import { UserLoginService } from '../userLogin.service';

@Component({
  selector: 'app-userLogins',
  templateUrl: './userLogins.component.html',
  styleUrls: ['./userLogins.component.css']
})
export class UserLoginsComponent implements OnInit {

  errorMessage : string;
  emailId : any;
  password : any;

  constructor(private userLoginService: UserLoginService, private router: Router,
     private appUserService: AppUserService) { }

  submit(loginForm: NgForm): void {
    console.log("Submit", loginForm.value);
    this.userLoginService.login({
      emailId : this.emailId,
      password : this.password
    }).toPromise()
    .then(result => {
      console.log(result)
      return this.appUserService.getAppUsersByEmailId(this.emailId)
      .toPromise()
      .then(result => {
        console.log("Success:", result)
        this.appUserService.setCurrentUser(result as unknown as AppUser)
        this.router.navigate(["/funds-transfer"]);
      }) 
      .catch(e => this.handleError(e))
      })
      .catch(e => this.handleError(e)
      )}

  ngOnInit(): void {
  }

  handleError(e): void {
    this.errorMessage = e.message;
      console.error(e);
  }
}
