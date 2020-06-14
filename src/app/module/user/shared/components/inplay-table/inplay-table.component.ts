import { Component, OnInit, ViewEncapsulation, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inplay-table',
  templateUrl: './inplay-table.component.html',
  styleUrls: ['./inplay-table.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InplayTableComponent implements OnInit ,OnChanges{
  @Input() tableArr = [];
  responseData=[];
  @Input() header:string=null;
  @Input() hideRow:boolean=false;
  constructor() { }

  ngOnInit() {
   
  }
  ngOnChanges(){
    this.responseData=this.tableArr;
  }

}
