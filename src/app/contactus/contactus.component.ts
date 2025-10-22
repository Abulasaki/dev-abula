import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
contactForm!:FormGroup
constructor(private formbulider:FormBuilder) {
  this.contactForm=formbulider.group(
    {
      name: [null, [Validators.required]],
      
      email:[''],
      phonenumber:[''],
      Message:[null]

    }

  )
  }

  ngOnInit(): void {
  }
  send()
{
  console.log(this.contactForm.value)
}

}
