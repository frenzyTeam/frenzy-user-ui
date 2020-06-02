import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.authService.registerUser({
      "data": {
        "name": "Harshli Raymagiya1",
        "user_name": "Harhjk1995",
        "sub_admin": "HSA - Harshil SUB ADMIN",
        "password": "password@123"
      }
    }).subscribe((response) => console.log(response));
    this.authService.subAdminList().subscribe((response) => console.log(response));
  }

}
