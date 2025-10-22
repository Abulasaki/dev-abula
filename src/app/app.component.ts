import { ApplicationModule, Component, DoCheck, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import { AfterViewInit,  OnInit, ViewChild } from '@angular/core';
import {  MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule, MAT_PAGINATOR_INTL_PROVIDER_FACTORY } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ApiService } from './services/api/api.service';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit,DoCheck {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  displayuser=false;
  currentrole:any
  displayitem=false
  userName!:string;
  
constructor(private http:HttpClient,private router: Router,private auth:AuthGuard,private authser:AuthService)
   {
    

   }
  
  
  ngOnInit()
  {
  
   this.user()
  }
  ngDoCheck() {
  if(  this.router.url=='/login')
  {
   this.displayitem=false
  }
  else
  {
    this.displayitem=true
  }
    
  }
  
   
  user()
  {
    //   console.log(this.user)
    // return this.user;
    this.userName=JSON.parse(localStorage.getItem('firstname')!)
    console.log(this.userName)
  //   console.log(this.displayuser)
  //   let currentrole=localStorage.getItem('Role')
  //   console.log(currentrole)
  //  this.displayuser=(this.currentrole=='admin'||this.currentrole=='user')
  //   return user;
  }
  
  Logout()
  {
    localStorage.clear(),
    this.router.navigate(['/login'])
   
  }
}

