import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddCourseComponent } from '../course/add-course/add-course.component';
import { DesignComponent } from '../design/design.component';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {
  dataSource!: MatTableDataSource<any>
  displayedColumns: string[] = ['id', 'image', 'coursename', 'title', 'postedon', 'Action']
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public dialog: MatDialog, private api: ApiService) { }

  ngOnInit(): void {
    this.getcourse()
  }
  open() {
    this.dialog.open(AddCourseComponent,
      {
        width: '40%'
      }).afterClosed().subscribe(val => {
        {
          if (val === 'save') {
            this.getcourse();
            // alert("after get")

          }

        }
      }

      )

  } getcourse() {
    this.api.getcourse().subscribe(
      {
        next: (res: any) => {
          //console.log(res)
          // res.map(()=>
          // {
          // console.log( res.prop)
          // })
          var newData =  res.map((ele:any)=>({...ele, image : ele.image ? ele.image.split('\\')[2] : "dummy.png"
          }))
          console.log(newData)
          this.dataSource = new MatTableDataSource(newData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
          // console.log(res.image)
          // const obj=res.Map((x:any) => x.image);
          // console.log(obj)
        }
      }
    )
  }
  edit(row:any)
  {
    this.dialog.open(AddCourseComponent,{
      width:'40%',
      data:row,
    }).afterClosed().subscribe(val=>
     {
       if(val==='update')
       this.getcourse();
     })
  }  delete(id: number) {
    this.api.deletecourse(id).subscribe(
      {
        next: () => {
          alert("student data deleted");
          this.getcourse();
          console.log('id:Number')
        }
      })
  }

}

