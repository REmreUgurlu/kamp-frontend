import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  dataLoaded = false;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['roomNumber']) {
        this.getStudentsByRoomNumber(params['roomNumber']);
      } else {
        this.getStudents();
      }
    });
  }

  getStudents() {
    this.studentService.getStudents().subscribe((response) => {
      this.students = response.data;
      this.dataLoaded = true;
    });
  }

  getStudentsByRoomNumber(roomNumber: number) {
    this.studentService
      .getStudentsByRoomNumber(roomNumber)
      .subscribe((response) => {
        this.students = response.data;
        this.dataLoaded = true;
      });
  }
}
