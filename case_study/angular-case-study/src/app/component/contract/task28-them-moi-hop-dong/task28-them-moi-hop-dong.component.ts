import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {Employee} from '../../../model/employee/employee';
import {Facility} from '../../../model/facility/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-task28-them-moi-hop-dong',
  templateUrl: './task28-them-moi-hop-dong.component.html',
  styleUrls: ['./task28-them-moi-hop-dong.component.css']
})
export class Task28ThemMoiHopDongComponent implements OnInit {
  customerList: Customer[] = [
    {id: 1, name: 'Lại Văn Ngọc', customerType: {id: 1, name: 'diamond'}},
    {id: 2, name: 'Trần Văn Lộc', customerType: {id: 2, name: 'diamond'}},
    {id: 3, name: 'Nguyễn Thị Thủy', customerType: {id: 3, name: 'diamond'}}
  ];
  employeeList: Employee[] = [
    {id: 1, name: 'Lại Văn Ngọc'},
    {id: 2, name: 'Trần Văn Lộc'},
    {id: 3, name: 'Nguyễn Thị Thủy'}
  ];
  facilityList: Facility[] = [
    {id: 1, name: 'House 1', facilityType: {id: 1, name: 'House'}},
    {id: 2, name: 'Villa 1', facilityType: {id: 1, name: 'House'}},
    {id: 3, name: 'Room 1', facilityType: {id: 1, name: 'House'}},
  ];
  createForm: FormGroup;

  constructor() {
    this.createForm = new FormGroup({
      id: new FormControl(),
      employee: new FormControl('', Validators.required),
      customer: new FormControl('', Validators.required),
      facility: new FormControl('', Validators.required),
      dateStart: new FormControl('', Validators.required),
      dateEnd: new FormControl('', Validators.required),
      deposit: new FormControl('', Validators.required),
      totalPay: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.createForm.valid){
      alert('Thêm mới thành công !!!');
    }
  }
}
