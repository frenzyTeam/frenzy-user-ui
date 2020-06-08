import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tennis',
  templateUrl: './tennis.component.html',
  styleUrls: ['./tennis.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class TennisComponent implements OnInit {
  index=0;
  tennisArr=[];
  constructor() { }

  ngOnInit() {
    this.tennisArr = [{
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
