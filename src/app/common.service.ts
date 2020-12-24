import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'; 
import {catchError} from 'rxjs/operators';
import { Users } from './model/users';
const headeroption={
  headers:new HttpHeaders({'Content-Type':'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class CommonService {
mockUrl="http://localhost:3000/users";

  constructor(private http:HttpClient) { }
  creatUser(user:Users):Observable<Users>{
     return this.http.post<Users>(this.mockUrl,user,headeroption)
  }
  
  updateUser(){}
  delectUser(id:number):Observable<Users>{
    return this.http.delete<Users>(this.mockUrl + '/' + id ,headeroption)
  }
  getAllUser():Observable<Users[]>{
    return this.http.get<Users[]>(this.mockUrl,headeroption).pipe(catchError(this.handelError))
      }

      handelError(error){
return throwError(error.message||"server-error");
      }
      
}
