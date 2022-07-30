import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  student1 = { studentId: 1, studentName: 'Emre', roomId: 21, bedId: 18 };
  student2 = { studentId: 2, studentName: 'ahmet', roomId: 21, bedId: 25 };
  student3 = { studentId: 3, studentName: 'Bariş', roomId: 21, bedId: 14 };
  student4 = { studentId: 4, studentName: 'Kazim', roomId: 21, bedId: 12 };
  student5 = { studentId: 5, studentName: 'Firat', roomId: 21, bedId: 10 };

  students = [
    this.student1,
    this.student2,
    this.student3,
    this.student4,
    this.student5,
  ];
  constructor() {}

  ngOnInit(): void {}
}
