import { Component, OnInit } from '@angular/core';
import { Room } from 'src/app/models/room';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  rooms: Room[] = [];
  currentRoom: Room;
  emptyRoom: Room;
  dataLoaded = false;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService.getRooms().subscribe((response) => {
      this.rooms = response.data;
      this.dataLoaded = true;
    });
  }

  setCurrentRoom(room: Room) {
    this.currentRoom = room;
  }

  getCurrentRoomClass(room: Room) {
    if (room == this.currentRoom) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  getAllRoomClass() {
    if (!this.currentRoom) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

  clearCurrentRoom() {
    this.currentRoom = this.emptyRoom;
  }
}
