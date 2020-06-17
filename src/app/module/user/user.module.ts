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
import { HomeComponent } from './home/home.component';
import { TabViewModule } from 'primeng/tabview';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { InPlayComponent } from './in-play/in-play.component';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
import { InplayTableComponent } from './shared/components/inplay-table/inplay-table.component';
import { ProfileComponent } from './profile/profile.component';
import { MyBetComponent } from './my-bet/my-bet.component';
import { SettingComponent } from './setting/setting.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';

// import { NgbdCarouselBasic } from './carousel-basic';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, CardModule } from 'primeng/primeng';
@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    ThemeModule,
    TooltipModule,
    TableModule,
    TabViewModule,
    AccordionModule,
    CardModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [DashboardComponent, CricketComponent, TennisComponent, FootballComponent, FooterComponent, HeaderComponent, SideBarComponent, ImageSliderComponent, UserComponent, ProfitLossComponent, BalanceOverviewComponent, HomeComponent, InPlayComponent, InplayTableComponent, ProfileComponent, MyBetComponent, SettingComponent, AccountStatementComponent],
  exports: [HeaderComponent, ThemeModule, ImageSliderComponent, InplayTableComponent, SideBarComponent, FooterComponent],
  providers: [NgbCarouselConfig]
})
export class UserModule { }
