import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-balance-overview',
  templateUrl: './balance-overview.component.html',
  styleUrls: ['./balance-overview.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BalanceOverviewComponent implements OnInit {
  transactionData: any = []
  accountBalance: any
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTransactions().subscribe((resp) => {
      this.transactionData = resp['data']
      this.accountBalance = this.transactionData.length>0? this.transactionData[this.transactionData.length - 1]['balance']: 0
    })
  }

}
