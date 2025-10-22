import { HttpClient } from '@angular/common/http';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stat } from 'fs';
import { EMPTY } from 'rxjs';




@Component({
  selector: 'app-slogin',
  templateUrl: './slogin.component.html',
  styleUrls: ['./slogin.component.scss']
})
export class SloginComponent implements OnInit {
  loginForm!: FormGroup
  status=false
  hide:boolean=false
  constructor(private formbulider: FormBuilder, private http: HttpClient, private router: Router) {
    this.loginForm = formbulider.group(
      {
        firstname: [null, [Validators.required]],
        password: [null,],
      }


    )
  }

  ngOnInit(): void {


  }
isLoggedIn() {
  const { firstname, password } = this.loginForm.value;

  this.http.get<any>("http://localhost:3000/user").subscribe({
    next: (res) => {
      // Match user (case-sensitive property names)
      const user = res.find((a: any) => a.FirstName === firstname && a.password === password);

      if (user) {
        // ✅ Store only non-sensitive info
        localStorage.setItem('firstname', user.FirstName);
        localStorage.setItem('Role', user.Role || 'user');

        // Reset form
        this.loginForm.reset();

        // Navigate based on role
        if (user.Role && user.Role.toLowerCase() === 'admin') {
          this.router.navigate(['/blood/admin']);
        } else {
          this.router.navigate(['/blood/home']);
        }

        console.log(`Login successful: ${user.FirstName}`);
      } else {
        // ❌ Invalid credentials
        alert('Login unsuccessful! Please check your credentials.');
        this.loginForm.reset();
        localStorage.clear();
        this.router.navigate(['/login']);
      }
    },
    error: (err) => {
      console.error('Login error:', err);
      alert('Server error! Try again later.');
    }
  });
}

}


