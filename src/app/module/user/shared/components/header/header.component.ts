import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: string;
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.logo = '../../../../assets/images/logo.png';
  }
  onLogout() {
    localStorage.removeItem('userid')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
