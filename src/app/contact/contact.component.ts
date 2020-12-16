import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title='Triveni Lukka'
  HeroName:Array<object>=[{"id":1,"name":"Triveni"},{"id":20,"name":"Triveni"},
  {"id":30,"name":"Triveni"}]

  ngOnInit(){}




}
