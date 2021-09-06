import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AppUserService } from '../appUser.service';

@Component({
  selector: 'app-transfer-account',
  templateUrl: './transfer-account.component.html',
  styleUrls: ['./transfer-account.component.css']
})
export class TransferAccountComponent implements OnInit {

  accounts : Account[];

  errorMessage : string;
  //accountName : string;
  accountIdFrom : number;
  accountIdTo : number;
  accountType : string;
  amountToTransfer : number;

  constructor(private accountService: AccountService, private appUserService: AppUserService, private router: Router) { }

  submit(transferForm: NgForm): void {
    console.log("Submit", transferForm.value);
    this.accountService.transfer(
      this.accountIdFrom,
      this.accountIdTo,
      this.amountToTransfer
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
