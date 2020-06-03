import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
 import {ThemeModule} from '../../../shared/theme/theme.module';
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
