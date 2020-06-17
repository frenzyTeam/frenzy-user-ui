import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { UtilService } from 'src/app/core/services/util.service';
import { TabView } from 'primeng/primeng';
@Component({
  selector: 'app-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FootballComponent implements OnInit {
  footballTodayArr: any = [];
  footballInplayArr: any = [];
  footballTomorrowArr: any = [];
  index = 0;
  message: any = null;
  key: any = null;
  @ViewChild(TabView) tabView: TabView;
  constructor(private userService: UserService, private utilService: UtilService) { }

  ngOnInit() {
    this.message = this.utilService.fetchMessageConstant;
    this.key = this.utilService.fetchKeyConstant;
    this.getMatchDetails('in-play');
  }
  getSelectedHeader() {
    let json = {};
    this.footballInplayArr = this.footballTomorrowArr = this.footballTodayArr = [];

    if (this.tabView.tabs[this.index].header.toLowerCase() === 'today') {
      this.getMatchDetails('today');
    }
    else if (this.tabView.tabs[this.index].header.toLowerCase() === 'tomorrow') {
      this.getMatchDetails('tomorrow');
    } else if (this.tabView.tabs[this.index].header.toLowerCase() === 'in-play') {
      this.getMatchDetails('in-play');
    }
  }
  getMatchDetails(type) {
    let json = {};
    json['sport_id'] = this.key.FOOTBALL_CODE;
    json['type'] = type === 'in-play' ? this.key.INPLAY_TYPE : type === 'today' ? this.key.TODAY_TYPE : this.key.TOMORROW_TYPE;
    this.userService.getMatchList(json).subscribe((resp) => {
      let dataArr = resp['data'];
      if (type === 'in-play') {
        this.footballInplayArr = this.mapArrayList(dataArr);
      } else if (type === 'today') {
        this.footballTodayArr = this.mapArrayList(dataArr);
      } else {
        this.footballTomorrowArr = this.mapArrayList(dataArr);
      }

    });
  }

  mapArrayList(data) {
    let array = [];
    data.map(x => {
      let json = {};
      json['id'] = x.id;
      json['match_id'] = x.match_id;
      json['sports_id'] = x.sport_id;
      json['our_event_id'] = x.our_event_id
      json['matchName'] = x.match_name;
      json['date'] = "12-12-1234 3:45 PM"
      json['bat1'] = {
        x: "1.21",
        y: "1.43",
        team_id: x.home.id,
        team_name: x.home.name
      }
      json['batx'] = {
        x: "1.21",
        y: "1.43"
      }
      json['bat2'] = {
        x: "1.21",
        y: "1.43",
        team_id: x.away.id,
        team_name: x.away.name
      }
      array.push(json);
    });
    return array;
  }
  handleChange(e) {
    this.index = e.index;
  }
}
