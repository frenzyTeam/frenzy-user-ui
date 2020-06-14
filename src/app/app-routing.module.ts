import { RouteConstant } from './config/constant/route.constant';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DeauthGuard } from './auth/deauth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule',
    // canActivate: [DeauthGuard],
  },
  {
    path: RouteConstant.ROUTE_LOGIN,
    loadChildren: './auth/auth.module#AuthModule',
    // canActivate: [DeauthGuard],
  },
  {
    path: 'app',
    loadChildren: './module/user/user.module#UserModule',
    canActivate: [AuthGuard]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
