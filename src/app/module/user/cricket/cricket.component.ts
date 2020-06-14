import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { TabView, TabPanel } from 'primeng/primeng';
import { UtilService } from '../../../core/services/util.service';
@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CricketComponent implements OnInit {
  cricketInplayArr = [];
  cricketTomorrowArr = [];
  cricketTodayArr = [];
  @ViewChild(TabView) tabView: TabView;
  constructor(private userService: UserService, private utilService: UtilService) { }
  index = 0;
  message: any = null;
  key: any = null;

  ngOnInit() {
    this.message = this.utilService.fetchMessageConstant;
    this.key = this.utilService.fetchKeyConstant;
    this.getMatchDetails('in-play');

  }
  getSelectedHeader() {
    let json = {};
    this.cricketInplayArr = this.cricketTomorrowArr = this.cricketTodayArr = [];
    
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
    json['sport_id'] = this.key.CRICKET_CODE;
    json['type'] = type === 'in-play' ? this.key.INPLAY_TYPE : type === 'today' ? this.key.TODAY_TYPE : this.key.TOMORROW_TYPE;
    this.userService.getMatchList(json).subscribe((resp) => {
      let dataArr = resp['data'];
      if (type === 'in-play') {
        this.cricketInplayArr = this.mapArrayList(dataArr);
      } else if (type === 'today') {
        this.cricketTodayArr = this.mapArrayList(dataArr);
      } else {
        this.cricketTomorrowArr = this.mapArrayList(dataArr);
      }

    });
  }
  mapArrayList(data) {
    let array = [];
    data.map(x => {
      let json = {};
      json['matchName'] = x.match_name;
      json['date'] = "12-12-1234 3:45 PM"
      json['bat1'] = {
        x: "1.21",
        y: "1.43"
      }
      json['batx'] = {
        x: "1.21",
        y: "1.43"
      }
      json['bat2'] = {
        x: "1.21",
        y: "1.43"
      }
      array.push(json);
    });
    return array;
  }
 
  handleChange(e) {
    this.index = e.index;
  }
}
