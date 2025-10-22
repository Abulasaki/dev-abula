import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarkComponent } from '../mark/mark.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiService {


  constructor(private http:HttpClient) { }
  poststudent(data:any)
{
  return this.http.post<any>("http://localhost:3000/student/",data);
}
  postUser(data:any)
{
  return this.http.post<any>("http://localhost:3000/user/",data);
}
  postBloodRequest(data:any)
{
  return this.http.post<any>("http://localhost:3000/request/",data);
}
  GetBloodRequest()
{
  return this.http.get<any>("http://localhost:3000/request/");
}
updateUser(id: number, data: any): Observable<any> {
  return this.http.put<any>(`http://localhost:3000/user/${id}`, data);
}
 GetUser() {
    return this.http.get<any[]>("http://localhost:3000/user/");
  }

postDoner(data: any): Observable<any> {
  return this.http.post<any>("http://localhost:3000/Doner/", data);
}
updateDoner(id: number, data: any): Observable<any> {
  return this.http.put<any>(`http://localhost:3000/Doner/${id}`, data);
}

 GetDoner() {
    return this.http.get<any[]>("http://localhost:3000/Doner/");
  }
  deleteDoner(id: number): Observable<any> {
  return this.http.delete(`http://localhost:3000/Doner/${id}`);
}


getstudent()
{
  return this.http.get<any>("http://localhost:3000/student/",);

}
putstudent(id:number,data:any)
{
  console.log(data)

  return this.http.put<any>("http://localhost:3000/student/"+id,data);
}
deletestudent(id:number)
{
 return this.http.delete<any>("http://localhost:3000/student/"+id);

}



}
