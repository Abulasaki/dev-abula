import { Component, DebugElement, Inject, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Observable } from 'rxjs';
import { fail } from 'assert';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  studentForm!: FormGroup
  actionBtn: string = "save"

  RollNO: any[] = [];

  found: any;
  Res: boolean = true
  result: any;
  check: any;
  constructor(private formBulider: FormBuilder, private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editstudent: any,
    private dialogRef: MatDialogRef<DialogComponent>) { }
  ngOnInit(): void {
    
    this.studentForm = this.formBulider.group({
      Firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      standard: ['', Validators.required],
      RollNO: ['', Validators.required],
      Address: ['', Validators.required],
      id: [''],
      tamil:[''],
      English:[''],
      Maths:[''],
      computerscience:[''],
      physics:[''],
      Chemistry:['']

    })
    if (this.editstudent) {
      this.actionBtn = "Update",
        this.studentForm.controls['Firstname'].setValue(this.editstudent.Firstname),
        this.studentForm.controls['lastname'].setValue(this.editstudent.lastname),
        this.studentForm.controls['standard'].setValue(this.editstudent.standard),
        this.studentForm.controls['RollNO'].setValue(this.editstudent.RollNO),
        this.studentForm.controls['Address'].setValue(this.editstudent.Address),
        this.studentForm.controls['id'].setValue(this.editstudent.id)
        this.studentForm.controls['tamil'].setValue(this.editstudent.tamil),
        this.studentForm.controls['English'].setValue(this.editstudent. English),
        this.studentForm.controls['Maths'].setValue(this.editstudent. Maths),
        this.studentForm.controls['computerscience'].setValue(this.editstudent.computerscience),
        this.studentForm.controls['physics'].setValue(this.editstudent. physics),
        this.studentForm.controls['Chemistry'].setValue(this.editstudent.Chemistry)
        
    }
  }
  Addstudent() {
    console.log(this.studentForm.get('RollNO')?.value)
    console.log(this.studentForm.valid)
    console.log(this.RollNO)
    if (!this.editstudent) {
      if (this.studentForm.valid) {
        this.api.getstudent().subscribe((data) => {
          this.RollNO = data;
          console.log(this.RollNO)
          function extractValue(RollNO: any[], prop: string) {
            let extractedValue = RollNO.map((item: { [x: string]: any; }) => item[prop]);
            return extractedValue;
          }

          const result = extractValue(this.RollNO, 'RollNO');
          console.log(result);

          let RollNO = this.RollNO.filter((x: { RollNO: any; }) => x.RollNO == this.studentForm.get('RollNO')?.value);
          console.log(RollNO)
          console.log(RollNO.length)
      if (RollNO.length===0) {
          
          alert("user new")
        let Res = this.RollNO.find((x: { RollNO: any; }) => x.RollNO === this.studentForm.get('RollNO')?.value);
        console.log(this.RollNO)
        console.log(this.Res)
        this.api.poststudent(this.studentForm.value)
          .subscribe({
            next: (res: any) => {


              alert("student added sucessfully")
              this.studentForm.reset();
              this.dialogRef.close('save')
              
              this.getAllstudent()
            },
          });
        }
        else
        {
          alert("already exist")
        }
            error: () => {
              alert("while adding student")
            }
          })
      }
    }
    else {
      this.updatestudent();
    }
  }
  updatestudent() {
    this.api.putstudent(this.editstudent.id, this.studentForm.value,)
      .subscribe(
        {
          next: (res: any) => {
            alert("student updated suceesfully");
            this.studentForm.reset();
            this.dialogRef.close('update')

          },
          error: () => {
            alert("product can't updated")
          }
        }
      )
  }

  
  getAllstudent() {
    
    this.api.getstudent()
      .subscribe({
        next: (res: any) => {
        
        },
      })
  }
}


