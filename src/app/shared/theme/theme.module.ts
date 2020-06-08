import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    DropdownModule,
    TooltipModule,

  ],
  declarations: [],
  exports:[CalendarModule,DropdownModule,TooltipModule]
})
export class ThemeModule { }
