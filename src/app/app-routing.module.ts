import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './components/student-add/student-add.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: StudentComponent },
  { path: 'students', component: StudentComponent },
  { path: 'students/room/:roomNumber', component: StudentComponent },
  { path: 'students/add', component: StudentAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
