import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  my_form: FormGroup;


  constructor(private fb:FormBuilder) { 
  }

  ngOnInit() {
    this.my_form=this.fb.group(
      {
firstName:new FormControl('',Validators.required),
lastName:new FormControl('',Validators.required),
email:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required,Validators.minLength(10)]),
confirmPassword:''
 } );

  }
  onSubmit(){
    console.log(this.my_form.value);
    alert(JSON.stringify(this.my_form.value));
  }
}
