import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AppUserService } from '../appUser.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  accounts : Account[];

  errorMessage : string;
  //accountName : string;
  accountId : number;
  accountType : string;
  amountToDeposit : number;

  constructor(private accountService: AccountService, private appUserService: AppUserService, private router: Router) { }

  submit(depositForm: NgForm): void {
    console.log("Submit", depositForm.value);
    this.accountService.deposit(
      this.accountId,
      this.amountToDeposit
       ).toPromise()
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
    this.accountService.getAccountsByEmailId(this.appUserService.getCurrentUser().emailId)
    .toPromise()
    .then(result => console.log(this.accounts = result))
  }

}
