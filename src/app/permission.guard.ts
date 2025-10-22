import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { url } from 'inspector';
import { Observable } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { AddCourseComponent } from './course/add-course/add-course.component';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  constructor(private auth:AuthService,private route:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var roll= JSON.parse(localStorage.getItem('Role') ||'{}');
    console.log(roll)
    var admin=JSON.parse(localStorage.getItem('Admin') || '{}')
    console.log(admin);
    var password=JSON.parse(localStorage.getItem('password') || '{}')
    console.log(password);
    
    var user=JSON.parse(localStorage.getItem('user') || '{}')
    console.log(user);
  
   roll=admin
   
  if(password==123)
   {
 
    console.log(roll);
   
    return true

   }
   
   else
   {
    alert("Admin only access the page")
    return false
   }
   
  return false
    }
    
}

// admin
// permission.guard.ts:23 Abulkalam
// permission.guard.ts:26 {}
// permission.guard.ts:32 admin
// permission.guard.ts:33 Abulkalam


// user
// permission.guard.ts:23 hemanth
// permission.guard.ts:26 {}
// permission.guard.ts:32 admin
// permission.guard.ts:33 hemanth
// password	"1234"	
// Role	"user"	
// Admin	"hemanth"


// Admin	"Abulkalam"	
// password	"123"	
// Role	"admin"