import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profit-loss',
  templateUrl: './profit-loss.component.html',
  styleUrls: ['./profit-loss.component.css']
})
export class ProfitLossComponent implements OnInit {
  transactionData: any;
  accountBalance: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTransactions().subscribe((resp) => {
      this.transactionData = resp['data']
      this.accountBalance = this.transactionData[this.transactionData.length - 1]['balance']
    })
  }

}
