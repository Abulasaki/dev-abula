import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  course!: FormGroup;
  actionBtn: string = "save";
  image: any[] = [];

  constructor(private formbulider: FormBuilder, private api: ApiService, private dialogRef: MatDialogRef<AddCourseComponent>,@Inject(MAT_DIALOG_DATA) public edit:any) {

  }

  ngOnInit(): void {
    this.getcourse();

    this.course = this.formbulider.group(
      {
        image: [null],
        coursename: [null],
        postedon: [null],
        title: [null]

      }
    );
    if (this.edit) {
      this.actionBtn = "Update",
        // this.course.controls["'image'"]?.setValue(this.edit.image),
        this.course.controls["'coursename'"].setValue(this.edit.coursename),
        this.course.controls["'postedon'"].setValue(this.edit.postedon),
        this.course.controls["' title'"].setValue(this.edit.title)
      }

  }
  Addcourse() {
  
    if (true) {
      this.api.getcourse().subscribe((data) => {
        this.image = data;
        //console.log(this.image)
        function extractValue(image: any[], prop: string) {
          let extractedValue = image.map((item) => {
            // item[(prop)], prop.split('//')
            // console.log("extract :",item.image)
            
            var spilted = item.image.split('\\')
            console.log("image name:",spilted[2])
          });

          console.log(extractedValue);
          let value = extractValue
        }
        const result = extractValue(this.image, 'image');
        console.log(result);
        this.api.postcourse(this.course.value)
          .subscribe({
            next: (res: any) => {

              // alert("course posted");
              console.log(res);
              this.dialogRef.close('save')
              this.getcourse();

            }
          })
      })
    }
  }

  getcourse() {
    this.api.getcourse().subscribe({
      next: (res: any) => {


        // alert("course get")


      }
    })
  }

}
