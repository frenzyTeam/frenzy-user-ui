import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  item = [];
  images: any = null
  index = 0;
  noTableData: boolean = true;
  message: any;
  // @ViewChild('myCarousel') myCarousel: NgbCarousel;
  constructor() {

  }


  ngOnInit() {
    // this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
    this.images = ['../../../../assets/images/slider1.jpg', '../../../../assets/images/slider2.jpg', '../../../../assets/images/slider3.jpg']
    // this.myCarousel.activeId='1';
  }
  handleChange(e) {
    this.index = e.index;
    this.noTableData = false;
  }

}
