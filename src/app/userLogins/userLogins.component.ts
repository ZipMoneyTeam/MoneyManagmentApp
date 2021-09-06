import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserLoginService } from '../userLogin.service';

@Component({
  selector: 'app-userLogins',
  templateUrl: './userLogins.component.html',
  styleUrls: ['./userLogins.component.css']
})
export class UserLoginsComponent implements OnInit {

  constructor(private userLoginService: UserLoginService) { }

  submit(loginForm: NgForm): void {
    console.log("Submit", loginForm.value);
    this.userLoginService.login({
      emailId: loginForm.value["userName"],
      password: loginForm.value["password"]
    }).toPromise()
    .then(result => console.log("Success:", result))
    .catch(e => console.error(e));
  }

  ngOnInit(): void {
  }

}
