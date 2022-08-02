import { Component, OnInit } from '@angular/core';
import { Bed } from 'src/app/models/bed';
import { BedService } from 'src/app/services/bed.service';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.css'],
})
export class BedComponent implements OnInit {
  beds: Bed[] = [];
  dataLoaded = false;

  constructor(private bedService: BedService) {}

  ngOnInit(): void {
    this.getBeds();
  }

  getBeds() {
    this.bedService.getBeds().subscribe((response) => {
      this.beds = response.data;
      this.dataLoaded = true;
    });
  }
}
