import { Component, OnInit } from '@angular/core';
import { BetService } from '../../services/bet.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  bets=[]
  constructor(private betService: BetService) { }

  ngOnInit() {
    this.betService.getBet().subscribe((resp) => {
      this.bets=resp['data']
    })
  }

}
