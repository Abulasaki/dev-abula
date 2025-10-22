import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../services/services/api.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
form!:FormGroup
  student: []=[]
  actionBtn: string = "save"

  constructor(private formBulider: FormBuilder, private api:ApiService,private dialogRef: MatDialogRef<DesignComponent>, @Inject(MAT_DIALOG_DATA) public edit: any) { }

  ngOnInit(): void {
    this.getstudent()
    this.form=this.formBulider.group({
      Firstname: ['', Validators.required],
      lastname: [ '',Validators.required],
      standard: ['', Validators.required],
      regno: ['', Validators.required],
      class: ['', Validators.required],
      Address: ['', Validators.required],
      tamil: ['', Validators.required],
      English: ['', Validators.required],
      Maths: ['', Validators.required],
      Chemistry: ['', Validators.required],
      physics: ['', Validators.required],
    })
    if(this.edit)
    {
      this.actionBtn='update'
      this.form.controls['Firstname'].setValue(this.edit.Firstname)
      this.form.controls['lastname'].setValue(this.edit.lastname)
      this.form.controls['standard'].setValue(this.edit.standard)
      this.form.controls['regno'].setValue(this.edit.regno)
      this.form.controls['class'].setValue(this.edit.class)
      this.form.controls['Address'].setValue(this.edit.Address)
      this.form.controls['tamil'].setValue(this.edit.tamil)
      this.form.controls['English'].setValue(this.edit.English)
      this.form.controls['Maths'].setValue(this.edit.Maths)
      this.form.controls['physics'].setValue(this.edit.physics)
      this.form.controls['Chemistry'].setValue(this.edit.Chemistry)

    }
    
  }
  add()
  {
    
    if (!this.edit) {
      if (this.form.valid) {
    console.log(this.form.value)
    this.api.poststudent(this.form.value)
    .subscribe({
      next: (res: any) => {

        console.log(res)
        alert("student added sucessfully")
        this.form.reset();
        this.dialogRef.close('save')
        if(res=='save')
        this.getstudent()
      },
    
      
    });
    error: () => {
      alert("while adding student")
    }
  }
 }
else {
  this.updatestudent();
}
}

updatestudent() {
  this.api.putstudent(this.edit.id, this.form.value,)
      .subscribe(
        {
          next: (res: any) => {
            alert("student updated suceesfully");
            this.form.reset();
            this.dialogRef.close('update')
            this.getstudent()

          },
          error: () => {
            alert("product can't updated")
          }
        }
      )
}
getstudent()
      {
        console.log('add works')
        this.api.getstudent()
        .subscribe({
          next:(res:any)=>{
           
            console.log(res)
          },
          })

  // getstudent() {
  //   this.api.getstudent()
  //   .subscribe({
  //     next:(res:any)=>{
       
  //         console.log(res)
      
        
  //     },
  //     })
   
        }
      }

  

//  addstudents(student:)
//  {
//  let student: string | any[]=[]
//  if(localStorage.getItem('student'))
//  {
//    student=JSON.stringify(localStorage.getItem('student'))
//    student=[student,...student]
//  }
//  else{
//    student=[student]
//  }
//  localStorage.setItem('student',JSON.stringify(student))
// }





