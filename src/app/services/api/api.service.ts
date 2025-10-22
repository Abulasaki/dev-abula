import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http:HttpClient ) { }
   AddDoner(data:any)
  {
    return this.http.post<any>("http://localhost:3000/Doner/",data);
  }
  postcourse(data:any)
  {
    return this.http.post<any>("http://localhost:3000/course/",data);
  }

  getcourse()
  {
    return this.http.get<any>("http://localhost:3000/course/",);

  }
  putcourse(id:number,data:any)
  {
    console.log(data)

    return this.http.put<any>("http://localhost:3000/course/"+id,data);
  }
  deletecourse(id:number)
  {
   return this.http.delete<any>("http://localhost:3000/course/"+id);

  }

}
