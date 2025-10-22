import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bloodnav',
  templateUrl: './bloodnav.component.html',
  styleUrls: ['./bloodnav.component.scss']
})
export class BloodnavComponent implements OnInit {
 currentUser: any;
   @ViewChild('sidenav') sidenav!: MatSidenav;
   Role:boolean=false
  constructor(private _route:Router) { }

  ngOnInit(): void {
    const donorFlag = localStorage.getItem('Role');
    this.currentUser=localStorage.getItem('firstname')// this returns string | null
  this.Role = donorFlag == 'Doner';  // convert string to boolean
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
  logout()
  {
    localStorage.clear()
this._route.navigateByUrl('/login')
  }

}
