import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TabView } from 'primeng/primeng';
import { UserService } from '../shared/services/user.service';
import { UtilService } from 'src/app/core/services/util.service';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TennisComponent implements OnInit {
  index = 0;

  tennisInplayArr: any = [];
  tennisTomorrowArr: any = [];
  tennisTodayArr: any = [];
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
    this.tennisInplayArr = this.tennisTomorrowArr = this.tennisTodayArr = [];

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
    json['sport_id'] = this.key.TENNIS_CODE;
    json['type'] = type === 'in-play' ? this.key.INPLAY_TYPE : type === 'today' ? this.key.TODAY_TYPE : this.key.TOMORROW_TYPE;
    this.userService.getMatchList(json).subscribe((resp) => {
      let dataArr = resp['data'];
      if (type === 'in-play') {
        this.tennisInplayArr = this.mapArrayList(dataArr);
      } else if (type === 'today') {
        this.tennisTodayArr = this.mapArrayList(dataArr);
      } else {
        this.tennisTomorrowArr = this.mapArrayList(dataArr);
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
