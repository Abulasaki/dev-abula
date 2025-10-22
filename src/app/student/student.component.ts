
import { Component, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import { AfterViewInit,  OnInit, ViewChild } from '@angular/core';
import {  MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule, MAT_PAGINATOR_INTL_PROVIDER_FACTORY } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  x:any
  states: any;

  displayedColumns: string[] = ['Firstname', 'lastname', 'standard', 'ROLLNO','Address','tamil','English','Maths','computerscience','physics','Chemistry','id','Action','total','result','Grade'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
constructor(public dialog: MatDialog, private api:ApiService)
   {

   }
  ngOnInit(){
    this.getAllstudent();
   
  
  }
  
  total(row:any)
  {
  const mark=(+row.Chemistry)+(+row.tamil)+(+row.English)+(+row.Maths)+(+row.computerscience)+(+row.physics)
    // console.log(mark)
    return mark
  }
  result(row:any)
  {
     if((row.Chemistry)&&(row.tamil)&&(row.Maths)&&(row.computerscience)&&(row.physics)&&(row.English)>=35)
     {
    
      return "pass";
     }
    
     else
    {
       return "Fail";
    }
   

  }
  Grade(row:any)
  {
    const mark=(+row.Chemistry)+(+row.tamil)+(+row.English)+(+row.Maths)+(+row.computerscience)+(+row.physics)
    // console.log(mark)
  
    if(mark>=500 && mark<=600)
    {
      return "You Got A+ Grade";
    }
    else if(mark>=450 && mark<=499)
    {
      return "You Got A+ Grade";
    }
    else if(mark>=400 &&mark<=450)
    {
      return "You Got A Grade";
    }
    else if(mark>=350 && mark<=400)
    {
      return "You Got B Grade";
    }
    else if(mark>=300 &&mark<=349)
    {
    return "You Got C Grade";
    }
    else if(mark>=209 && mark<=299)    {
      return "You Got C Grade";
    }
   
    else {
      return "You Got F Grade";
    }
  }
  openDialog()
  {
   const dialogRef = this.dialog.open( DialogComponent, {
     width: '80',
    })
    .afterClosed().subscribe(val=>
      {
        if(val=='save')
        this.getAllstudent();
      })}
   getAllstudent()
   {
     console.log('table worsks')
     this.api.getstudent()
     .subscribe({
       next:(res:any)=>{
           console.log(res)
        //  const val=  this.studentForm?.get('tamil').value+this.studentForm?.get('English').value
        //  console.log(val)
        //    console.log(this.studentForm.get('tamil').value)
         this.dataSource=new MatTableDataSource(res);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort
       },
     })
     }
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    // let filteredData=(event.target as HTMLInputElement).value;
    // this..filter=filterValue.trim().toLocaleLowerCase();
   }
   editstudent(row:any)
   {
     this.dialog.open(DialogComponent,{
       width:'40%',
       data:row,
     }).afterClosed().subscribe(val=>
      {
        if(val==='update')
        this.getAllstudent();
      })
   }
 
   deletestudent(id:number)
   {
     this.api.deletestudent(id)
     
     .subscribe(
       {
         next:()=>{
           alert("student data deleted");
           this.getAllstudent();
         },
         error:()=>{
           alert("student Data cant  deleted")
         }
       }
     )}

   
}





