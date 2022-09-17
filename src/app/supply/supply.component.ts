import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Count } from '../model/count';
import {ScheduleService} from '../services/schedule.service'
@Component({
  selector: 'app-supply',
  templateUrl: './supply.component.html',
  styleUrls: ['./supply.component.css']
})
export class SupplyComponent implements OnInit {
  errorMsg?:string;
  token:any

  constructor(private router:Router,public http : HttpClient,public scheduleservice:ScheduleService) { }
  counts : any
  counts1 : any
  counts2 : any
  counts3 : any
  counts4 : any
  count : any
  temp : any
  data : any
  res : any

  ngOnInit(): void {
    var currentUser=JSON.parse(localStorage.getItem('jwt')||'{}')
    this.token=currentUser.token;
    if(this.token==null){
this.router.navigateByUrl('/un-authorized');
    }
  
  }
  addmedicine(medicinename : string,Count : number,medicinename1 : string,count1: number,medicinename2:string,count2:number,medicinename3:string,count3:number,medicinename4:string,count4:number){
    let updatemedicine=[{
      "medicineName" :	medicinename,
      "count" : Count
    },
    {
      "medicineName" : medicinename1,
      "count" : count1
    },
    {
      "medicineName" : medicinename2,
      "count" : count2
    },
    {
      "medicineName" : medicinename3,
      "count" : count3
    },
    {
      "medicineName" : medicinename4,
      "count" : count4
    }
  ]
  
    console.log(this.scheduleservice.dummy1)
  const config = new HttpHeaders().set('Content-Type', 'application/json',).set('Accept', 'application/json').set('Authorization', 'Bearer ' + localStorage.getItem('jwt'))
  const body=JSON.stringify(updatemedicine);
  this.scheduleservice.dummy1=body;
  console.log(body)
    //var httpOptions={headers:new HttpHeaders({"Content-Type": "application/json",'Authorization': 'Bearer ' + localStorage.getItem('jwt'),})};

   let temp= this.http.post<any>('https://localhost:44377/PharmacySupply/Get'/*'https://pharmacymedicinesupplyservice20220916171000.azurewebsites.net/PharmacySupply/Get'*/,body,{ headers: config }).subscribe((data) => {  
        this.count = data  
        console.log(data)
        this.router.navigateByUrl('/supply-details')
      },err=>{
this.router.navigateByUrl('/error');
      });
  return temp;
  }
  RetrieveSupply(){
   
   // this.router.navigateByUrl("/supply-details")
   let url=this.addmedicine("Dolo 650",this.counts,"Azithromycin",this.counts1,"Citragen",this.counts2,"Tessalon",this.counts3,"Telma",this.counts4)
   this.scheduleservice.retrive=true;
}
data1(){
return this.scheduleservice.retrive;
}
add(){
  if(this.counts!=null||this.counts1!=null||this.counts2||this.counts3||this.counts4){
  this.RetrieveSupply()
      
  }
  else{
    this.errorMsg = "Enter atleast one drug from the above fields!!!!!!!!";
  }
}
}