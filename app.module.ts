import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AdminComponent,
    UserDetailComponent,
    AdminDetailComponent,
    AdminEditComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    StudentsComponent,
    AddStudentsComponent,
    ListStudentsComponent,
    EditStudentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
