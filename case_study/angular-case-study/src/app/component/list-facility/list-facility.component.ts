import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {FacilityType} from '../../model/facility/facility-type';
import {RentType} from '../../model/facility/rent-type';

@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {
  facilitys: Facility [] = [
    {id: 1,
      name: 'Vila',
      area: 100,
      cost: 200,
      maxPeople: 10,
      facilityType: {id: 1, name: 'vila'},
      rentType: {id: 1, name: 'Hour'},
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'super comfortable',
      poolArea: 300,
      numberOfFloors: 22
    },
    {id: 2,
      name: 'Vila',
      area: 100,
      cost: 200,
      maxPeople: 10,
      facilityType: {id: 1, name: 'vila'},
      rentType: {id: 1, name: 'Hour'},
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'super comfortable',
      poolArea: 300,
      numberOfFloors: 22
    },
    {id: 3,
      name: 'Vila',
      area: 100,
      cost: 200,
      maxPeople: 10,
      facilityType: {id: 1, name: 'vila'},
      rentType: {id: 1, name: 'Hour'},
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'super comfortable',
      poolArea: 300,
      numberOfFloors: 22
    },
    {id: 3,
      name: 'Vila',
      area: 100,
      cost: 200,
      maxPeople: 10,
      facilityType: {id: 1, name: 'vila'},
      rentType: {id: 1, name: 'Hour'},
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'super comfortable',
      poolArea: 300,
      numberOfFloors: 22
    },
    {id: 3,
      name: 'Vila',
      area: 100,
      cost: 200,
      maxPeople: 10,
      facilityType: {id: 1, name: 'vila'},
      rentType: {id: 1, name: 'Hour'},
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'super comfortable',
      poolArea: 300,
      numberOfFloors: 22
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
