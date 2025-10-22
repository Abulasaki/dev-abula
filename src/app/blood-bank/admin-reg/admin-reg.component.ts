import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';

import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin-reg',
  templateUrl: './admin-reg.component.html',
  styleUrls: ['./admin-reg.component.scss']
})
export class AdminRegComponent implements OnInit {
  registrationForm: FormGroup;
  inlineDefaultRadios: any;
  inlineDefaultRadiosExample: any
  isSelected: boolean = true;
  deviceValue: any;
  hide: boolean = false

  /*countries: {} | undefined;
  states: {} |undefined;
  city: {} |undefined;*/
  /*Country = [
    { 'name': 'USA', 'id': '1' },
    { 'name': 'India', 'id': '2' }
  ]
  State = [
     cities: ['Hamburg', 'Berlin', 'Munich']
     cities: ['Roma', 'Milan', 'Napoli']
    { 'Id': '1', 'StateName': 'Tamilnadu' },
    { 'Id': '1', 'StateName': 'Kerala' },
    { 'Id': '1', 'StateName': 'Karnataka' },
    { 'Id': '2', 'StateName': 'aa' },

    { 'Id': '2', 'StateName': 'cc' },
    { 'Id': '2', 'StateName': 'dd' },


  ]*/
  city: any[] = [];

  countries = [{
    id: 1, name: 'TamilNadu',
  },
  {
    id: 2, name: 'Kearla',
  },
  {
    id: 3, name: 'Karnantka',
  },
  ];
  cities = [{ 'Id': '1', 'StateName': 'ERODE' },
  { 'Id': '1', 'StateName': 'coimbatore' },
  { 'Id': '1', 'StateName': 'salem' },
  { 'Id': '2', 'StateName': 'Trisur' },
  { 'Id': '2', 'StateName': 'calicut' },
  { 'Id': '2', 'StateName': 'wayand' },
  { 'Id': '3', 'StateName': 'hubli' },
  { 'Id': '3', 'StateName': 'Darwad' },
  { 'Id': '3', 'StateName': 'nagar' },

  ]



  constructor(private formBuilder: FormBuilder, private _api: ApiService, public dialogRef: MatDialogRef<AdminRegComponent>, private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.registrationForm = this.formBuilder.group({
      id: null,
      // propertyType: [null, [Validators.required]],
      FirstName: [null, [Validators.required]],
      LastName: [null,],
      PhoneNumber: [null, [Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]],
      Billingaddress: [null,],
      // Box: [null, [Validators.minLength(3), Validators.pattern("^[0-9]*$"), Validators.maxLength(6)]],
      country: [null,],
      cities: [null,],
      countries: [null],

      State: [null,],
      email: [null, [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      // Company: [null],
      // CompanyName: [null],
      // TRNnumber: [null],
      // Companyemail: [null, [Validators.email]],
      // CompanyMobilenumber: [null, Validators.required,Validators.maxLength(10), Validators.minLength(10)]
    })
  }
  ngOnInit(): void {
    // this.registrationform = new FormGroup({
    //   country: new FormControl(''),
    //   state: new FormControl(''),
    //   city: new FormControl('')
    // });
    // this.registrationForm.patchValue(
    //   {
    //    FirstName:"vinod",
    //    LastName:"kumar,",
    //    PhoneNumber:"9677352886",
    //    Billingaddress:"123",
    //    Box:"12344",
    //    email:"abul@gmail.com",
    //    country:"india",
    //    city:"Tamilnadu",
    //    password:"#Abu1486",
    //    propertyType:"Retail",
    //    TRNnumber:"123456",
    //    CompanyName:"rapiddata",
    //    Companyemail:"Rapid@gmail.com",
    //    CompanyMobilenumber:"8789679676"






    //   })
    if (this.data) {
      this.prefill()
    }
  };


  prefill() {
    if (this.data) {
      this.registrationForm.patchValue({
        id: this.data.id,
        FirstName: this.data.FirstName || '',
        LastName: this.data.LastName || '',
        PhoneNumber: this.data.PhoneNumber || '',
        Billingaddress: this.data.Billingaddress || '',
        country: this.data.country || '',
        cities: this.data.cities || '',
        countries: this.data.countries || '',
        State: this.data.State || '',
        email: this.data.email || '',
        password: this.data.password || ''
      });
    }

  }


  onChange(event: any) {
    // console.log(event)
    this.city = this.cities.filter(x =>
      x.Id == this.registrationForm.get('country')?.value
    );
    console.log(this.city)
  }




  onSubmit() {
    console.log(this.registrationForm.value)
    if (!this.data?.id) {
      // ✅ Create new donor/user
      this._api.postUser(this.registrationForm.value).subscribe({
        next: (res) => {
          console.log('User added:', res);
          alert('User added successfully!');
          this.dialogRef.close(true); // close popup
          this._router.navigate(['/login']); // ✅ redirect to login
        },
        error: (err) => {
          console.error('Error adding user:', err);
          alert('Failed to add user!');
        }
      });
    } else {
      // ✅ Update donor/user
      this._api.updateUser(this.data.id, this.registrationForm.value).subscribe({
        next: (res) => {
          console.log('User updated:', res);
          alert('User updated successfully!');
          this.dialogRef.close(true); // close popup
          this._router.navigate(['/blood/admin']); // ✅ redirect to admin page
        },
        error: (err) => {
          console.error('Error updating user:', err);
          alert('Failed to update user!');
        }
      });
    }
  }




  show() {
    console.log(this.registrationForm)
  }
  /*  onChangeCountry(event: Event) {
      console.log((event.target as HTMLInputElement).value)
    }
    onChange(deviceValue) {
      this.cities = this.countries.filter(x => x.id == deviceValue)[0].cities;
    }




    /*onstateCountry(event: Event,) {
      this.State = this. onChangeCountry(this.).filter((state) => state.id == countryId);
      return


     }*/







}




