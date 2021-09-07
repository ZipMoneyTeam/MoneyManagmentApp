import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../appUser.service';
@Component({
  selector: 'app-funds-transfer',
  templateUrl: './funds-transfer.component.html',
  styleUrls: ['./funds-transfer.component.css']
})
export class FundsTransferComponent implements OnInit {

  constructor(private router: Router, public appUserService : AppUserService) { }

  ngOnInit(): void {
  }

}
