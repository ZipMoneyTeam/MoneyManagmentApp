import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AppUserService } from '../appUser.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  accounts : Account[];

  errorMessage : string;
  //accountName : string;
  accountId : number;
  accountType : string;
  amountToWithdraw : number;

  constructor(private accountService: AccountService, public appUserService: AppUserService, private router: Router) { }

  submit(withdrawForm: NgForm): void {
    console.log("Submit", withdrawForm.value);
    this.accountService.withdraw(
      this.accountId,
      this.amountToWithdraw
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
