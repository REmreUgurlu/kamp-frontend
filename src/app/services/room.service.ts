import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  apiUrl = 'https://localhost:44325/api/rooms/';

  constructor(private httpClient: HttpClient) {}

  getRooms(): Observable<ListResponseModel<Room>> {
    return this.httpClient.get<ListResponseModel<Room>>(this.apiUrl + 'getall');
  }
}
