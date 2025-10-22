import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DonerAddComponent } from '../doner-add/doner-add.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doner-login',
  templateUrl: './doner-login.component.html',
  styleUrls: ['./doner-login.component.scss']
})
export class DonerLoginComponent implements OnInit {
 loginForm!: FormGroup
  status=false
  hide:boolean=false
  constructor(private formbulider: FormBuilder, private http: HttpClient, private router: Router,private dialog:MatDialog,private _api:ApiService) {
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

  this._api.GetDoner().subscribe({
    next: (res) => {
      // Match user (case-sensitive property names)
      const user = res.find((a: any) => a.name === firstname && a.password === password);

      if (user) {
        // ✅ Store only non-sensitive info
        localStorage.setItem('firstname', user.name);
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
  openAddDonorDialog() {
  const dialogRef = this.dialog.open(DonerAddComponent, {
  width: '50%',        // fixed width
  maxWidth: '90vw',      // max width for small screens
  height: 'auto',
  panelClass: 'custom-dialog-container'  // optional for styling
});


    dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.ngOnInit()
      // if (donor) {
      //   // Update existing donor in array
      //   const index = this.donors.findIndex(d => d.id === donor.id);
      //   if (index !== -1) this.donors[index] = result;
      // } else {
      //   // Add new donor
      //   this.donors.push(result);
      // }
      // this.donors = [...this.donors]; // refresh table
    }
  });
  }
}


