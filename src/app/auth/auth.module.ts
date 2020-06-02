import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThemeModule } from '../shared/theme/theme.module';
import { AuthService } from './auth.service';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [
    AuthService,
})
export class AuthModule { }
