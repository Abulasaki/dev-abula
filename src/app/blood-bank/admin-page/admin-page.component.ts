import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AdminRegComponent } from '../admin-reg/admin-reg.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

displayedColumns: string[] = [
  'FirstName',
  'LastName',
  'PhoneNumber',
  'email',
  'cities',
  'country',
  'State',
  'Billingaddress',
  'action'
];

donors: any[] = [];

constructor(private dialog: MatDialog, private _api: ApiService) {}

ngOnInit() {
  this.loadDonors();
}

loadDonors(): void {
  this._api.GetUser().subscribe({
    next: (res: any[]) => {
      console.log('Fetched donors:', res);
      this.donors = res;
    },
    error: (err) => {
      console.error('Error fetching donors:', err);
    }
  });
}
openAddDonorDialog() {
  const dialogRef = this.dialog.open(AdminRegComponent, {
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    panelClass: 'full-screen-dialog',
    autoFocus: false,
    restoreFocus: false,
    hasBackdrop: true,
    disableClose: false // Set to true if you want to prevent closing by clicking outside
  });

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.donors.push(result);
      this.donors = [...this.donors];
    }
  });
}
 editDonor(donor: any) {
  // Open your donor edit dialog
  console.log('Editing donor:', donor);
  this.dialog.open(AdminRegComponent, {
    width: '100vw',
    height: '100vh',
    maxWidth: '100vw',
    maxHeight: '100vh',
    panelClass: 'full-screen-dialog',
    autoFocus: false,
    restoreFocus: false,
    hasBackdrop: true,
    disableClose: false, // Set to true if you want to prevent closing by clicking outside,
      data: donor,
  });
}

deleteDonor(donor: any) {
  if (confirm(`Are you sure you want to delete ${donor.name}?`)) {
    this.donors = this.donors.filter(d => d !== donor);
  }
}
}
