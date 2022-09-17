import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleSupplyComponent } from './schedule-supply/schedule-supply.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SupplyComponent } from './supply/supply.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { SupplyDetailsComponent } from './supply-details/supply-details.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { ErrorComponent } from './error/error.component';
import {LandingComponent} from'./landing/landing.component';
const routes: Routes = [
  {
    path : '',
    component: LandingComponent,
  },
  {
    path : 'login',
    component: LoginComponent,
  },
  {
    path : 'schedule-supply',
    component: ScheduleSupplyComponent,
  },
  {
    path : 'schedule',
    component: ScheduleComponent,
  },
  {
    path : 'supply',
    component: SupplyComponent,
  },

  {
    path : 'schedule-details',
    component: ScheduleDetailsComponent,
  },

  {
    path : 'supply-details',
    component: SupplyDetailsComponent,
  },
  {
    path:'un-authorized',
    component:UnAuthorizedComponent,
  },
  {
    path:'error',
    component:ErrorComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
