import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable}from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MydataService {
private Rest_Api= "http://jsonplaceholder.typicode.com/users";

  constructor(private httpClient:HttpClient) { }
  public RestApi():Observable<object>{
    return this.httpClient.get(this.Rest_Api);
}
}
