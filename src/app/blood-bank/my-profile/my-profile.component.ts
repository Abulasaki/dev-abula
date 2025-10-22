import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { DonerAddComponent } from '../doner-add/doner-add.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
donor:any
  constructor(private _api:ApiService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.loadData()
  }
 loadData() {
    // Get logged-in donor's name from localStorage
    const currentName = localStorage.getItem('firstname');

    if (!currentName) return; // No logged-in donor

    // Fetch all donors
    this._api.GetDoner().subscribe({
      next: (res: any[]) => {
        // Find the donor that matches the logged-in name
        this.donor = res.find(d => d.name === currentName);
        console.log('Current donor:', this.donor);
      },
      error: (err) => {
        console.error('Error fetching donor data:', err);
      }
    });
  }
requestBlood()
{

}
editProfile(donor:any)
{

    // Open your donor edit dialog
    console.log('Editing donor:', donor);
    this.dialog.open(DonerAddComponent, {
      width: '400px',
      data: donor, // pass donor data to edit
    });

}
}
