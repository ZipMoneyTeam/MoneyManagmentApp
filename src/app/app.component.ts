
import { Component, OnInit } from '@angular/core';
import { AppUser } from './appUser';
import { AppUserService } from './appUser.service';
import { UserLogin } from './userLogin';
import { UserLoginService } from './userLogin.service';
import { Account } from './account';
import { AccountService } from './account.service';
import { Transaction } from './transaction';
import { TransactionService } from './transaction.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public appUsers:AppUser[];
  public userLogins:UserLogin[];
  public accounts:Account[];
  public transactions:Transaction[];

  title='';
  constructor(
    private appUserService:AppUserService,
    private userLoginService:UserLoginService,
    private accountService:AccountService,
    private transactionService:TransactionService) { }

  ngOnInit( ): void {
    //this.getAppUsers();
    //this.getAccounts();
    // this.getTransactions();
    //this.getUserLogins();
  }
  
  public createAccount(account:Account):void{
    this.accountService.createAccount(account).subscribe(
      (response:Account)=>{
        console.log(response);
        this.getAccounts();
      }
    )
  }

  public getAppUsers(): void {
    this.appUserService.getAppUsers().subscribe(
      (response:AppUser[])=>{
        this.appUsers=response;
        console.log(this.appUsers);
      }
    )
   }

   public getAccounts(): void {
    this.accountService.getAccounts().subscribe(
      (response:Account[])=>{
        this.accounts=response;
        console.log(this.accounts);
      }
    )
   }

  //  public getTransactions(): void {
  //   this.transactionService.getTransactions().subscribe(
  //     (response:Transaction[])=>{
  //       this.transactions=response;
  //       console.log(this.transactions);
  //     }
  //   )
  //  }

   public getUserLogins(): void {
    this.userLoginService.getUserLogins().subscribe(
      (response:UserLogin[])=>{
        this.userLogins=response;
        console.log(this.userLogins);
      }
    )
   }

}
