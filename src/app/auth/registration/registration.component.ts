import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {
  subAdmins: any = []
  register: any = {
    "name": "",
    "user_name": "",
    "sub_admin": "",
    "password": ""
  }
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    this.authService.subAdminList().subscribe((response) => {
      response.forEach(element => {
        let json = {}
        json['label'] = element
        json['value'] = element
        this.subAdmins.push(json)

      });
      this.subAdmins = this.subAdmins.concat(response);
    });
  }
  onSubmit() {
    this.authService.registerUser({ data: this.register }).subscribe((response) => {
      if (!response.error_status) {
        this.router.navigate(['/login']);
      }
    })
  }

}
