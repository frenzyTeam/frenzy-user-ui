import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditable:boolean;
  constructor() { }

  ngOnInit() {
    
  }
  updateDetails(){
    this.isEditable=true;
  }
  saveDetails(){
    this.isEditable=false;
  }
}
