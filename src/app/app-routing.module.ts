import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentComponent } from './components/student/student.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StudentComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/room/:roomNumber', component: StudentComponent },
  {
    path: 'students/add',
    component: StudentAddComponent,
    canActivate: [LoginGuard],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
