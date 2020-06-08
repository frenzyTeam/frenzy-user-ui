import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.component.html',
  styleUrls: ['./cricket.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class CricketComponent implements OnInit {
  cricketArr=[];
  constructor() { }
index=0;
  ngOnInit() {
    this.cricketArr = [{
      matchName: "South Africa Legends V",
      date: "12-12-1222 4:40 PM",
      bat1: {
        x: "1.21",
        y: "1.43"
      },
      batx: {
        x: "1.43",
        y: "1.34"
      },
      bat2: {
        x: "1.43",
        y: "3.21"
      }
    },
    {
      matchName: "India Legends V wertyuio wertyuio",
      date: "12-12-1222 4:40 PM",
      bat1: {
        x: "1.21",
        y: "1.43"
      },
      batx: {
        x: "1.43",
        y: "1.34"
      },
      bat2: {
        x: "1.43",
        y: "3.21"
      }
    }];
  }
  handleChange(e) {
    this.index = e.index;
    // this.noTableData=false;
  }
}
