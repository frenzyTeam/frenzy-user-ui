import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from '../../../../user/user.service';
import * as _ from 'lodash';
import { NotifyService } from '../../services/notify.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  stake: any = []
  stake4: any = []
  stake3: any = []
  editableStake = false
  logo: string;
  details: any = null;
  openSettingModel: boolean = false;
  showDateTimeBlock: boolean = false;
  todayDate: Date = new Date();
  message;
  constructor(private notifyService: NotifyService, private router: Router, private authService: AuthService, private userService: UserService) {
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowResize();

  }

  ngOnInit() {
    this.userService.getMessage().subscribe((resp) => {
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
      this.stake = resp['data']['stake']
      this.resetStake()
    })
  }
  openSetting() {
    this.openSettingModel = true;
  }
  closeSetting() {
    this.openSettingModel = false;
  }
  onEditableStake() {
    this.editableStake = !this.editableStake
  }
  resetStake() {
    const arr = _.chunk(this.stake, 4)
    this.stake4 = arr[0]
    this.stake3 = arr[1]
    this.editableStake = false
    this.closeSetting()
  }
  onSave() {
    this.authService.updateProfile({
      "stake": _.union(this.stake4, this.stake3)
    }).subscribe((resp) => {
      this.getProfile();
      this.editableStake = false
      this.closeSetting()
      this.notifyService.saveProfile(true)
    });

  }
}
