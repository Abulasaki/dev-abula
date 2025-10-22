import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { create } from 'domain';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.scss']
})
export class AddRequestComponent implements OnInit {


 requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _api: ApiService,
    public dialogRef: MatDialogRef<AddRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    const currentName = localStorage.getItem('firstname');
    this.requestForm = this.fb.group({
      // donorId: [data.donorId],
      hospital: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      date: [null, Validators.required],
      time: ['', Validators.required],
      notes: [''],
      createBy:[currentName]
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit() {
    if(this.requestForm.valid) {
      this._api.postBloodRequest(this.requestForm.value).subscribe({
        next: res => this.dialogRef.close(true),
        error: err => console.error('Error submitting request', err)
      });
    }
  }
}
