import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../../model/facility/facility-type';
import {RentType} from '../../../model/facility/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  facilityTypeList: FacilityType[] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'},
  ];
  rentTypeList: RentType[] = [
    {id: 1, name: 'Hour'},
    {id: 2, name: 'Day'},
    {id: 3, name: 'Month'}
  ];

  createForm: FormGroup;
  constructor() {
    this.createForm = new FormGroup({
      id: new FormControl('', [Validators.required] ),
      name: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, Validators.min(0)]),
      cost: new FormControl('', [Validators.required, Validators.min(0)]),
      maxPeople: new FormControl('', [Validators.required, Validators.min(1)]),
      facilityType: new FormControl('', [Validators.required]),
      rentType: new FormControl('', [Validators.required]),
      standardRoom: new FormControl(),
      descriptionOtherConvenience: new FormControl(),
      poolArea: new FormControl(),
      numberOfFloors: new FormControl(),
      facilityFree: new FormControl(),
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    alert('ok');
  }

}
