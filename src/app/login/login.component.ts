import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ScheduleService } from '../services/schedule.service';
import { environment } from 'src/environments/environment'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:String='';
  password:String='';
  errorMsg:String='';
  LoggedIn:Boolean = false;
  constructor(private router:Router,private http: HttpClient,private  cookies:CookieService,private localStorageService: LocalStorageService,private scheduleservice:ScheduleService) { }

  ngOnInit(): void {
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.cookies.deleteAll();
    this.localStorageService.clear();
    this.router.navigateByUrl('/login');
  
  }
  AuthenticateUser(form: NgForm){
    const credentials = (JSON.stringify(form.value));
    
    

    console.log(credentials);
    this.http.post(environment.login, credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      const token = (<any>response).token;
      const name=(<any>response).userName;
      localStorage.setItem("jwt", JSON.stringify({ token: token, userName: name }));
    this.scheduleservice.userlogged=true;
      this.router.navigateByUrl('/schedule-supply');
      
    }, err => {
      this.errorMsg = "Invalid Username/Password";
    });
   
  }

}