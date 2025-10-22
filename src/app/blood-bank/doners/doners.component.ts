import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DonerAddComponent } from '../doner-add/doner-add.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-doners',
  templateUrl: './doners.component.html',
  styleUrls: ['./doners.component.scss']
})
export class DonersComponent implements OnInit {

  displayedColumns: string[] = [
  'name',
  'bloodGroup',
  'age',
  'contact',
  'address',
  'lastDonateDate',
  'willingToDonate',
  'action'
];
  donors:any = [];

  constructor(private dialog: MatDialog,private _api:ApiService) {}
  ngOnInit() {
   this.loadDonors()
  }

loadDonors(): void {
  this._api.GetDoner().subscribe({
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
  editDonor(donor: any) {
  // Open your donor edit dialog
  console.log('Editing donor:', donor);
  this.dialog.open(DonerAddComponent, {
    width: '400px',
    data: donor, // pass donor data to edit
  });
}

deleteDonor(donor: any) {
  if (confirm(`Are you sure you want to delete ${donor.FirstName}?`)) {
    this._api.deleteDoner(donor.id).subscribe(() => {
      // Remove from local array after successful delete
      this.donors = this.donors.filter((d:any) => d?.id !== donor.id);
      alert('Donor deleted successfully!');
    }, error => {
      console.error('Error deleting donor:', error);
      alert('Failed to delete donor!');
    });
  }
}




}
