import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CoreComponent} from './core.component';
import { CoreRoutingModule } from './core-routing.module';
// import { HeaderComponent } from './component/header/header.component';
// import { FooterComponent } from './component/footer/footer.component';
// import { SiderComponent } from './component/sider/sider.component';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
