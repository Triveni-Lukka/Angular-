import { Component, OnInit } from '@angular/core';
import {EmployeeserviceService} from '../employeeservice.service';
import { Routes, RouterModule ,Router} from '@angular/router';
import {Employee} from '../employee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee:Employee=new Employee();
  submitted=false;

  constructor(private employeeserviceService:EmployeeserviceService,private router:Router ) { }

  ngOnInit() {
  }
newEmployee():void{
  this.submitted=false;
  this.employee=new Employee();
}
save(){
  this.employeeserviceService.createemployee(this.employee).subscribe(data=>{console.log(data)},error=>console.log(error));
  this.employee= new Employee();
  this.gotolist();
  
}
onSubmit(){
  this.submitted=true;
  this.save();
}
gotolist(){
  this.router.navigate(['/employee']);
}
}
