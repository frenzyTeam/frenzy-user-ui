import { RouteConstant } from './config/constant/route.constant';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
    // canActivate: true,
  },
  {
    path: RouteConstant.ROUTE_LOGIN,
    loadChildren: './auth/auth.module#AuthModule'
    // canActivate: true,
  },
  {
    path: 'app',
    loadChildren: './module/user/user.module#UserModule'
    
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
