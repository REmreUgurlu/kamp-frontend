import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentResponseModel } from 'src/app/models/studentResponseModel';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'https://localhost:44325/api/students/';

  constructor(private httpClient: HttpClient) {}

  getStudents(): Observable<StudentResponseModel> {
    return this.httpClient.get<StudentResponseModel>(this.apiUrl + 'getall');
  }
}
