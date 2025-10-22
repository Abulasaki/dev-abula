import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  constructor( private api: ApiService) { }
  public courselist:any;

  ngOnInit(): void {
    this.getcourse()
  }
  getcourse()
  {
    this.api.getcourse().subscribe({
      next: (res: any) => {
        
       
       var newData =  res.map((ele:any)=>({...ele, image : ele.image ? ele.image.split('\\')[2] : "dummy.png"
      }))
      console.log(newData);
      this.courselist=newData
    }})
  }

}
