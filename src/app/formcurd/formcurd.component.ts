import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import { CommonService } from '../common.service';
import { Users } from '../model/users';
@Component({
  selector: 'app-formcurd',
  templateUrl: './formcurd.component.html',
  styleUrls: ['./formcurd.component.css']
})
export class FormcurdComponent implements OnInit {

  constructor(private fb:FormBuilder,private common:CommonService) { }

  Formcurd:FormGroup;
  Name:any;
  Email:any;
  Password:any;
formdata=[];
getusers:Users[];
errorMsg:any;
  ngOnInit() {


    this.Formcurd=this.fb.group({
      Name:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(10)]]

    });

    this.getAllusers();
   
  }


  onSubmit(){
    console.log(this.Formcurd.value);
    //this.formdata.push(this.Formcurd.value);
    //this.Name=this.Formcurd.value.Name;
    //this.Email=this.Formcurd.value.Email;
   //this.Password=this.Formcurd.value.Password;
   this.common.creatUser(this.Formcurd.value).subscribe((data)=>{
 console.log("new userdata",data);
 
   });
   this.getAllusers();
  
  }
  getAllusers(){
    this.common.getAllUser().subscribe((data:Users[])=>{
    this.getusers=data;},
    (error)=>{console.error
    this.errorMsg=error;
    } 
    );
  }

  delectuser(id:number){
    console.log(id);
    this.common.delectUser(id).subscribe((data:Users)=>{
  this.getAllusers();

    });
 
  }
 
  }

