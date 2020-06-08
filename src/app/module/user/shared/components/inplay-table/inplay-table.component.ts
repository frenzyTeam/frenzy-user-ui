import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-inplay-table',
  templateUrl: './inplay-table.component.html',
  styleUrls: ['./inplay-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InplayTableComponent implements OnInit {
  @Input() tableArr = [];
  responseData=[];
  @Input() header:string=null;
  @Input() hideRow:boolean=false;
  constructor() { }

  ngOnInit() {
    console.log(this.tableArr,this.header)
    this.responseData=this.tableArr;
  }

}
