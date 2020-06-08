import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-in-play',
  templateUrl: './in-play.component.html',
  styleUrls: ['./in-play.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InPlayComponent implements OnInit {
  index: any = 0;
  cricketArr = [];
  footballArr = [];
  tennisArr = [];

  constructor() { }

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
    this.footballArr = [{
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
    }]
    // this.tennisArr = [{
    //   matchName: "South Africa Legends V",
    //   date: "12-12-1222 4:40 PM",
    //   bat1: {
    //     x: "1.21",
    //     y: "1.43"
    //   },
    //   batx: {
    //     x: "1.43",
    //     y: "1.34"
    //   },
    //   bat2: {
    //     x: "1.43",
    //     y: "3.21"
    //   }
    // },
    // {
    //   matchName: "India Legends V wertyuio wertyuio",
    //   date: "12-12-1222 4:40 PM",
    //   bat1: {
    //     x: "1.21",
    //     y: "1.43"
    //   },
    //   batx: {
    //     x: "1.43",
    //     y: "1.34"
    //   },
    //   bat2: {
    //     x: "1.43",
    //     y: "3.21"
    //   }
    // }]
  }
  handleChange(e) {
    this.index = e.index;
    // this.noTableData=false;
  }

}
