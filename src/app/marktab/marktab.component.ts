import { Component, OnInit } from '@angular/core';
import {  MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-marktab',
  templateUrl: './marktab.component.html',
  styleUrls: ['./marktab.component.scss']
})
export class MarktabComponent implements OnInit {
  
  displayedColumns: string[] = ['tamil', 'English', 'Maths', 'physics','computerscience','Chemistry'];
  dataSource!: MatTableDataSource<any>;

  constructor() { }

  ngOnInit(): void {
   
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }
}
