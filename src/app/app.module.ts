import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
;
import { ReactiveFormsModule } from '@angular/forms';
import { DesignComponent } from './design/design.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { TableComponent } from './table/table.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { PopupComponent } from './popup/popup.component';

import {HttpClientModule} from '@angular/common/http';
import { DialogComponent } from './dialog/dialog.component';
import { MatSortModule } from '@angular/material/sort';
import { MarkComponent } from './mark/mark.component';
import { MarktabComponent } from './marktab/marktab.component';
import { ExComponent } from './ex/ex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule}from '@angular/material/list';
import { StudentComponent } from './student/student.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SloginComponent } from './slogin/slogin.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CourseComponent } from './course/course.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FrontComponent } from './front/front.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { RapidTextEditorModule } from 'rapid-text-editor';
import { RichEditorComponent } from './rich-editor/rich-editor.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    RegistrationComponent,
     DesignComponent,
     NavbarComponent,
     TableComponent,
     PopupComponent,
     DialogComponent,
     MarkComponent,
     MarktabComponent,
     ExComponent,
     StudentComponent,
     NavComponent,
     SloginComponent,
     ContactusComponent,
     CourseComponent,
     AboutComponent,
     HomeComponent,
     SignupComponent,
     FrontComponent,
     AddCourseComponent,
     RichEditorComponent,




  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    MatButtonModule,
    MatPaginatorModule,
    MatDialogModule,
    HttpClientModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule ,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    LayoutModule,
    RapidTextEditorModule,






  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
