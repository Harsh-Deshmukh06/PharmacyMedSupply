import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleService } from '../services/schedule.service';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  token:any;
  members : any
  Token:any
  errorMsg:any
  constructor(private router:Router , public scheduleservice :ScheduleService,public http : HttpClient,private memberserv : ScheduleService) { }
  scheduledate : String =''
 
  

 
  ngOnInit(): void {
    var currentUser=JSON.parse(localStorage.getItem('jwt')||'{}')
    this.token=currentUser.token;
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
  }
RetrieveSchedule(){
  this.scheduleservice.date = this.scheduledate;
  var currentUser= JSON.parse(localStorage.getItem('jwt')||'{}');

  

  var httpOptions={headers:new HttpHeaders({"Content-Type": "application/json",'Authorization': 'Bearer ' + currentUser.token})};
  this.http.get<any>("https://localhost:44369/api/RepSchedule?startDate="/*"https://medicalrepresentativeschedule20220916170048.azurewebsites.net/api/RepSchedule"*/+this.scheduledate,httpOptions).subscribe((data) => {  
    this.router.navigateByUrl('/schedule-details')
    
    
 },err=>{
  this.router.navigateByUrl('/error');
 }
    
);

}
add(){
  if(this.scheduledate!=''){
    console.log(this.scheduledate)
    this.RetrieveSchedule()
  }
  else{
    this.errorMsg = "Select a date!!!!!!!!";
  }
}
  }
