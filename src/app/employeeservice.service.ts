import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private baseurl='http://localhost:8080/springboot-crud-rest/api/v1/employees';

  constructor(private http:HttpClient) { }

  getemployeedata(id:number):Observable<any>{
    return this.http.get(`${this.baseurl}/${id}`)
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/${id}`,{responseType:"text"});
  }
  createemployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseurl}`,employee);

  }
  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseurl}/${id}`,value);
  }
getemployee():Observable<any>{
  return this.http.get(`${this.baseurl}`);
}
}
