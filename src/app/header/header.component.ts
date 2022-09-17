import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { LocalStorageService } from '../services/local-storage.service';
import { ScheduleService } from '../services/schedule.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private  cookies:CookieService,private localStorageService: LocalStorageService,private scheduleService:ScheduleService) { }

  ngOnInit(): void {
  }
  LoggedIn:boolean = false;
  submit(){
    
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.cookies.deleteAll();
    this.localStorageService.clear();
    this.router.navigateByUrl('/login');

  }
  userlogged(){
    return this.scheduleService.userlogged;
  }
  

}
