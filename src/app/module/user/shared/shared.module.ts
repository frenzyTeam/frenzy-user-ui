import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
 import {ThemeModule} from '../../../shared/theme/theme.module';
// import { FooterComponent } from './components/footer/footer.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';
// import { InplayTableComponent } from './components/inplay-table/inplay-table.component';
// import { ImageSliderComponent } from './components/image-slider/image-slider.component';
@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
     ThemeModule
  ],
  declarations: []
  // exports:[ThemeModule]
})
export class SharedModule { }
