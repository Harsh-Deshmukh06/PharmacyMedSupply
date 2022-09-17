import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ScheduleSupplyComponent } from './schedule-supply/schedule-supply.component';
import { SupplyComponent } from './supply/supply.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HeaderComponent } from './header/header.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { SupplyDetailsComponent } from './supply-details/supply-details.component';
import { HttpClientModule } from '@angular/common/http';
import { Schedulemodel } from './model/schedulemodel';
import { ScheduleService } from './services/schedule.service';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginComponent,
    ScheduleSupplyComponent,
    SupplyComponent,
    ScheduleComponent,
    HeaderComponent,
    ScheduleDetailsComponent,
    SupplyDetailsComponent,
    UnAuthorizedComponent,
    ErrorComponent,
    LandingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    RouterModule,
    HttpClientModule,
    
    
    
  ],
  providers: [HttpClientModule,ScheduleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
