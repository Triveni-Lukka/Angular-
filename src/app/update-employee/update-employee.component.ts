import { Component, OnInit } from '@angular/core';
import {EmployeeserviceService} from '../employeeservice.service';
import { Routes, RouterModule ,Router,ActivatedRoute } from '@angular/router';

import {Employee} from'../employee';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
id:number;
employee:Employee;
  constructor(private employeeserviceServic:EmployeeserviceService,private router:Router,private route:ActivatedRoute ) { }

  ngOnInit() {
    this.employee= new Employee;
    this.id=this.route.snapshot.params['id'];
    this.employeeserviceServic.getemployeedata(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    },
    error=>console.log(error));
    
  }
  updateEmployee(){
    this.employeeserviceServic.updateEmployee(this.id,this.employee).subscribe(data=>{console.log(data)},
    error=>console.log(error));
    this.employee= new Employee;
    this.gotolist();
  }

  onSubmit(){
    this.updateEmployee();
  }
  gotolist(){
    this.router.navigate(['/employees']);
  }
}
