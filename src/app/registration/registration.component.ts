
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})

export class RegistrationComponent implements OnInit {
  registrationForm : FormGroup;
  inlineDefaultRadios: any;
  inlineDefaultRadiosExample: any
  isSelected: boolean = true;
  deviceValue:any;

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
  city : any[]=[];

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
  cities=[{ 'Id': '1', 'StateName': 'ERODE' },
  { 'Id': '1', 'StateName': 'coimbatore' },
  { 'Id': '1', 'StateName': 'salem' },
  { 'Id': '2', 'StateName': 'Trisur' },
    { 'Id': '2', 'StateName': 'calicut' },
    { 'Id': '2', 'StateName': 'wayand' },
    { 'Id': '3', 'StateName': 'hubli' },
    { 'Id': '3', 'StateName': 'Darwad' },
    { 'Id': '3', 'StateName': 'nagar' },

  ]
 


  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      propertyType: [null, [Validators.required]],
      FirstName: [null, [Validators.required]],
      LastName: [null,],
      PhoneNumber: [null, [Validators.minLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10)]],
      Billingaddress: [null,],
      Box: [null, [Validators.minLength(3), Validators.pattern("^[0-9]*$"), Validators.maxLength(6)]],
      country: [null,],
      cities:[null,],
      countries:[null,],
      State: [null,],
      email: [null, [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      password: [null, [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")]],
      Company: [null, [Validators.required]],
      CompanyName: [null, Validators.required],
      TRNnumber: [null, Validators.required],
      Companyemail: [null, [Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      CompanyMobilenumber: [null, [Validators.required], Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$"), Validators.maxLength(10), Validators.minLength(10)]
    })
   }
  ngOnInit(): void {
    // this.registrationform = new FormGroup({
    //   country: new FormControl(''),
    //   state: new FormControl(''),
    //   city: new FormControl('')
    // });
    this.registrationForm.patchValue(
      {
       FirstName:"vinod",
       LastName:"kumar,",
       PhoneNumber:"9677352886",
       Billingaddress:"123",
       Box:"12344",
       email:"abul@gmail.com",
       country:"india",
       city:"Tamilnadu",
       password:"#Abu1486",
       propertyType:"Retail",
       TRNnumber:"123456",
       CompanyName:"rapiddata",
       Companyemail:"Rapid@gmail.com",
       CompanyMobilenumber:"8789679676"




       
  
      })
    };
    
   
    
  
  
  onChange(event: Event) {
    // console.log(event)
    this.city = this.cities.filter(x => 
      x.Id == this.registrationForm.get('country')?.value
     );
     console.log(this.city)
  }
  



  onSubmit() {
    console.log(this.registrationForm.value)



  }
 
  get() {
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




