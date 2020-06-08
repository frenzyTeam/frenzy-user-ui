import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component'
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
import { HomeComponent } from './home/home.component';
import { InPlayComponent } from './in-play/in-play.component';
import { CricketComponent } from './cricket/cricket.component';
import { FootballComponent } from './football/football.component';
import { TennisComponent } from './tennis/tennis.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBetComponent } from './my-bet/my-bet.component';
import {AccountStatementComponent} from './account-statement/account-statement.component';
import { SettingComponent } from './setting/setting.component';
const routes: Routes = [{
  //  { path: 'dashboard', component: DashboardComponent }
  path: '',
  component: UserComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profit-loss', component: ProfitLossComponent },
    { path: 'balance', component: BalanceOverviewComponent },
    { path: 'home', component: HomeComponent },
    { path: 'in-play', component: InPlayComponent },
    { path: 'cricket', component: CricketComponent },
    {path:'football',component:FootballComponent},
    {path:'tennis',component:TennisComponent},
    {path:'profile',component:ProfileComponent},
    {path:'my-bet',component:MyBetComponent},
    {path:'account-statement',component:AccountStatementComponent},
    {path:'setting', component:SettingComponent}

  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
