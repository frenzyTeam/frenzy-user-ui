import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { UtilService } from 'src/app/core/services/util.service';
import { TabView } from 'primeng/primeng';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrls: ['./in-play.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InPlayComponent implements OnInit {
  index: any = 0;
  cricketInplayArr: any = [];
  footballInplayArr: any = [];
  tennisInplayArr: any = [];
  cricketTodayArr: any = [];
  footballTodayArr: any = [];
  tennisTodayArr: any = [];
  cricketTomorrowArr: any = [];
  footballTomorrowArr: any = [];
  tennisTomorrowArr: any = [];
  message: any = null;
  key: any = null;
  @ViewChild(TabView) tabView: TabView;

  constructor(private userService: UserService, private utilService: UtilService) { }

  ngOnInit() {
    this.message = this.utilService.fetchMessageConstant;
    this.key = this.utilService.fetchKeyConstant;
    this.getMatchDetails('in-play');


  }
  getMatchDetails(type) {
    let json = {};
    json['sport_id'] = this.key.FOOTBALL_CODE + ',' + this.key.TENNIS_CODE + ',' + this.key.CRICKET_CODE;
    json['type'] = type === 'in-play' ? this.key.INPLAY_TYPE : type === 'today' ? this.key.TODAY_TYPE : this.key.TOMORROW_TYPE;
    this.userService.getMatchList(json).subscribe((resp) => {
      let dataArr = resp['data'];
      let filterCricketArray, filterTennisArray, filterFootballArray;
      filterCricketArray = dataArr.filter(cricket => +cricket.sport_id === +this.key.CRICKET_CODE);
      filterTennisArray = dataArr.filter(tennis => +tennis.sport_id === + this.key.TENNIS_CODE);
      filterFootballArray = dataArr.filter(football => +football.sport_id === +this.key.FOOTBALL_CODE);
      if (type === 'in-play') {

        this.cricketInplayArr = this.mapArrayList(filterCricketArray);
        this.tennisInplayArr = this.mapArrayList(filterTennisArray);
        this.footballInplayArr = this.mapArrayList(filterFootballArray);

      } else if (type === 'today') {

        this.cricketTodayArr = this.mapArrayList(filterCricketArray);
        this.tennisTodayArr = this.mapArrayList(filterTennisArray);
        this.footballTodayArr = this.mapArrayList(filterFootballArray);
      } else {
        this.cricketTomorrowArr = this.mapArrayList(filterCricketArray);
        this.tennisTomorrowArr = this.mapArrayList(filterTennisArray);
        this.footballTomorrowArr = this.mapArrayList(filterFootballArray);
      }

    });
  }
  getSelectedHeader() {
    let json = {};
    //array  null
    json['sport_id'] = this.key.FOOTBALL_CODE + ',' + this.key.TENNIS_CODE + ',' + this.key.CRICKET_CODE;
    if (this.tabView.tabs[this.index].header.toLowerCase() === 'today') {
      json['type'] = this.key.TODAY_TYPE;
      this.getMatchDetails('today');
    } else if (this.tabView.tabs[this.index].header.toLowerCase() === 'tomorrow') {
      json['type'] = this.key.TOMORROW_TYPE;
      this.getMatchDetails('tomorrow');
    } else {
      json['type'] = this.key.INPLAY_TYPE;
      this.getMatchDetails('inplay');
    }

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
