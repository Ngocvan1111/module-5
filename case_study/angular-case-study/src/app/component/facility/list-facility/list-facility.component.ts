import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityType} from '../../../model/facility/facility-type';
import {RentType} from '../../../model/facility/rent-type';
import {FacilityService} from '../../../service/facility.service';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilitys: Facility [] = [];
  temp: Facility = {id: 0, name: '', facilityType: {id: 0, name: ''}};
  constructor(private facilityService: FacilityService) {
    this.facilityService.getAllFacility().subscribe(date => {
      this.facilitys = date;
    }, error => {}, () => {});
  }

  ngOnInit(): void {
  }

  reload() {
    this.facilityService.getAllFacility().subscribe(date => {
      this.facilitys = date;
    }, error => {}, () => {});

  }
}
