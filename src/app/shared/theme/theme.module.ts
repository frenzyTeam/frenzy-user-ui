import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {TooltipModule} from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    DropdownModule,
    TooltipModule,
    ToastModule

  ],
  declarations: [],
  exports:[CalendarModule,DropdownModule,TooltipModule,ToastModule]
})
export class ThemeModule { }
