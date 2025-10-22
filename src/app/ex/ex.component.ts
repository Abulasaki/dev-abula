import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DesignComponent } from '../design/design.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/services/api.service';


@Component({
  selector: 'app-ex',
  templateUrl: './ex.component.html',
  styleUrls: ['./ex.component.scss']
})
export class ExComponent implements OnInit {
  displayedColumns:string[]=['id','Firstname','lastname','standard','regno','Address','class','tamil','English','Maths','physics','Chemistry','Action']
  dataSource!:MatTableDataSource<any>
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog:MatDialog,private Api:ApiService) { }
  

  ngOnInit(): void {
    this.getstudent()
    
  }
open()
{
  const dialogRef = this.dialog.open( DesignComponent, {
    width: '80',
   })
}
edit(row:any)
   {
     this.dialog.open(DesignComponent,{
       width:'80%',
       data:row,
      }).afterClosed().subscribe(val=>
        {
          if(val=='update')
          
           this.getstudent();
          
          //  if(val==='update')
          //  {
          //    this.getstudent();
          //  }
        })
       }
       deletestudent(id:number)
       {
         this.Api.deletestudent(id)
         
         .subscribe(
           {
             next:()=>{
               alert("student data deleted");
               this.getstudent();
             },
             error:()=>{
               alert("student Data cant  deleted")
             }
           }
         )}
     getstudent()
   {
     console.log('table works')
     this.Api.getstudent()
     .subscribe({
       next:(res:any)=>{
        
           console.log(res)
       
         this.dataSource=new MatTableDataSource(res);
         this.dataSource.paginator=this.paginator;
         this.dataSource.sort=this.sort
       },
       })
   }
   applyFilter(event:Event)
   {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

   }

}
