import { Component, OnInit ,HostListener, OnDestroy} from '@angular/core';
import { sideBarAnimation } from '../../shared/animations/side-bar.animation';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [ sideBarAnimation]
})
export class DashboardComponent implements OnInit {
  logo:string;
  hidetoggleHTML: string;
  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   // this.menures = false;
  //   this.windowResize();
  // }

  // windowResize() {
  //   console.log(this.showSideBar,window.innerWidth)
  //   if (window.innerWidth <= 768) {
  //     this.showSideBar = true;
  //     // this.menures = false;
  //   } else {
  //     this.showSideBar = false;
  //     // this.menures = true;
  //     this.toggleSidebar();
  //   }
  // }
  // toggleSidebar() {
  //    this.showSideBar = !this.showSideBar;
  //   // this.sharedService.myBool = this.showSideBar;
  //   if (this.showSideBar) {
  //     this.hidetoggleHTML = '<span>&lt;</span><p>HIDE</p>';
  //   } else {
  //     this.hidetoggleHTML = '<span>&gt;</span><p>SHOW</p>';
  //   }
  // }

  constructor() { }

  ngOnInit() {
    // this.logo = '../../../../assets/images/logo.png';
    // this.windowResize();
  }

}
