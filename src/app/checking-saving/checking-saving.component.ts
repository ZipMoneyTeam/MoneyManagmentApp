import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AppUserService } from '../appUser.service';

@Component({
  selector: 'app-checking-saving',
  templateUrl: './checking-saving.component.html',
  styleUrls: ['./checking-saving.component.css']
})
export class CheckingSavingComponent implements OnInit {

  errorMessage : string;
  accountName : any;
  accountType : any;
  amount : any;
  //emailId : any;


  constructor(private accountService: AccountService, private router: Router, public appUserService: AppUserService) { }

  submit(createCheckingOrSavingForm: NgForm): void {
    console.log("Submit", createCheckingOrSavingForm.value);
    this.accountService.createAccount({
      accountName : this.accountName,
      accountType : this.accountType,
      amount : this.amount,
      appUser : this.appUserService.getCurrentUser()
    } as Account).toPromise()
    .then(result => {
      console.log("Success:", result);
      this.router.navigate(["/funds-transfer"]);
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
