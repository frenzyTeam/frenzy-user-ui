import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './shared/components/header/header.component';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CricketComponent } from './cricket/cricket.component';
import { TennisComponent } from './tennis/tennis.component';
import { FootballComponent } from './football/football.component';
import { SharedModule } from './shared/shared.module';
import { UserComponent } from './user.component';
import { ThemeModule } from '../../shared/theme/theme.module';
import { ProfitLossComponent } from './profit-loss/profit-loss.component';
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { TooltipModule } from 'primeng/tooltip';
import { TableModule } from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ThemeModule,
    TooltipModule,
    TableModule
  ],
  declarations: [DashboardComponent, CricketComponent, TennisComponent, FootballComponent, HeaderComponent, UserComponent, ProfitLossComponent, BalanceOverviewComponent],
  exports: [HeaderComponent]
})
export class UserModule { }
