import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

formsubmit:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.formsubmit=this.fb.group({
      email:new FormControl(),
      password:new FormControl()

    });
  }

  onSubmit(){
  console.log(this.formsubmit.value);
//alert(JSON.stringify(this.formsubmit.value));
  }
}
