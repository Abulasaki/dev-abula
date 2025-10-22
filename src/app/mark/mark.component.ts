import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatRow, MatTableDataSource } from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-mark',
  templateUrl: './mark.component.html',
  styleUrls: ['./mark.component.scss']
})
export class MarkComponent implements OnInit {
  markForm!:FormGroup
  displayedColumns: string[] = [ 'English', 'Maths', 'physics','Chemistry','computerscience'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private formBulider: FormBuilder) { }

  ngOnInit(): void {
    this.markForm = this.formBulider.group({
      
      tamil:[''],
      English:[''],
      Maths:[''],
      computerscience:[''],
      physics:[''],
      Chemistry:['']


    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
   }
}
