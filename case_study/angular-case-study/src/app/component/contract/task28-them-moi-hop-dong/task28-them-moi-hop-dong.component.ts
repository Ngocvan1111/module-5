import { Component, OnInit } from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {Employee} from '../../../model/employee/employee';
import {Facility} from '../../../model/facility/facility';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {EmployeeService} from '../../../service/employee.service';
import {FacilityService} from '../../../service/facility.service';
import {Contract} from '../../../model/contract/contract';
import {ContractService} from '../../../service/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-task28-them-moi-hop-dong',
  templateUrl: './task28-them-moi-hop-dong.component.html',
  styleUrls: ['./task28-them-moi-hop-dong.component.css']
})
export class Task28ThemMoiHopDongComponent implements OnInit {
  customerList: Customer[] = [
    {id: 0, name: '', customerType: {id: 0, name: ''}},
  ];
  employeeList: Employee[] = [
    {id: 0, name: ''},
  ];
  facilityList: Facility[] = [
    {id: 0, name: '', facilityType: {id: 0, name: ''}}
  ];
  totalPay: number = 0;
  // @ts-ignore
  contract:Contract = {};
  createForm: FormGroup;

  constructor(private customerService:CustomerService,
              private employeeService: EmployeeService,
              private facilityService: FacilityService,
              private contractService: ContractService,
              private router: Router) {
    this.customerService.getAllCustomer().subscribe(date => {
      this.customerList = date;
    }, error => {
    }, () =>{})
    this.employeeService.getAllEmployee().subscribe(date => {
      this.employeeList = date
    }, error => {}, () => {})
    this.facilityService.getAllFacility().subscribe(date => {
      this.facilityList = date
    }, error => {}, () => {})

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
  calculateTotalPay(){
    if(this.createForm.value.deposit != undefined || this.createForm.value.deposit != null){
        this.totalPay = this.createForm.value.deposit*10;
    }
  }

  // tslint:disable-next-line:typedef
  onSubmit(){
    if (this.createForm.valid){
      this.contractService.saveContract(this.createForm.value).subscribe(date=>{
        console.log(date)
        this.createForm.reset();
        alert("Thêm mới thành công")
        this.router.navigateByUrl("task29-danh-sach-hop-dong").then(r => {})
      })}
    else {  alert('Submit thất bại'); }
  }
}
