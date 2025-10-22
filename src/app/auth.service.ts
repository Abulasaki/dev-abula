import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLoggedIn()
{
 
  return localStorage!=null;
  
}
haspermissions()
{
  return localStorage!=null
  

  }
  haveroleaccess(user:any)
  {
    const Role=localStorage.getItem('Admin')
    if(Role=='Admin')
    {
      return true;
    }
    
     else
     {
     if( (Role=='user'))
     {
      return true;
    }else{
      return false

    }
     }
    

    
  }
    


  }


