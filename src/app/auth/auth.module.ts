import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ThemeModule } from '../shared/theme/theme.module';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    ThemeModule,
    FormsModule
  ],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [
    AuthService,]
})
export class AuthModule { }
