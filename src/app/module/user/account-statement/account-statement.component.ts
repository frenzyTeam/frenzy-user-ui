import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-account-statement',
  templateUrl: './account-statement.component.html',
  styleUrls: ['./account-statement.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AccountStatementComponent implements OnInit {
  accountData:any=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userService.getTransactions().subscribe((resp) => {
      this.accountData = resp['data'];
    });
   
  }

}
