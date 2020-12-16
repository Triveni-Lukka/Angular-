import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import {EmployeeserviceService} from '../employeeservice.service';
import { Routes, RouterModule ,Router} from '@angular/router';
import {observable, Observable} from 'rxjs';
import {Employee} from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
empoylees:Observable<any>;
  constructor(private employeeserviceService:EmployeeserviceService,private router:Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.empoylees=this.employeeserviceService.getemployee();
  }
  deleteEmployee(id:number){
    this.employeeserviceService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
       this.reloadData();},
        error=>console.log(error));
  }
  empolyeedetails(id:number){
    this.router.navigate(['details',id]);
  }
}
