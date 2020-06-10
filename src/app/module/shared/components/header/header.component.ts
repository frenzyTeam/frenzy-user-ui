import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  details: any;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.logo = 'assets/images/logo.png';
    console.log("dfvkfjkngktnkjnlknkln")
  }
  getProfile() {
    this.authService.getProfile().subscribe((resp) => {
      this.details = resp['data'];
    })
  }

}
