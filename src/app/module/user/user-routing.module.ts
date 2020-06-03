import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { ProfitLossComponent } from './profit-loss/profit-loss.component'
import { BalanceOverviewComponent } from './balance-overview/balance-overview.component';
const routes: Routes = [{
  //  { path: 'dashboard', component: DashboardComponent }
  path: '',
  component: UserComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'profit-loss', component: ProfitLossComponent },
    { path: 'balance', component: BalanceOverviewComponent }

  ]
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
