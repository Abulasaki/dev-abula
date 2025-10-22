import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doner-add',
  templateUrl: './doner-add.component.html',
  styleUrls: ['./doner-add.component.scss']
})
export class DonerAddComponent implements OnInit {
  donorForm: FormGroup
  hide:boolean=false
  constructor(private fb: FormBuilder, private _api: ApiService, public dialogRef: MatDialogRef<DonerAddComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.donorForm = this.fb.group({
      // id:0,
      name: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      contact: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],                 // New field
      lastDonateDate: [''],                               // Optional
      willingToDonate: [false],
      password:[null],
      Role:['Doner']                          // Checkbox
    });

  }

  ngOnInit(): void {
    if (this.data?.id) {
      this.donorForm.patchValue({
        id:this.data.id,
        name: this.data.name,
        bloodGroup: this.data.bloodGroup,
        age: this.data.age,
        contact: this.data.contact,
        address: this.data.address,
        lastDonateDate: this.data.lastDonateDate,
        willingToDonate: this.data.willingToDonate,
        password:this.data.password,
         Role:['Doner']
      });
    }
  }
  submit() {
    // debugger
    // alert('Submit')
    console.log(this.donorForm.value); // see what’s being sent

    if (this.donorForm.valid) {
      if (!this.data) {
        this._api.postDoner(this.donorForm.value).subscribe({
          next: (res) => {
            console.log('Donor added:', res);
            alert('Donor added successfully!');
            this.dialogRef.close(res);
          },
          error: (err) => {
            console.error('Error adding donor:', err);
          }
        });
      }
    }
    else{
        this._api.updateDoner(this.data.id,this.donorForm.value).subscribe({
          next: (res) => {
            console.log('Donor added:', res);
            alert('Donor added successfully!');
             this.dialogRef.close(res);
          },
          error: (err) => {
            console.error('Error adding donor:', err);
          }
        });
    }
  }
}
