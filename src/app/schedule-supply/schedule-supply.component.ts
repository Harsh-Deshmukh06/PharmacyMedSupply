import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule-supply',
  templateUrl: './schedule-supply.component.html',
  styleUrls: ['./schedule-supply.component.css']
})
export class ScheduleSupplyComponent implements OnInit {
token:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token=localStorage.getItem('jwt');
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
  }
  schedule(){
    this.router.navigateByUrl('/schedule');
  }

  supply(){
    this.router.navigateByUrl('/supply');
  }
}
