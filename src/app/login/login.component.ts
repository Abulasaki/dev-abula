import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm=this.formBuilder.group({
   
    email:[null,[Validators.email,
      
      
    
      
    ]],
    password:[null
    
  
    ],
  })
  
  constructor(private formBuilder:FormBuilder ) { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    console.log( this.loginForm)
    
    let email=this.loginForm.controls["email"].value;
    let password=this.loginForm.controls["password"].value;
     console.log(this.loginForm.value)
    
    }
  }







 


