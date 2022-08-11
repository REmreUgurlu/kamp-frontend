import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from 'src/app/models/student';
import { CartService } from 'src/app/services/cart.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students: Student[] = [];
  dataLoaded = false;
  filterText = '';

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private cartService: CartService
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

  addToCart(student: Student) {
    this.toastrService.success(
      'Added to Cart',
      student.firstName + student.lastName
    );
    this.cartService.addToCart(student);
  }
}
