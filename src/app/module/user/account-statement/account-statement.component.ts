import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AccountStatementComponent implements OnInit {
  accountData:any=[];
  constructor() { }

  ngOnInit() {
    this.accountData=[{
      match:"India Legends V Shri lanka Legends (MATCH_ODDS)",
      credit_debit:"3000",
      balance:"24567",
      date:"12-22-1222 4:30 PM"
    }]
  }

}
