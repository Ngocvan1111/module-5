import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityType} from '../../../model/facility/facility-type';
import {RentType} from '../../../model/facility/rent-type';
import {RentTypeService} from '../../../service/rent-type.service';
import {FacilityService} from '../../../service/facility.service';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {
  facilityTypeList: FacilityType[] = [
    {id: 0, name: ''}
  ];
  rentTypeList: RentType[] = [
    {id: 0, name: ''},
  ];
  facilityType: FacilityType =   {id: 0, name: ''};

  createForm: FormGroup;
  constructor(private rentTypeService:RentTypeService,
              private facilityService:FacilityService,
              private facilityTypeService:FacilityTypeService,
              private router: Router) {
    this.facilityTypeService.getAllFacilityType().subscribe(date=>{
      this.facilityTypeList =date
    }, error => {}, () => {})
    this.rentTypeService.getAllRentType().subscribe(date => {
      this.rentTypeList =date
    }, error => {}, () => {})

    this.createForm = new FormGroup({
      id: new FormControl( ),
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

  onSubmit(){
    if (this.createForm.valid){
      this.facilityService.saveFacility(this.createForm.value).subscribe(date=>{
        this.createForm.reset();
        alert("Thêm mới thành công")
        this.router.navigateByUrl("list-facility").then(r => {})
      })}
    else {  alert('Submit thất bại'); }
  }
}
