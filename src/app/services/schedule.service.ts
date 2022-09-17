import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';   
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  dummy1:string='';
  date : String ='';
  repName:string='';
  doctorName:string='';
  treatingAilment:string='';
  medicine:string='';
  meetingSlot:string='';
  dateofMeeting:string='';
  doctorContactNumber='';


  constructor(public http : HttpClient) {   
  }  
GetAllMembers()
{  
  
  return this.http.get('https://localhost:44369/api/RepSchedule/?startDate=2021/08/01'/*'https://medicalrepresentativeschedule20220916170048.azurewebsites.net/api/RepSchedule'*/);  

} 
userlogged:boolean=false;
retrive:boolean=false;
}
