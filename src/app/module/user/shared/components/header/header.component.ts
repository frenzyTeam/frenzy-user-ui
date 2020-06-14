import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../../../user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  logo: string;
  details: any;
  openSettingModel: boolean = false;
  showDateTimeBlock: boolean = false;
  todayDate : Date = new Date();
  message;
  constructor(private router: Router, private authService: AuthService, private msgService: UserService) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowResize();

  }

  ngOnInit() {
    this.msgService.getMessage().subscribe((resp) => {
      this.message = resp['data'][0]['entity_value']
    })

    this.logo = '../../../../assets/images/logo.png';
    this.getProfile()
    this.windowResize();
  }
  onLogout() {
    localStorage.removeItem('userid')
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
  windowResize() {
    if (window.innerWidth <= 767) {
      this.showDateTimeBlock = false;
    } else {
      this.showDateTimeBlock = true;
    }
  }
  getProfile() {
    this.authService.getProfile().subscribe((resp) => {
      this.details = resp['data'];
    })
  }
  openSetting() {
    this.openSettingModel = true;
  }
  closeSetting() {
    this.openSettingModel = false;
  }

}
