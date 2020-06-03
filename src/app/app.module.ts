import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { UserModule } from './module/user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilService } from './core/services/util.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // AuthModule,
    CoreModule,
    // UserModule,
    AppRoutingModule,
    // NgbModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
