import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';
import { AppUserService } from '../appUser.service';

@Component({
  selector: 'app-view-account',
  templateUrl: './view-account.component.html',
  styleUrls: ['./view-account.component.css']
})
export class ViewAccountComponent implements OnInit {

  public accounts:Account[];
  
  constructor(private accountService:AccountService, public appUserService: AppUserService, router : Router) { }

  ngOnInit(): void {
    this.accountService.getAccountsByEmailId(this.appUserService.getCurrentUser().emailId)
    .toPromise()
    .then(result => console.log(this.accounts = result))
  }

  // public getAccounts(): void {
  //   this.accountService.getAccounts().subscribe(
  //     (response:Account[])=>{
  //       this.accounts=response;
  //       console.log(this.accounts);
  //     }
  //   )
  //  }

}
