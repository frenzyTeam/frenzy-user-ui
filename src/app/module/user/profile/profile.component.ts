import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isEditable: boolean;
  profileData: any = [];
  displaySaveButton: Boolean = false;
  displayEditButton: boolean = true;
  userName: any = null
  userEmail: any = null;
  password: any = null;
  address: any = null;
  town_city: any = null;
  country: any = null;
  state: any = null;
  postCode: any = null;
  pNumber: any = null;
  currency: any = null;
  charge: any = null;
  confirmPassword: any = null;
  oldPassword: any = null;


  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getProfileData();
  }
  getProfileData() {
    this.userService.getProfile().subscribe((resp) => {
      this.profileData = resp['data']
      this.userName = this.profileData.name ? this.profileData.name : null;
      this.userEmail = this.profileData.hasOwnProperty('email') ? this.profileData.email : null;
      this.password = null;
      if (this.profileData.hasOwnProperty('address')) {
        this.address = this.profileData.address.hasOwnProperty('address_line1') ? this.profileData.address.address_line1 : null;
        this.town_city = this.profileData.address.hasOwnProperty('city') ? this.profileData.address.city : null;
        this.country = this.profileData.address.hasOwnProperty('country') ? this.profileData.address.country : null;
        this.state = this.profileData.address.hasOwnProperty('state') ? this.profileData.address.state : null;
        this.postCode = this.profileData.address.hasOwnProperty('postal_code') ? this.profileData.address.postal_code : null;
      }
      if (this.profileData.hasOwnProperty('contact_details')) {
        this.pNumber = this.profileData.contact_details.hasOwnProperty('primary_number') ? this.profileData.contact_details.primary_number : null;
      }

      this.currency = "INR";
      this.charge = "0%";
      // this.getProfileData();
      // this.accountBalance = this.transactionData.length>0? this.transactionData[this.transactionData.length - 1]['balance']: 0
    });

  }
  updateDetails() {
    this.isEditable = true;
    this.displaySaveButton = true;
    this.displayEditButton = false;
  }
  saveDetails() {

    this.isEditable = true;

    let userBody =
    {
      "address": {
        "address_line1": this.address,
        "city": this.town_city,
        "country": this.country,
        "state": this.state,
        "postal_code": this.postCode
      },
      "contact_details": {
        "primary_number": this.pNumber
      },
      "email": this.userEmail,
      "name": this.userName,
      "pasword": this.password
    }
    this.userService.updateProfile(userBody).subscribe((resp) => {
      this.isEditable = false;
      this.displaySaveButton = false;
      this.displayEditButton = true;
      this.profileData = resp['data']
      this.getProfileData();
      // this.accountBalance = this.transactionData.length>0? this.transactionData[this.transactionData.length - 1]['balance']: 0
    });

  }
}
