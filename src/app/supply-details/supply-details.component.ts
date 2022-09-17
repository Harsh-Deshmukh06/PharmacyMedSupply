import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../services/schedule.service';
import { HttpClient, HttpClientModule ,HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { Count } from '../model/count';
import { environment } from 'src/environments/environment'
@Component({
  selector: 'app-supply-details',
  templateUrl: './supply-details.component.html',
  styleUrls: ['./supply-details.component.css']
})
export class SupplyDetailsComponent implements OnInit {
  count:any;
  data:any;
  dumm1:any;
  token:any;

  constructor(private router:Router , public scheduleservice :ScheduleService,public http : HttpClient,private memberserv : ScheduleService) { }

  ngOnInit(): void {
    var currentUser=JSON.parse(localStorage.getItem('jwt')||'{}')
    this.token=currentUser.token;
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
    this.dumm1=this.scheduleservice.dummy1;
  //console.log(this.data.medicineName)
    const config = new HttpHeaders().set('Content-Type', 'application/json',).set('Accept', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
    //const body=JSON.stringify(this.data)
    let temp= this.http.post<any>(environment.supply,this.dumm1,{ headers: config }).subscribe((data) => {  
      this.count = data  
      console.log(data)
    },err=>{
this.router.navigateByUrl('/error');
    });

  }
  Submit(){
  
  //console.log(this.count.medicineName)

  

}
}
