import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import * as _ from 'lodash';
import { BetService } from '../../services/bet.service';


@Component({
  selector: 'app-inplay-table',
  templateUrl: './inplay-table.component.html',
  styleUrls: ['./inplay-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InplayTableComponent implements OnInit, OnChanges {
  hoverprofit = 0
  selectedStake: any = {
    index: null,
    value: null
  }
  currentStake: any;
  stake: any = []
  stake4: any = []
  stake3: any = []
  details
  editableStake = false
  openSettingModel: boolean = false;

  @Input() tableArr = [];
  responseData = [];
  @Input() header: string = null;
  @Input() hideRow: boolean = false;
  constructor(private authService: AuthService, private betService: BetService) { }

  ngOnInit() {
    this.getProfile()
  }
  ngOnChanges() {
    this.responseData = this.tableArr;
    // this.getProfile()
  }
  getProfile() {
    this.authService.getProfile().subscribe((resp) => {
      this.details = resp['data'];
      this.stake = resp['data']['stake']
      this.resetStake()
    })
  }
  openSetting() {
    this.openSettingModel = true;
  }
  closeSetting() {
    this.openSettingModel = false;
  }
  onEditableStake() {
    this.editableStake = !this.editableStake
  }
  resetStake() {
    const arr = _.chunk(this.stake, 4)
    this.stake4 = arr[0]
    this.stake3 = arr[1]
    this.editableStake = false
    this.closeSetting()
  }
  onSave() {
    this.saveBet(this.selectedStake.value)
    this.betService.saveBet(this.currentStake).subscribe((resp) => {
    })
    // this.authService.updateProfile({
    //   "stake": _.union(this.stake4, this.stake3)
    // }).subscribe((resp) => {
    //   this.getProfile();
    //   this.editableStake = false
    //   this.closeSetting()
    // });
  }
  openStake(id, req, type, team_id, sport_id, team_name) {
    this.currentStake = {
      id: id,
      bet_on: type,
      odds_req: parseFloat(req),
      team_id: team_id,
      sport_id: sport_id,
      type: "Match Win-Loss",
      team_name: team_name
    }
    this.openSetting()
  }
  saveBet(stake) {
    const profit = stake + stake * this.currentStake.odds_req
    this.currentStake['stake'] = stake
    this.currentStake['profit'] = profit
    console.log(this.currentStake)
  }
  setStake(index, value) {
    this.selectedStake.index = index
    this.selectedStake.value = value
    console.log(value)
    this.hoverprofit = value + value * this.currentStake.odds_req
  }

}
