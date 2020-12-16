import { Component, OnInit } from '@angular/core';
import {MydataService} from '../mydata.service';
import { getLocaleDateFormat } from '@angular/common';
@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
public products={};
  constructor(private mydataService:MydataService) { }

  ngOnInit() {
   this.mydataService.RestApi().subscribe(data=>{
 console.log(data)
   this.products=data
 });
  
}
/*loaduser(){
  this.mydataService.RestApi().subscribe(data=>{
   console.log(data)
   this.products=data},
   error=>console.log(error));
    
}
}*/
}
