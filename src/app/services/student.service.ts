import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'https://localhost:44325/api/';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<ListResponseModel<Student>> {
    let newPath = this.apiUrl + 'students/getall';
    return this.httpClient.get<ListResponseModel<Student>>(newPath);
  }

  getStudentsByRoomNumber(
    roomNumber: number
  ): Observable<ListResponseModel<Student>> {
    let newPath =
      this.apiUrl + 'students/getbyroomnumber?roomNumber=' + roomNumber;
    return this.httpClient.get<ListResponseModel<Student>>(newPath);
  }
}
