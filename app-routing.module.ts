import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { AdminDetailComponent } from './admin/admin-detail/admin-detail.component';
import {AdminEditComponent} from './admin/admin-edit/admin-edit.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { AddStudentsComponent } from './students/add-students/add-students.component';
import { EditStudentsComponent } from './students/edit-students/edit-students.component';
import { ListStudentsComponent } from './students/list-students/list-students.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'user', component: UserComponent},
  // {path: 'signup', component: SignupComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'admin',
    children: [
      {path: '', component: AdminComponent},
      {path: 'admin-detail/:id', component: AdminDetailComponent},
      {path: 'admin-edit', component: AdminEditComponent}
    ]
  },
  {path: 'user-detail/:id', component: UserDetailComponent},
  {path: 'students',
    children: [
      {path: '', component: StudentsComponent},
      {path: 'add-student', component: AddStudentsComponent},
      {path: 'edit-student/:id', component: EditStudentsComponent},
      {path: 'list-student', component: ListStudentsComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



