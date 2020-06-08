import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  logo: string;
  details: any;
  openSettingModel:boolean=false;
  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.logo = '../../../../assets/images/logo.png';
    this.getProfile()
  }
  onLogout() {
    localStorage.removeItem('userid')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  getProfile() {
    this.authService.getProfile().subscribe((resp) => {
      this.details = resp['data'];
    })
  }
  openSetting(){
    console.log("hi")
    this.openSettingModel=true;
  }
  closeSetting(){
    this.openSettingModel=false;
  }

}
