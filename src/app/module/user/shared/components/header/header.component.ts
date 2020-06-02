import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo:string;
  constructor() {
    console.log("hii1")
   }

  ngOnInit() {
    console.log("hii")
    this.logo = '../../../../assets/images/logo.png';
  }

}
