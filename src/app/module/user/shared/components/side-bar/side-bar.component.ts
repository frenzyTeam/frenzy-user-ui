import { Component, OnInit } from '@angular/core';
import { BetService } from '../../services/bet.service';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  bets = []
  constructor(private betService: BetService, private notifyService: NotifyService) { }

  ngOnInit() {
    this.betService.getBet().subscribe((resp) => {
      this.bets = resp['data']
    })
    this.notifyService.isBetSaved().subscribe(resp => {
      if (resp) {
        this.betService.getBet().subscribe((resp) => {
          this.bets = resp['data']
          this.notifyService.isBetSave(false)
        })
      }

    })
  }

}
