import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { BloodnavComponent } from './bloodnav/bloodnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonersComponent } from './doners/doners.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';

const routes: Routes = [
  { path: 'reg', component: AdminRegComponent },
  {
    path: '', // layout route
    component: BloodnavComponent, // sidenav layout
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'donors', component: DonersComponent },
         { path: 'admin', component: AdminPageComponent },
         {path:'profile',component:MyProfileComponent},
              {path:'my-req',component:MyRequestsComponent},
      // { path: 'requests', component: RequestsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' } // default page
    ]
  },
  { path: '**', redirectTo: '' } // fallback route
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodBankRoutingModule { }
