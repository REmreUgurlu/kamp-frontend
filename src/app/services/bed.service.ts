import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bed } from '../models/bed';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class BedService {
  apiUrl = 'https://localhost:44325/api/beds/';

  constructor(private httpClient: HttpClient) {}

  getBeds(): Observable<ListResponseModel<Bed>> {
    return this.httpClient.get<ListResponseModel<Bed>>(this.apiUrl + 'getall');
  }
}
