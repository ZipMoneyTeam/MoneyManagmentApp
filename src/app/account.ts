import { AppUser } from "./appUser";

export interface Account {
    accountId:number
    accountName:string;
    accountType:string;
    amount:number;
    appUser: AppUser;

}