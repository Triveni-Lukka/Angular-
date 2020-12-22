import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-formcurd',
  templateUrl: './formcurd.component.html',
  styleUrls: ['./formcurd.component.css']
})
export class FormcurdComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  Formcurd:FormGroup;
  Name:any;
  Email:any;
  Password:any;
formdata=[];
  ngOnInit() {


    this.Formcurd=this.fb.group({
      Name:['',Validators.required],
      Email:['',[Validators.required,Validators.email]],
      Password:['',[Validators.required,Validators.minLength(10)]]

    });
  }
  onSubmit(){
    console.log(this.Formcurd.value);
    this.formdata.push(this.Formcurd.value);
    this.Name=this.Formcurd.value.Name;
    this.Email=this.Formcurd.value.Email;
    this.Password=this.Formcurd.value.Password;
  }

}
