import { Component, OnInit } from '@angular/core';
import { SampleService} from '../sample.service';
import { FormsModule, Validators } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
formdata:any;
emailid:any;
password:any;
firstName:any;
lastName:any;
sam:any;
  constructor(private sample: SampleService) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      emailid: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required,Validators.minLength(8)]),
      firstName:new FormControl('',Validators.required),
      lastName:new FormControl('',Validators.required)
   });

  }
  onClickSubmit(data) { 
    this.emailid = data.emailid,
    this.password = data.password ,
    this.firstName=data.firstName,
    this.lastName=data.lastName
console.log(this.formdata.value);
//this.sam.push=
//alert(JSON.stringify(this.formdata.value));
}
}
