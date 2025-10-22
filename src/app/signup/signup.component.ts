import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
regForm!:FormGroup
  constructor(private formbulider:FormBuilder,private http:HttpClient,private router:Router) {
    this.regForm=formbulider.group(
      {
        firstname: [null, [Validators.required]],
        email:[null,Validators.email],
        Number:[null,Validators.minLength(10)],

        password: [null,],
        Role:['']
      })
  }

  ngOnInit(): void {

  }
  Register()
{
  this.http.post<any>("http://localhost:3000/login/",this.regForm.value).subscribe(res=>{
  {


    alert("succesully registerd");
    this.regForm.reset()
    this.router.navigate(['/login']);
  }},err=>
    {
      alert("something went wrong")

    })
  }






  }
