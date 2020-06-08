import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ImageSliderComponent implements OnInit {
// index:number=0;
@ViewChild('myCarousel') myCarousel: NgbCarousel;
images=[];
  constructor() { }

  ngOnInit() {
    this.images=['../../../../../assets/images/slider1.jpg','../../../../../assets/images/slider2.jpg','../../../../../assets/images/slider3.jpg']
  }

}
