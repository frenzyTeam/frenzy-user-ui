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
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { LoadingSpinnerComponent } from './module/user/shared/components/loading-spinner.component';
import { NotifyService } from './module/user/shared/services/notify.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { ToasterInterceptor } from './shared/interceptors/toaster.interceptor';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent
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
    ToastModule
  ],
  providers: [MessageService, UtilService, NotifyService, { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [AppComponent],
  exports: [LoadingSpinnerComponent]
})
export class AppModule { }
