import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css'],
})
export class StudentAddComponent implements OnInit {
  studentAddForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createStudentAddForm();
  }

  createStudentAddForm() {
    this.studentAddForm = this.formBuilder.group({
      roomId: ['', Validators.required],
      bedId: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      citizenNo: ['', Validators.required],
      university: ['', Validators.required],
      education: ['', Validators.required],
      grade: ['', Validators.required],
      phoneNumber: ['', Validators.required],
    });
  }

  add() {
    if (this.studentAddForm.valid) {
      let studentModel = Object.assign({}, this.studentAddForm.value);
      this.studentService.add(studentModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Successful');
        },
        (responseError) => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Invalid Form', 'Warning');
    }
  }
}
