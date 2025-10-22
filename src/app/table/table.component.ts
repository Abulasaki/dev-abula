import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {MatDialogModule} from '@angular/material/dialog';


import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


import Users from 'src/app/user.json';
import { PopupComponent } from '../popup/popup.component';


interface User {

  id: Number;
  name: String;
  username: String;
  email: String;
  
}
export interface PeriodicElement {

  id: Number;
  name: String;
  username: String;
  email: String;
  
}



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit {
  dataSource = new MatTableDataSource<User>(Users);
  clickedRows = new Set<PeriodicElement>();
  displayedColumns: string[] = ['id', 'name', 'username', 'email','Action',];
  element:any
  @ViewChild(MatPaginator)paginator!: MatPaginator;
 
  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(private dialog:MatDialog) {
    
  }
  ngOnInit(): void {
    console.log(this.dataSource)

  }
  openDia() {
    
    //<!--obj.Action=Action;
    //this.dialog.open(TableComponent,{
     // width:'30%',
     // data:obj//
     //});
    
     //const element=this.dataSource.data.find(c=>c.id==id)
   
      const dialogRef = this.dialog.open(  PopupComponent, {
        width: '50',
       // data:element
  
      });
   // console.log(id)
    
    console.log(Users)
    console.log(this.dataSource)
      //console.log(element)
}
//open()
//{
 // this.dialog.setValue(this.dataSource)
//}
}


// console.log(Users)
