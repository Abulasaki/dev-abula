import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { AddRequestComponent } from '../add-request/add-request.component';

@Component({
  selector: 'app-my-requests',
  templateUrl: './my-requests.component.html',
  styleUrls: ['./my-requests.component.scss']
})
export class MyRequestsComponent implements OnInit {


   displayedColumns: string[] = [
    'hospital',
    'bloodGroup',
    'quantity',
    'date',
    'time',
    'notes',
    'createBy',

  ];
   donors:any = [];

   constructor(private dialog: MatDialog,private _api:ApiService) {}
   ngOnInit() {
    this.loadDonors()
   }

 loadDonors(): void {
   this._api.GetBloodRequest().subscribe({
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
   const dialogRef = this.dialog.open(AddRequestComponent, {
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
   this.dialog.open(AddRequestComponent, {
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
