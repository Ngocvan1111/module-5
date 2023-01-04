import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../../model/facility/facility-type';
import {RentType} from '../../../model/facility/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityTypeService} from '../../../service/facility-type.service';
import {RentTypeService} from '../../../service/rent-type.service';
import {FacilityService} from '../../../service/facility.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Facility} from '../../../model/facility/facility';
import {Customer} from '../../../model/customer/customer';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  facilityTypeList: FacilityType[] = [
    {id: 0, name: ''},
  ];
  rentTypeList: RentType[] = [
    {id: 0, name: ''},
  ];
  id: number = 0;
  facility: Facility = {id: 0, name: '', facilityType: {id:0, name: ''}}
  facilityType: FacilityType = {id: 0 , name: ''};
  editForm: FormGroup;
  constructor(private facilityTypeService:FacilityTypeService,
              private rentTypeService: RentTypeService,
              private facilityService:FacilityService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
    this.facilityTypeService.getAllFacilityType().subscribe(date => {
      this.facilityTypeList = date;
    }, error => {}, () =>{})
    this.rentTypeService.getAllRentType().subscribe(date => {
      this.rentTypeList = date
    },error => {}, ()=>{})
    this.activatedRoute.paramMap.subscribe(date => {
      // @ts-ignore
      this.id =date.get('id')
      if(this.id != null){
        // @ts-ignore
        this.facilityService.findById(parseInt(this.id)).subscribe(date => {
          this.facility =date;
          this.facilityType = this.facility.facilityType
        },error => {}, () => {})
      }
    })




    this.editForm = new FormGroup({
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
  compareFn(f1: FacilityType, f2: FacilityType): boolean {
    return f1.id === f2.id;
  }
  compareFn1(r1: RentType, r2: RentType): boolean {
    return r1.id === r2.id;
  }
  // tslint:disable-next-line:typedef

  onSubmit() {
    if (this.editForm.valid){
      this.facilityService.edit(this.editForm.value.id, this.editForm.value).subscribe(date => {
        console.log(this.editForm.value.id)
        console.log(this.editForm.value)
      })
      alert('Submit thanh cong');
      this.router.navigateByUrl('list-facility').then(r => {})
    }
    else {  alert('Submit thất bại'); }
  }

}
