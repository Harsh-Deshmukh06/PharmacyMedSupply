import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';  
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScheduledataService {

  constructor(public http : HttpClient) {   
  }  
GetAllMembers()
{  
  return this.http.get('https://localhost:44369/api/RepSchedule?startDate=2021%2F07%2F30' /*'https://medicalrepresentativeschedule20220916170048.azurewebsites.net/api/RepSchedule'*/);  
} 
}
