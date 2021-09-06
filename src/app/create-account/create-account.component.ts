import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { RegistrationDto } from '../model/registration-dto';
import { UserLoginService } from '../userLogin.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  errorMessage : string;
  firstName : any;
  lastName : any;
  birthDate : any;
  phoneNumber : any;
  emailId : any;
  password : any;
  confirmPassword : any

  constructor(private userLoginService: UserLoginService, private router: Router) { }

  submit(createAccountForm: NgForm): void {
    console.log("Submit", createAccountForm.value);
    this.userLoginService.register({
      firstName : this.firstName,
      lastName : this.lastName,
      birthDate : this.birthDate,
      phoneNumber : this.phoneNumber,
      emailId : this.emailId,
      password : this.password,
      confirmPassword : this.confirmPassword

    } as RegistrationDto).toPromise()
    .then(result => {
      console.log("Success:", result);
      this.router.navigate(["/userLogin"]);
    })
    .catch(e => {
      // handle when something goes wrong or bad credentials
      this.errorMessage = e.message;
      console.error(e);
    });
  }

  ngOnInit(): void {
  }

}
