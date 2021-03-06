import { Component, OnInit } from '@angular/core';
import {Employee} from '../employee';
import {EmployeeserviceService} from '../employeeservice.service';
import { Routes, RouterModule ,Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
id:number;
employee:Employee;
  constructor(private employeeserviceService:EmployeeserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.employee=new Employee;
    this.id=this.route.snapshot.params['id'];
    this.employeeserviceService.getemployeedata(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    },
    error=>console.log(error));
    
  }
list(){
  this.router.navigate(['employees']);
}

}
