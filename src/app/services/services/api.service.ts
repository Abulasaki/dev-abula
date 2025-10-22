import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  post<T>(arg0: string, value: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  poststudent(data:any)
  {
    return this.http.post<any>("http://localhost:3000/profile/",data);
  }
  
  getstudent()
  {
    return this.http.get<any>("http://localhost:3000/profile/",);
    // console.log(this.getstudent)
  }
  putstudent(id:number,data:any)
  {
    // console.log(data)
  
    return this.http.put<any>("http://localhost:3000/profile/"+id,data);
  }
  deletestudent(id:number)
  { 
   return this.http.delete<any>("http://localhost:3000/profile/"+id);
  
  }
  

}
