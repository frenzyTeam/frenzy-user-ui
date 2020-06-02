import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './shared/components/header/header.component';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CricketComponent } from './cricket/cricket.component';
import { TennisComponent } from './tennis/tennis.component';
import { FootballComponent } from './football/football.component';
import { SharedModule } from './shared/shared.module';
import {UserComponent} from './user.component';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [DashboardComponent, CricketComponent, TennisComponent, FootballComponent,HeaderComponent,UserComponent],
  exports: [HeaderComponent]
})
export class UserModule { }
