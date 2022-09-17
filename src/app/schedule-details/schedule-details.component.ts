import { Component, Input, OnInit, Output } from '@angular/core';
import { Schedulemodel } from '../model/schedulemodel';
import { ScheduleService } from '../services/schedule.service';
import {HttpClient, HttpHeaders} from '@angular/common/http'; 
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'
@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  msg :any;
  members :any
  scheduledate:any;
  token:any;
   constructor(private router:Router,public scheduleservice : ScheduleService,private http:HttpClient){  
    this.token=localStorage.getItem('jwt');
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
    }
  ngOnInit(): void {
    var currentUser=JSON.parse(localStorage.getItem('jwt')||'{}')
    this.token=currentUser.token;
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
    
    
    //this.members = this.scheduleservice
    this.msg=this.scheduleservice.date;
    var currentUser= JSON.parse(localStorage.getItem('jwt')||'{}');
    var httpOptions={headers:new HttpHeaders({"Content-Type": "application/json",'Authorization': 'Bearer ' + currentUser.token})};
     this.scheduledate=this.scheduleservice.date;
    
  this.http.get<any>(environment.schedule+this.scheduledate,httpOptions).subscribe((data) => {  
    this.members = data  
    
    
    
 },err=>{
  this.router.navigateByUrl('/error');
 });

}
  }
