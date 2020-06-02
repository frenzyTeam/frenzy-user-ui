import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
@NgModule({
  imports: [
    CommonModule,
    CalendarModule,
    DropdownModule
  ],
  declarations: [],
  exports:[CalendarModule,DropdownModule]
})
export class ThemeModule { }
