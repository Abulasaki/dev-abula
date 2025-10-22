import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';

import { ContactusComponent } from './contactus/contactus.component';
import { CourseComponent } from './course/course.component';
import { DesignComponent } from './design/design.component';
import { ExComponent } from './ex/ex.component';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './home/home.component';
import { LogGuard } from './log.guard';
import { LoginComponent } from './login/login.component';
import { MarktabComponent } from './marktab/marktab.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PermissionGuard } from './permission.guard';
import { PopupComponent } from './popup/popup.component';
import { RegistrationComponent } from './registration/registration.component';
import { SignupComponent } from './signup/signup.component';
import { SloginComponent } from './slogin/slogin.component';
import { StudentComponent } from './student/student.component';

import{TableComponent}from'./table/table.component'
import { RichEditorComponent } from './rich-editor/rich-editor.component';
import { AdminRegComponent } from './blood-bank/admin-reg/admin-reg.component';
import { DonerLoginComponent } from './blood-bank/doner-login/doner-login.component';




const routes: Routes = [

  {

  path :'slogin',
  component:LoginComponent
  },
  {
    path :'registration',
    component:RegistrationComponent
    },
    {
      path:'Navbar',
      component:NavbarComponent
    },


      {
        path:'Design',
        component:DesignComponent
      },
      {
        path:'table',
        component:TableComponent
      },
      {
        path:'mark',
        component:MarktabComponent
      },
      {
        path:'rank',
        component:ExComponent
      },
      {
        path:'popup',
        component:PopupComponent
      },
      {
        path:'student',
        component:StudentComponent
      },
      {


        path:'login' ,
        component:SloginComponent,
        canActivate:[LogGuard],



      },
       {


        path:'doner-login' ,
        component:DonerLoginComponent,
        canActivate:[LogGuard],



      },
      {
        path:'contact',
        component:ContactusComponent
      },
        {

        path:'course',

        component:CourseComponent,
        canActivate:[AuthGuard],

      },
      {
        path:'about',
        component:AboutComponent,
        canActivate:[PermissionGuard]
      },
      {
        path:'home',

        component:HomeComponent,
        canActivate:[AuthGuard],

      },
      {
        path:'rich',
        component:RichEditorComponent
      },
      {

        path:'sign',
        component:SignupComponent,

      },
      {
        path:'front',
        component:FrontComponent,
        canActivate:[PermissionGuard]
      },
     {
    path: 'blood',
    loadChildren: () =>
      import('./blood-bank/blood-bank.module').then(m => m.BloodBankModule)
  },
      {
        path :'**',
        component:SloginComponent,
        canActivate:[AuthGuard]
        },







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
