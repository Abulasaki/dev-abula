import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloodBankRoutingModule } from './blood-bank-routing.module';
import { AdminRegComponent } from './admin-reg/admin-reg.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';

// Angular Material Modules
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { BloodnavComponent } from './bloodnav/bloodnav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonersComponent } from './doners/doners.component';
import { DonerAddComponent } from './doner-add/doner-add.component';
import { MatNativeDateModule } from '@angular/material/core';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DonerLoginComponent } from './doner-login/doner-login.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { AddRequestComponent } from './add-request/add-request.component';

@NgModule({
  declarations: [
    AdminRegComponent,
    BloodnavComponent,
    DashboardComponent,
    DonersComponent,
    DonerAddComponent,
    AdminPageComponent,
    DonerLoginComponent,
    MyProfileComponent,
    MyRequestsComponent,
    AddRequestComponent
  ],
  imports: [
    CommonModule,
    BloodBankRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,

    // Material Modules
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,

    MatNativeDateModule,
  ]
})
export class BloodBankModule { }
